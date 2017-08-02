import {
  LOAD_BOOK_DETAIL_PENDING,
  LOAD_BOOK_DETAIL_FINISHED,
  LOAD_BOOK_DETAIL_ERROR,
  BOOK_REMOVE_PENDING,
  BOOK_REMOVE_FINISHED,
  BOOK_REMOVE_ERROR
} from "../constants/constants";

const INITIAL_STATE = {
  book_details: {
    id: 0,
    title: "",
    description: "",
    authors: []
  }
};

function detailReducer(
  state = INITIAL_STATE,
  action = { type: "", payload: {} }
) {
  switch (action.type) {
    case LOAD_BOOK_DETAIL_PENDING:
      // api request is pending
      return state;
    case LOAD_BOOK_DETAIL_FINISHED:
      return Object.assign({}, state, {
        book_details: action.payload.body
      });
    case LOAD_BOOK_DETAIL_ERROR:
      // there was an error during call request for book detail. not gonna handle it now
      console.log("An error during API call: ", action.payload);
      return state;
    case BOOK_REMOVE_PENDING:
      // api request is pending
      return state;
    case BOOK_REMOVE_FINISHED:
      return Object.assign({}, state, {
        INITIAL_STATE
      });
    case BOOK_REMOVE_ERROR:
      return state;
    default:
      return state;
  }
}

export default detailReducer;
