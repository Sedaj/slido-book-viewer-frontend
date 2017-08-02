import {
  LOAD_BOOK_LIST,
  LOAD_BOOK_LIST_PENDING,
  LOAD_BOOK_LIST_FINISHED,
  LOAD_BOOK_LIST_ERROR
} from "../constants/constants";

export function loadBookList() {
  return {
    type: LOAD_BOOK_LIST
  };
}

export function bookListPending() {
  return {
    type: LOAD_BOOK_LIST_PENDING
  };
}

export function bookListFinished(data) {
  return {
    type: LOAD_BOOK_LIST_FINISHED,
    payload: data
  };
}

export function bookListError(data) {
  return {
    type: LOAD_BOOK_LIST_ERROR,
    payload: data
  };
}
