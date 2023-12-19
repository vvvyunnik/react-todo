import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { FilterType } from "../../constants/filters";
import TodoFilterPanel from "./TodoFilterPanel";

const mockStore = configureStore([]);

describe("TodoFilterPanel", () => {
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
    const store = mockStore(initialState);
      const panelElement = render(
        <Provider store={store}>
          <TodoFilterPanel />
        </Provider>
      );
    expect(panelElement).toMatchSnapshot();
  });

  test("renders correctly", () => {
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
    const store = mockStore(initialState);
      const {getByText} = render(
        <Provider store={store}>
          <TodoFilterPanel />
        </Provider>
      );
       const allButton = getByText("ALL");
       const completedButton = getByText("COMPLETED");
       const activeButton = getByText("ACTIVE");
       expect(allButton).toBeInTheDocument();
       expect(completedButton).toBeInTheDocument();
       expect(activeButton).toBeInTheDocument();
});
});
