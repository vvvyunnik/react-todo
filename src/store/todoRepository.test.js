import { getTodos, saveTodos } from "./todoRepository";
import LocalStorageKeys from "../constants/localStorageKeys";

describe("todoRepository", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("getTodos should return an empty array if localStorage is empty", () => {
    expect(getTodos()).toEqual([]);
  });

  test("getTodos should return todos from localStorage", () => {
    const mockTodos = [
      {
        id: 1,
        title: "Task 1",
      },
      {
        id: 2,
        title: "Task 2",
      },
    ];
    localStorage.setItem(LocalStorageKeys.Todo, JSON.stringify(mockTodos));
    const todos = getTodos();
    expect(todos).toEqual(mockTodos);
  });

  test("saveTodos should save todos to localStorage", () => {
    const mockTodos = [
      {
        id: 1,
        title: "Task 1",
      },
      {
        id: 2,
        title: "Task 2",
      },
    ];

    saveTodos(mockTodos);

    const todos = JSON.parse(localStorage.getItem(LocalStorageKeys.Todo));
    expect(todos).toEqual(mockTodos);
  });
});
