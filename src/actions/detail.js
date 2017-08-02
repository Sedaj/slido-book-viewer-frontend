import {
  LOAD_BOOK_DETAIL,
  REMOVE_BOOK_DETAIL,
  LOAD_BOOK_DETAIL_PENDING,
  LOAD_BOOK_DETAIL_FINISHED,
  LOAD_BOOK_DETAIL_ERROR,
  BOOK_REMOVE_PENDING,
  BOOK_REMOVE_FINISHED,
  BOOK_REMOVE_ERROR
} from "../constants/constants";

// -- actions

export function loadBookDetails(data) {
  return {
    type: LOAD_BOOK_DETAIL,
    payload: data
  };
}

export function removeBook(data) {
  return {
    type: REMOVE_BOOK_DETAIL,
    payload: data
  };
}

// -- thunk actions

export function bookDetailsPending() {
  return {
    type: LOAD_BOOK_DETAIL_PENDING
  };
}

export function bookDetailsFinished(data) {
  return {
    type: LOAD_BOOK_DETAIL_FINISHED,
    payload: data
  };
}

export function bookDetailsError(data) {
  return {
    type: LOAD_BOOK_DETAIL_ERROR,
    payload: data
  };
}

// --

export function bookRemovePending() {
  return {
    type: BOOK_REMOVE_PENDING
  };
}

export function bookRemoveFinished(data) {
  return {
    type: BOOK_REMOVE_FINISHED,
    payload: data
  };
}

export function bookRemoveError(data) {
  return {
    type: BOOK_REMOVE_ERROR,
    payload: data
  };
}
