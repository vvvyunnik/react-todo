import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
    test("matches snapshot", () => {
        const buttonElement = render(<Button onClick={() => {}}>Click here</Button>);
        expect(buttonElement).toMatchSnapshot();
    });

    test("renders correctly", () => {
        const { getByText } = render(<Button onClick={() => {}}>Click here</Button>);
        const buttonElement = getByText("Click here");
        expect(buttonElement).toBeInTheDocument();
    });

    test("calls onClick handler when clicked", () => {
        const onClickMock = jest.fn();
        const { getByText } = render(
            <Button onClick={onClickMock}>Click here</Button>
        );
        const buttonElement = getByText("Click here");
        fireEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalled();
    });
});
