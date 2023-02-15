import { render, fireEvent, screen } from "@testing-library/react";
import SearchInput from "../components/SearchInput";

describe("<SearchInput />", () => {
  test("renders input with correct props", () => {
    const onChange = jest.fn();
    const placeholder = "Search";
    const value = "Some value";
    const isOpen = true;

    render(<SearchInput value={value} onChange={onChange} placeholder={placeholder} isOpen={isOpen} />);

    const inputElement = screen.getByPlaceholderText(placeholder);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(value);
    expect(inputElement.classList.contains("is-open")).toBe(true);
  });

  test("calls onChange handler with the correct value", () => {
    const onChange = jest.fn();
    const placeholder = "Search";

    render(<SearchInput value="" onChange={onChange} placeholder={placeholder} isOpen={false} />);

    const inputElement = screen.getByPlaceholderText(placeholder);
    const testValue = "test";

    fireEvent.change(inputElement, { target: { value: testValue } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
