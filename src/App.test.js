import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { FilterType } from "./constants/filters";
import App from "./App";

const mockStore = configureStore([]);

describe("App", () => {
  test("matches snapshot", () => {
    const store = mockStore({
      todo: { items: [] },
      filter: { filter: FilterType.None },
    });
    const appElement = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(appElement).toMatchSnapshot();
  });
});
