import React from "react";
import Header from "./parts/header";
import Routing from "./router";
import Footer from "./parts/footer";
import { createBrowserHistory } from "history";
import List from "./parts/list";
import CreateButton from "./ui/createButton";
import Message from "./ui/message";

export const UniWrap = props => {
  return (
    <div id="main-wrapper">
      <Header env={props.env} />
      <div className="page-wrapper">
        <div className="row">
          <div className="column-6 nopad">
            <div className="book-list-wrapper">
              <List />
            </div>
          </div>
          <div className="column-6 nopad">
            <div className="book-detail-wrapper">
              <Message />
              <Routing />
            </div>
          </div>
        </div>
      </div>
      <CreateButton history={props.history} />
      <Footer />
    </div>
  );
};

export default UniWrap;
