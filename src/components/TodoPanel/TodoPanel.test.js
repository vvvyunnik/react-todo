import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { FilterType } from "../../constants/filters";
import TodoPanel from "./TodoPanel";

const mockStore = configureStore([]);

const renderTodoPanelWithState = (initialState) => {
    const store = mockStore(initialState);
    return render(
        <Provider store={store}>
            <TodoPanel />
        </Provider>
    );
};

describe("TodoPanel", () => {
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

        const todoPanelElement = renderTodoPanelWithState(initialState);

        expect(todoPanelElement).toMatchSnapshot();
    });

    test("displays the correct active tasks count", () => {
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

        const { getByText } = renderTodoPanelWithState(initialState);

        const activeCountElement = getByText("2 items left");

        expect(activeCountElement).toBeInTheDocument();
    });
});
