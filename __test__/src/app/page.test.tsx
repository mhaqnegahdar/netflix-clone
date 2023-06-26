import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";

test("This is a test test", () => {
  render(<Home />);

  const textElement = screen.getByText("Netflix Clone");

  expect(textElement).toBeInTheDocument();
});
