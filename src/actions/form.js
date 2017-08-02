import {
  SUBMIT_POST_BOOK,
  SUBMIT_PUT_BOOK,
  SUBMIT_BOOK_PENDING,
  SUBMIT_BOOK_FINISHED,
  SUBMIT_BOOK_ERROR,
  SUBMIT_BOOK_EDIT_PENDING,
  SUBMIT_BOOK_EDIT_FINISHED,
  SUBMIT_BOOK_EDIT_ERROR,
  LOAD_EDIT_FORM,
  LOAD_CLEAN_FORM
} from "../constants/constants";

// -- actions

export function submitPostBook() {
  return {
    type: SUBMIT_POST_BOOK
  };
}

export function submitPutBook() {
  return {
    type: SUBMIT_PUT_BOOK
  };
}

export function loadCleanForm() {
  return {
    type: LOAD_CLEAN_FORM
  };
}

export function loadEditForm(data) {
  return {
    type: LOAD_EDIT_FORM,
    payload: data
  };
}

// -- thunk actions

export function submitBookPending() {
  return {
    type: SUBMIT_BOOK_PENDING
  };
}

export function submitBookFinished(data) {
  return {
    type: SUBMIT_BOOK_FINISHED,
    payload: data
  };
}

export function submitBookError(data) {
  return {
    type: SUBMIT_BOOK_ERROR,
    payload: data
  };
}

export function submitBookEditPending() {
  return {
    type: SUBMIT_BOOK_EDIT_PENDING
  };
}

export function submitBookEditFinished(data) {
  return {
    type: SUBMIT_BOOK_EDIT_FINISHED,
    payload: data
  };
}

export function submitBookEditError(data) {
  return {
    type: SUBMIT_BOOK_EDIT_ERROR,
    payload: data
  };
}
