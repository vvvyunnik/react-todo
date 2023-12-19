import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
    test("matches snapshot", () => {
        const component = render( < Header / > );
        expect(component).toMatchSnapshot();
    });
});
