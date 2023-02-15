import { render, fireEvent, screen } from "@testing-library/react";
import SearchSelectDropdown from "../components/SearchSelectDropdown";

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

describe("<SearchSelectDropdown />", () => {
  test("renders select dropdown", () => {
    const handleChange = jest.fn();
    render(<SearchSelectDropdown options={options} onChange={handleChange} />);

    const selectedOption = screen.getByPlaceholderText("Select an item");
    expect(selectedOption).toBeInTheDocument();

    fireEvent.click(selectedOption);

    const option1 = screen.getByText("Option 1");
    const option2 = screen.getByText("Option 2");
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();

    fireEvent.click(option1);
    expect(handleChange).toHaveBeenCalledWith(options[0]);

    fireEvent.change(selectedOption, { target: { value: "Option 2" } });
    expect(option1).not.toBeInTheDocument();
    expect(option2).not.toBeInTheDocument();

    expect(selectedOption).toHaveClass("is-open");
  });
});
