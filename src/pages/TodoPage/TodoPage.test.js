import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { FilterType } from "../../constants/filters";
import TodoPage from "./TodoPage";

const mockStore = configureStore([]);

describe("TodoPage", () => {
  afterEach(cleanup);

  test("matches snapshot", () => {
    const store = mockStore({
      todo: { items: [] },
      filter: { filter: FilterType.None },
    });
    const todoElement = render(
      <Provider store={store}>
        <TodoPage />
      </Provider>
    );

    expect(todoElement).toMatchSnapshot();
  });
});
