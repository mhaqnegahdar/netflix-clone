import { render, screen } from "@testing-library/react";
import Input from "@/components/inputs/Input";
import "@testing-library/jest-dom";

test("This is a test test", () => {
  render(<Input name="name" label="Name" />);

  const textElement = screen.getByText("Name");

  expect(textElement).toBeInTheDocument();
});
