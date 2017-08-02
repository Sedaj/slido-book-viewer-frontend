import React from "react";
import { connect } from "react-redux";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentWillReceiveProps() {
    this.setState({ show: true });
    setTimeout(() => {
      this.setState({ show: false });
    }, 5000);
  }

  render() {
    const { type, text } = this.props.message;

    return (
      <div
        className={
          "message message--" + type + (!this.state.show ? " hidden" : "")
        }
      >
        {text}
      </div>
    );
  }
}

export default connect(state => {
  return {
    message: state.messageReducer.message
  };
})(Message);
