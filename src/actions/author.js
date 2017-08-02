import {
  LOAD_AUTHOR_LIST,
  LOAD_AUTHOR_LIST_PENDING,
  LOAD_AUTHOR_LIST_FINISHED,
  LOAD_AUTHOR_LIST_ERROR
} from "../constants/constants";

// -- actions

export function loadAuthorList() {
  return {
    type: LOAD_AUTHOR_LIST
  };
}

// -- thunk actions

export function authorListPending() {
  return {
    type: LOAD_AUTHOR_LIST_PENDING
  };
}

export function authorListFinished(data) {
  return {
    type: LOAD_AUTHOR_LIST_FINISHED,
    payload: data
  };
}

export function authorListError(data) {
  return {
    type: LOAD_AUTHOR_LIST_ERROR,
    payload: data
  };
}
