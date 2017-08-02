import React from "react";
import IndexComponent from "./pages/index";
import DetailComponent from "./pages/detail";
import EditComponent from "./pages/edit";
import CreateComponent from "./pages/create";

import { Switch, Route } from "react-router";

const Routing = () =>
  <Switch>
    <Route exact path="/" component={IndexComponent} />
    <Route path="/detail/:id" component={DetailComponent} />
    <Route path="/edit/:id" component={EditComponent} />
    <Route path="/create" component={CreateComponent} />
  </Switch>;

export default Routing;
