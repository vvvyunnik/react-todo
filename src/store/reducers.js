import { combineReducers } from "redux"

import todoReducer from "./todoSlice";
import filterReducer from "./filterSlice";

export default combineReducers({
    todo: todoReducer,
    filter: filterReducer,
})
