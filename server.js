import path from "path";
import { Server } from "http";
import Express from "express";
import React from "react";
import { Provider, Store } from "react-redux";
import { renderToString } from "react-dom/server";
import { StaticRouter, Switch, Route } from "react-router";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./src/reducers/rootReducer";
import { createBrowserHistory } from "history";
import UniWrap from "./src/components/uniWrap";

const app = new Express();
const server = new Server(app);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(Express.static(path.join(__dirname, "public")));

let store = createStore(rootReducer);

app.get("*", (req, res) => {
  const context = {};

  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <UniWrap env="server" history={createBrowserHistory} />
      </StaticRouter>
    </Provider>
  );

  res.status(200).render("main", { markup });
});

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "production";
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
