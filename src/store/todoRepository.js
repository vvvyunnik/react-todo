import LocalStorageKeys from "../constants/localStorageKeys";

export const getTodos = () => {
  try {
    const todos = localStorage.getItem(LocalStorageKeys.Todo);
    return todos ? JSON.parse(todos) : [];
  } catch (error) {
    return [];
  }
};

export const saveTodos = (todos) => {
  localStorage.setItem(LocalStorageKeys.Todo, JSON.stringify(todos));
};
