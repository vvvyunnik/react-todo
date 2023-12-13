import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import filterReducer from "./filterSlice";
import { getTodos, saveTodos } from "./todoRepository";

const preloadedState = {
  todo: { items: getTodos() },
};

const store = configureStore({
  reducer: {
    todo: todoReducer,
    filter: filterReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveTodos(store.getState().todo.items);
});

export default store;
