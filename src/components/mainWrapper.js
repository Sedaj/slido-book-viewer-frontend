import React from "react";
import { createBrowserHistory } from "history";
import { Router } from "react-router";
import UniWrap from "./uniWrap";

export const MainWrapper = () => {
  let history = createBrowserHistory();
  return (
    <Router history={history}>
      <UniWrap env="client" history={history} />
    </Router>
  );
};

export default MainWrapper;
