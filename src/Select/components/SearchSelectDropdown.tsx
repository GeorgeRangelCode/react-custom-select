import React, { useState } from "react";
import { Option } from "../interfaces/interfaces";
import SelectedOption from "./SelectedOption";
import OptionsList from "./OptionsList";
import "../styles/index.scss";

interface Props {
  options: Option[];
  onChange: (option: Option) => void;
}

const SearchSelectDropdown: React.FC<Props> = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(true);
    setSearchText(event.target.value);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setSearchText("");
    setIsOpen(false);
    onChange(option);
  };

  const filteredOptions = options.filter(option => {
    return option.label.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="search-select-dropdown">
      <SelectedOption
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
        value={searchText}
        placeholder={selectedOption ? selectedOption.label : "Select an item"}
        onChange={handleSearchChange}
      />
      {isOpen && <OptionsList options={filteredOptions} onClick={handleOptionClick} />}
    </div>
  );
};

export default SearchSelectDropdown;
