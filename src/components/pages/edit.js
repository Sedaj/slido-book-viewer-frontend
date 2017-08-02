import React from "react";
import { connect } from "react-redux";
import BookForm from "../../forms/book";
import { loadEditForm, submitPutBook } from "../../actions/form";

class EditComponent extends React.Component {
  componentDidMount() {
    this.props.loadEditForm(this.props.detail);
  }

  submitForm() {
    this.props.submitPutBook();
  }

  render() {
    return <BookForm submitForm={() => this.submitForm()} />;
  }
}

export default connect(
  state => {
    return {
      detail: state.detailReducer.book_details
    };
  },
  dispatch => {
    return {
      loadEditForm: data => dispatch(loadEditForm(data)),
      submitPutBook: () => dispatch(submitPutBook())
    };
  }
)(EditComponent);
