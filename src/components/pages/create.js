import React from "react";
import { connect } from "react-redux";
import BookForm from "../../forms/book";
import { loadCleanForm, submitPostBook } from "../../actions/form";

class CreateComponent extends React.Component {
  componentDidMount() {
    this.props.loadCleanForm();
  }

  submitForm() {
    this.props.submitPostBook();
  }

  render() {
    return <BookForm submitForm={() => this.submitForm()} />;
  }
}

export default connect(null, dispatch => {
  return {
    loadCleanForm: () => dispatch(loadCleanForm()),
    submitPostBook: () => dispatch(submitPostBook())
  };
})(CreateComponent);
