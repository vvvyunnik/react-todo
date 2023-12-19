import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import filterReducer from "./filterSlice";

describe("store", () => {
  it("should initialize with correct reducers", () => {
    const store = configureStore({
      reducer: {
        todo: todoReducer,
        filter: filterReducer,
      },
    });

    expect(store.getState().todo).toBeDefined();
    expect(store.getState().filter).toBeDefined();
  });
});
