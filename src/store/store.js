import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducers';
import { getTodos, saveTodos } from "./todoRepository";

const preloadedState = {
  todo: { items: getTodos() },
};

const store = configureStore({
  reducer,
  preloadedState,
});

store.subscribe(() => {
  saveTodos(store.getState().todo.items);
});

export default store;
