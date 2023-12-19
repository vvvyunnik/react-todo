import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TodoItem from "./TodoItem";

jest.mock("../../store/todoSlice.js", () => ({
  updateTodo: jest.fn(),
  removeTodo: jest.fn(),
}));

const mockStore = configureStore([]);

const renderTodoItemWithState = (initialState) => {
  const store = mockStore(initialState);
  return render(
    <Provider store={store}>
      <TodoItem id="1" text="Sample Todo" completed={false} />
    </Provider>
  );
};

describe("TodoItem", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("matches snapshot", () => {
    const initialState = {
        todo: {
          items: [{ id: "1", text: "Sample Todo", completed: false }],
        },
      };

    const todoItemElement = renderTodoItemWithState(initialState);
    expect(todoItemElement).toMatchSnapshot();
  });
});
