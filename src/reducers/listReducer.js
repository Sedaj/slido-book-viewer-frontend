import {
  LOAD_BOOK_LIST_PENDING,
  LOAD_BOOK_LIST_FINISHED,
  LOAD_BOOK_LIST_ERROR,
  BOOK_REMOVE_PENDING,
  BOOK_REMOVE_FINISHED,
  BOOK_REMOVE_ERROR,
  SUBMIT_BOOK_PENDING,
  SUBMIT_BOOK_FINISHED,
  SUBMIT_BOOK_EDIT_FINISHED,
  SUBMIT_BOOK_ERROR
} from "../constants/constants";

const INITIAL_STATE = {
  list: [
    {
      id: 0,
      title: ""
    }
  ]
};

let eList = [];
let book = {};

function listReducer(
  state = INITIAL_STATE,
  action = { type: "", payload: {} }
) {
  eList = [];
  book = {};
  switch (action.type) {
    case LOAD_BOOK_LIST_PENDING:
      // api request is pending
      return state;
    case LOAD_BOOK_LIST_FINISHED:
      return Object.assign({}, state, {
        list: action.payload.body
      });
    case LOAD_BOOK_LIST_ERROR:
      // there was an error during call request for book list. not gonna handle it now
      console.log("An error during API call: ", action.payload);
      return state;
    case BOOK_REMOVE_PENDING:
      return state;
    case BOOK_REMOVE_ERROR:
      return state;
    case BOOK_REMOVE_FINISHED:
      let id = parseInt(action.payload.body);
      for (let i in state.list) {
        if (state.list[i].id !== id) {
          eList.push(state.list[i]);
        }
      }
      return Object.assign({}, state, {
        list: eList
      });
    case SUBMIT_BOOK_PENDING:
      return state;
    case SUBMIT_BOOK_FINISHED:
      book = JSON.parse(action.payload.body);
      book.id = parseInt(book.id);
      eList = state.list.slice(0);
      eList.push(book);

      return Object.assign({}, state, {
        list: eList
      });
    case SUBMIT_BOOK_EDIT_FINISHED:
      book = JSON.parse(action.payload.body);
      book.id = parseInt(book.id);

      eList = state.list.slice(0);
      eList = eList.map(listBook => {
        if (book.id === listBook.id) {
          return {
            id: listBook.id,
            title: book.title
          };
        } else {
          return listBook;
        }
      });

      return Object.assign({}, state, {
        list: eList
      });
    case SUBMIT_BOOK_ERROR:
      return state;
    default:
      return state;
  }
}

export default listReducer;
