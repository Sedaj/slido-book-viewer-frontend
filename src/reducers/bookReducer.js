import {
  SUBMIT_POST_BOOK,
  LOAD_EDIT_FORM,
  LOAD_CLEAN_FORM
} from "../constants/constants";
import { modeled } from "react-redux-form";

const INITIAL_STATE = {
  id: 0,
  title: "",
  description: "",
  authors: []
};

function bookReducer(
  state = INITIAL_STATE,
  action = { type: "", payload: {} }
) {
  switch (action.type) {
    case SUBMIT_POST_BOOK:
    case LOAD_CLEAN_FORM:
      return Object.assign({}, state, INITIAL_STATE);
    case LOAD_EDIT_FORM:
      return Object.assign({}, state, {
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        authors: action.payload.authors
      });
    default:
      return state;
  }
}

export default modeled(bookReducer, "bookModel");
