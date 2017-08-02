import React from "react";
import Logo from "../ui/logo";

const Header = props =>
  <div className="header">
    <div className="nav-container">
      <div className="container">
        <div className="row">
          <div className="column-9">
            <Logo />
            <span>
              book_viewer_2.0. Loaded from: {props.env}
            </span>
          </div>
          <div className="column-3" />
        </div>
      </div>
    </div>
  </div>;

export default Header;
