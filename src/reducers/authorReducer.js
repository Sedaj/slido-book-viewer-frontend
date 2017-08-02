import {
  LOAD_AUTHOR_LIST_PENDING,
  LOAD_AUTHOR_LIST_FINISHED,
  LOAD_AUTHOR_LIST_ERROR
} from "../constants/constants";

const INITIAL_STATE = {
  authors: [
    {
      id: 0,
      name: ""
    }
  ]
};

function authorReducer(
  state = INITIAL_STATE,
  action = { type: "", payload: {} }
) {
  switch (action.type) {
    case LOAD_AUTHOR_LIST_PENDING:
      // api request is pending
      return state;
    case LOAD_AUTHOR_LIST_FINISHED:
      return Object.assign({}, state, {
        authors: action.payload.body
      });
    case LOAD_AUTHOR_LIST_ERROR:
      // there was an error during call request for book detail. not gonna handle it now
      console.log("An error during API call: ", action.payload);
      return state;
    default:
      return state;
  }
}

export default authorReducer;
