import {
  SUBMIT_BOOK_FINISHED,
  SUBMIT_BOOK_EDIT_FINISHED,
  SUBMIT_BOOK_ERROR,
  TYPE_MESSAGE_WARNING,
  TYPE_MESSAGE_SUCCESS
} from "../constants/constants";

const INITIAL_STATE = {
  message: {
    type: TYPE_MESSAGE_WARNING,
    text: ""
  }
};

function messageReducer(
  state = INITIAL_STATE,
  action = { type: "", payload: {} }
) {
  switch (action.type) {
    case SUBMIT_BOOK_FINISHED:
      return Object.assign({}, state, {
        message: {
          type: TYPE_MESSAGE_SUCCESS,
          text: "Book successfully submitted"
        }
      });
    case SUBMIT_BOOK_EDIT_FINISHED:
      return Object.assign({}, state, {
        message: {
          type: TYPE_MESSAGE_SUCCESS,
          text: "Book successfully updated"
        }
      });
    case SUBMIT_BOOK_ERROR:
      return Object.assign({}, state, {
        message: {
          type: TYPE_MESSAGE_WARNING,
          text: "There was an error during processing your request"
        }
      });
    default:
      return state;
  }
}

export default messageReducer;
