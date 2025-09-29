import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../src/App";

test("Renders welcome message", () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const welcomeText = getByText(/welcome/i);
  expect(welcomeText).toBeInTheDocument();
});
