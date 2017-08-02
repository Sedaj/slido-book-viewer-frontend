import { combineReducers } from "redux";
import listReducer from "./listReducer";
import detailReducer from "./detailReducer";
import bookReducer from "./bookReducer";
import authorReducer from "./authorReducer";
import buttonReducer from "./buttonReducer";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
  listReducer,
  detailReducer,
  authorReducer,
  buttonReducer,
  messageReducer,
  bookModel: bookReducer
});

export default rootReducer;
