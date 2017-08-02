import React from "react";
import ReactDOM from "react-dom";
import rootReducer from "./src/reducers/rootReducer";
import MainComponent from "./src/components/main";
import { createStore, applyMiddleware, compose } from "redux";
import { Store } from "react-redux";
import thunkMiddleware from "redux-thunk";
import apiMiddleware from "./src/middleware/apiMiddleware";

process.env.NODE_ENV === "development" && require("./style/main.scss");
module.hot && module.hot.accept();

let store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(apiMiddleware, thunkMiddleware))
);

ReactDOM.render(
  <MainComponent store={store} />,
  document.getElementById("app")
);
