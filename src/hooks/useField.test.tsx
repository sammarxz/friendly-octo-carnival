import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Field } from "@/components/Field";

import { useField } from "./useField";

const errorMockMessage = "Value should have at least 5 characters"

const TestComponentWrapper = () => {
  const TestComponent = () => {
    const field = useField({
      type: "text",
      validate: (value: string) => {
        if (value.length < 5) {
          return errorMockMessage
        }
        return undefined;
      },
    });

    return (
      <Field label="test" fieldProps={field} />
    )
  }

  return <TestComponent />
};

describe("useField", () => {
  test("should update value on input change", () => {
    render(<TestComponentWrapper />)
    const input = screen.getByRole("textbox")

    fireEvent.change(input, {
      target: {
        value: "Test Value",
      },
    });

    expect(input).toHaveValue("Test Value");
  });

  test("should validate field correctly", () => {
    render(<TestComponentWrapper />)
    const input = screen.getByRole("textbox")

    fireEvent.change(input, {
      target: {
        value: "Test",
      },
    });

    const errorSpan = screen.getByText(errorMockMessage)

    expect(errorSpan).toBeInTheDocument()
  });
});
