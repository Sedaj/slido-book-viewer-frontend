import call from "../helpers/call";
import {
  API_CALL_TYPE_LIST,
  API_CALL_TYPE_DETAILS,
  API_CALL_TYPE_REMOVE,
  API_CALL_TYPE_AUTHORS,
  API_CALL_TYPE_SUBMIT_BOOK,
  API_CALL_TYPE_SUBMIT_EDIT_BOOK,
  METHOD_GET,
  METHOD_DELETE,
  METHOD_POST,
  METHOD_PUT
} from "../constants/constants";
import {
  bookListPending,
  bookListFinished,
  bookListError
} from "../actions/list";
import {
  authorListPending,
  authorListFinished,
  authorListError
} from "../actions/author";
import {
  bookDetailsPending,
  bookDetailsFinished,
  bookDetailsError,
  bookRemovePending,
  bookRemoveFinished,
  bookRemoveError
} from "../actions/detail";
import {
  submitBookPending,
  submitBookFinished,
  submitBookError,
  submitBookEditPending,
  submitBookEditFinished,
  submitBookEditError
} from "../actions/form";

export function requestBookList() {
  return function(dispatch) {
    dispatch(bookListPending());
    return call(API_CALL_TYPE_LIST, METHOD_GET)
      .then(res => {
        dispatch(bookListFinished(JSON.parse(res)));
      })
      .catch(err => {
        dispatch(bookListError(err));
      });
  };
}

export function requestBookDetail(id) {
  return function(dispatch) {
    dispatch(bookDetailsPending());
    return call(API_CALL_TYPE_DETAILS, METHOD_GET, id)
      .then(res => {
        dispatch(bookDetailsFinished(JSON.parse(res)));
      })
      .catch(err => {
        dispatch(bookDetailsError(err));
      });
  };
}

export function removeBook(id) {
  return function(dispatch) {
    dispatch(bookRemovePending());
    return call(API_CALL_TYPE_REMOVE, METHOD_DELETE, id)
      .then(res => {
        dispatch(bookRemoveFinished(JSON.parse(res)));
      })
      .catch(err => {
        dispatch(bookRemoveError(err));
      });
  };
}

export function loadAuthorList() {
  return function(dispatch) {
    dispatch(authorListPending());
    return call(API_CALL_TYPE_AUTHORS, METHOD_GET)
      .then(res => {
        dispatch(authorListFinished(JSON.parse(res)));
      })
      .catch(err => {
        dispatch(authorListError(err));
      });
  };
}

export function submitPostBook(data) {
  return function(dispatch) {
    dispatch(submitBookPending());
    return call(API_CALL_TYPE_SUBMIT_BOOK, METHOD_POST, null, data)
      .then(res => {
        dispatch(submitBookFinished(JSON.parse(res)));
      })
      .catch(err => {
        dispatch(submitBookError(err));
      });
  };
}

export function submitPutBook(data) {
  return function(dispatch) {
    dispatch(submitBookEditPending());
    return call(API_CALL_TYPE_SUBMIT_EDIT_BOOK, METHOD_PUT, data.id, data)
      .then(res => {
        dispatch(submitBookEditFinished(JSON.parse(res)));
      })
      .catch(err => {
        dispatch(submitBookEditError(err));
      });
  };
}
