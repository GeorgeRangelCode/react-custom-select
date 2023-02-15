import { render, fireEvent, screen } from "@testing-library/react";
import OptionsList from "../components/OptionsList";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
];

describe("<OptionsList />", () => {
  test("renders options correctly", () => {
    const handleClick = jest.fn();
    render(<OptionsList options={options} onClick={handleClick} />);

    options.forEach(option => {
      const optionElement = screen.getByText(option.label);
      expect(optionElement).toBeInTheDocument();
    });
  });

  test("calls onClick with the correct option when clicked", () => {
    const handleClick = jest.fn();
    render(<OptionsList options={options} onClick={handleClick} />);

    const optionElement = screen.getByText(options[0].label);
    fireEvent.click(optionElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(options[0]);
  });
});
