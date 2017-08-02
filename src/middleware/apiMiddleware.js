import {
  UPDATE_QUERY,
  UPDATE_DETAILS_QUERY,
  LOAD_BOOK_LIST,
  REMOVE_BOOK_DETAIL,
  LOAD_AUTHOR_LIST,
  LOAD_BOOK_DETAIL,
  SUBMIT_POST_BOOK,
  SUBMIT_PUT_BOOK,
  LOAD_EDIT_FORM
} from "../constants/constants";
import {
  requestBookList,
  requestBookDetail,
  removeBook,
  loadAuthorList,
  submitPostBook,
  submitPutBook
} from "../actions/api";
import { actions } from "react-redux-form";

export const apiMiddleware = store => next => action => {
  switch (action.type) {
    case LOAD_BOOK_LIST:
      store.dispatch(requestBookList());
      break;
    case LOAD_BOOK_DETAIL:
      store.dispatch(requestBookDetail(action.payload));
      store.dispatch(loadAuthorList());
      break;
    case REMOVE_BOOK_DETAIL:
      store.dispatch(removeBook(action.payload));
      break;
    case LOAD_AUTHOR_LIST:
      store.dispatch(loadAuthorList());
      break;
    case LOAD_EDIT_FORM:
      break;
    case SUBMIT_POST_BOOK:
      store.dispatch(submitPostBook(store.getState().bookModel));
      store.dispatch(actions.reset("createForm"));
      break;
    case SUBMIT_PUT_BOOK:
      store.dispatch(submitPutBook(store.getState().bookModel));
      break;
    default:
      break;
  }

  next(action);
};

export default apiMiddleware;
