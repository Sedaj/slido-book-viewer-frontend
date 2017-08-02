import React from "react";

const CreateButtonComponent = props =>
  <div
    className="create-button-wrapper"
    onClick={() => props.history.push("/create")}
  >
    <div className="create-button">
      <img src="https://i.imgur.com/O5cvjp0.png" />
    </div>
  </div>;

export default CreateButtonComponent;
