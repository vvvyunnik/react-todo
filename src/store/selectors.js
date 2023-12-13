import { createSelector } from "@reduxjs/toolkit";
import { FilterType } from "../constants/filters";

export const selectTodos = (state) => state.todo.items;
export const selectFilter = (state) => state.filter.filter;

export const selectActiveTodosCount = (state) =>
  state.todo.items.filter((item) => !item.completed).length;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    switch (filter) {
      case FilterType.Active:
        return todos.filter((todo) => !todo.completed);
      case FilterType.Completed:
        return todos.filter((todo) => todo.completed);
      case FilterType.None:
      default:
        return [...todos];
    }
  }
);
