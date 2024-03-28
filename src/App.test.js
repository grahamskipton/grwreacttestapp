import { render, fireEvent, screen } from "@testing-library/react";
import Home from "../src/Application/Pages/Home";

//test block
test("increments counter", () => {
// render the component on virtual dom

render(<Home />)
const { getByText } = within(screen.getByTestId('body'))
expect(getByText('lorum')).toBeInTheDocument()

});
