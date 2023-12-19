import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TodoList from "./TodoList";
import { FilterType } from "../../constants/filters";

const mockStore = configureStore([]);

const renderTodoListWithState = (initialState) => {
  const store = mockStore(initialState);
  return render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

describe("TodoList", () => {
  test("matches snapshot", () => {
    const initialState = {
      todo: {
        items: [
          { id: 1, text: "Task 1", completed: false },
          { id: 2, text: "Task 2", completed: true },
          { id: 3, text: "Task 3", completed: false },
        ],
      },
      filter: { filter: FilterType.None },
    };

    const todoListElement = renderTodoListWithState(initialState);

    expect(todoListElement).toMatchSnapshot();
  });

  test("renders 'No todos' when todos is empty", () => {
    const initialState = {
      todo: {
        items: [],
      },
      filter: { filter: FilterType.None },
    };

    const { getByText } = renderTodoListWithState(initialState);
    const noItemTextElement = getByText("No todos");

    expect(noItemTextElement).toBeInTheDocument();
  });

  test("renders todos", () => {
    const todos = [
      { id: 1, text: "Todo 1", completed: false },
      { id: 2, text: "Todo 2", completed: true },
    ];

    const initialState = {
      todo: {
        items: todos,
      },
      filter: { filter: FilterType.None },
    };

    const { getByText } = renderTodoListWithState(initialState);

    todos.forEach((todo) => {
      const todoItemElement = getByText(todo.text);
      expect(todoItemElement).toBeInTheDocument();
    });
  });
});
