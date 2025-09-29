import {render} from "@testing-library/react";
import App from "../src/App"

test("Renders welcome message", () => { 
    const {getByText} = render(<App />);
    const welcomeText = getByText(/welcome/i);
    expect(welcomeText).toBeInTheDocument();
});