import { render, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import TodoInput from "./TodoInput";
import { addTodo } from "../../store/todoSlice";
import { setFilter } from "../../store/filterSlice";
import { FilterType } from "../../constants/filters";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

jest.mock("../../store/todoSlice", () => ({
  addTodo: jest.fn(),
}));

jest.mock("../../store/filterSlice", () => ({
  setFilter: jest.fn(),
}));

describe("TodoInput", () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  test("matches snapshot", () => {
    const todoInputElement = render(<TodoInput />);
    expect(todoInputElement).toMatchSnapshot();
  });

  test("renders correctly", () => {
    const { getByPlaceholderText } = render(<TodoInput />);
    const inputElement = getByPlaceholderText("Add a new todo");
    expect(inputElement).toBeInTheDocument();
  });

  test("presses Enter with a non-empty todo", () => {
    const { getByPlaceholderText } = render(<TodoInput />);
    const inputElement = getByPlaceholderText("Add a new todo");

    fireEvent.change(inputElement, { target: { value: "New Todo" } });
    fireEvent.keyUp(inputElement, { key: "Enter" });

    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(addTodo).toHaveBeenCalledWith("New Todo");
    expect(setFilter).toHaveBeenCalledWith(FilterType.None); // Corrected this line
  });
});
