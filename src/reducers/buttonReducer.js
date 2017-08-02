import {
  SUBMIT_BOOK_PENDING,
  SUBMIT_BOOK_FINISHED,
  SUBMIT_BOOK_ERROR
} from "../constants/constants";

const INITIAL_STATE = {
  button_states: {
    submitPostBook: true
  }
};

function buttonReducer(
  state = INITIAL_STATE,
  action = { type: "", payload: {} }
) {
  switch (action.type) {
    case SUBMIT_BOOK_PENDING:
      return Object.assign({}, state, {
        button_states: {
          submitPostBook: false
        }
      });
    case SUBMIT_BOOK_FINISHED:
    case SUBMIT_BOOK_ERROR:
      return Object.assign({}, state, {
        button_states: {
          submitPostBook: true
        }
      });
    default:
      return state;
  }
}

export default buttonReducer;
