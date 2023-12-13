import LocalStorageKeys from "../constants/localStorageKeys";

export const getTodos = () => {
  try {
    const todos = localStorage.getItem(LocalStorageKeys.Todo);
    return todos ? JSON.parse(todos) : [];
  } catch (error) {
    console.error("Error getting todos from local storage", error);
    return [];
  }
};

export const saveTodos = (todos) => {
  try {
    localStorage.setItem(LocalStorageKeys.Todo, JSON.stringify(todos));
  } catch (error) {
    console.error("Error saving todos to local storage", error);
  }
};
