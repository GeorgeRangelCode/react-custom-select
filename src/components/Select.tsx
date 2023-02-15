import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./Select.scss";

interface Option {
  label: string;
  value: string;
}

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
      <div className="search-select-dropdown__selected-option" onClick={() => setIsOpen(!isOpen)}>
        <input
          type="text"
          className={`search-select-dropdown__search ${isOpen ? "is-open" : ""}`}
          value={searchText}
          onChange={handleSearchChange}
          placeholder={selectedOption ? selectedOption.label : "Select an item"}
        />
        {isOpen ? (
          <FiChevronUp className="search-select-dropdown__icon" />
        ) : (
          <FiChevronDown className="search-select-dropdown__icon" />
        )}
      </div>
      {isOpen && (
        <div className="search-select-dropdown__options">
          {filteredOptions.map(option => (
            <div
              key={option.value}
              className="search-select-dropdown__option"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchSelectDropdown;
