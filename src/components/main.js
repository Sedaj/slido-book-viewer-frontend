import * as React from "react";
import { Provider, Store } from "react-redux";
import MainWrapper from "./mainWrapper";

const MainComponent = props => {
  return <Provider store={props.store}><MainWrapper /></Provider>;
};

export default MainComponent;
