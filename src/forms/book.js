import React from "react";
import { Field } from "react-redux-form";
import { loadAuthorList } from "../actions/author";
import { connect } from "react-redux";

class BookForm extends React.Component {
  componentDidMount() {
    this.props.loadAuthorList();
  }

  render() {
    const { authors, button_state, submitForm } = this.props;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          submitForm();
        }}
      >
        <Field model="bookModel.title" className="form-create__form-field">
          <label>Book Title</label>
          <input required className="form-create__input" type="text" />
        </Field>
        <Field
          model="bookModel.description"
          className="form-create__form-field"
        >
          <label>Book Description</label>
          <textarea
            required
            className="form-create__input form-create__input--textarea"
          />
        </Field>
        <Field model="bookModel.authors" className="form-create__form-field">
          <label>Authors</label>
          <select className="form-create__input" multiple>
            {authors.map((author, i) =>
              <option value={author.id} key={i}>
                {author.name}
              </option>
            )}
          </select>
        </Field>
        <div className="form-create__form-field form-create__form--submit">
          <button
            className={
              "form-create__input form-create__input--submit " +
              (button_state === false ? " disabled" : "")
            }
          >
            Enrich the Library
          </button>
        </div>
      </form>
    );
  }
}

export default connect(
  state => {
    return {
      authors: state.authorReducer.authors,
      button_state: state.buttonReducer.button_states.submitPostBook
    };
  },
  dispatch => {
    return {
      loadAuthorList: () => dispatch(loadAuthorList())
    };
  }
)(BookForm);
