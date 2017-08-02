import React from "react";

const CreateButtonComponent = props =>
  <div
    className="create-button-wrapper"
    onClick={() => props.history.push("/create")}
  >
    <div className="create-button">
      <img src="https://lh4.googleusercontent.com/janERu6189Pxno3kuDi558YcklyxjBS931jHBFNs3fkbLuEB5BeeCNazjSQxLqLHg8NrnaakjpZaTBg=w1920-h952" />
    </div>
  </div>;

export default CreateButtonComponent;
