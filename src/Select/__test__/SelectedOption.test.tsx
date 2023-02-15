import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SelectedOption from "../components/SelectedOption";

describe("<SelectedOption />", () => {
  const onToggle = jest.fn();
  test("renders a chevron down icon when closed", () => {
    render(
      <SelectedOption isOpen={false} onToggle={onToggle} value="" placeholder="Select an item" onChange={() => {}} />,
    );
    expect(screen.getByTestId("chevron-down-icon")).toBeInTheDocument();
  });

  test("renders a chevron up icon when open", () => {
    render(
      <SelectedOption isOpen={true} onToggle={onToggle} value="" placeholder="Select an item" onChange={() => {}} />,
    );
    expect(screen.getByTestId("chevron-up-icon")).toBeInTheDocument();
  });

  test("calls onToggle when the selected option is clicked", () => {
    render(
      <SelectedOption isOpen={false} onToggle={onToggle} value="" placeholder="Select an item" onChange={() => {}} />,
    );
    fireEvent.click(screen.getByTestId("selected-option"));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });
});
