import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import SearchInput from "./SearchInput";

interface Props {
  isOpen: boolean;
  onToggle: () => void;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SelectedOption: React.FC<Props> = ({ isOpen, onToggle, value, placeholder, onChange }) => (
  <div className="search-select-dropdown__selected-option" onClick={onToggle} data-testid="selected-option">
    <SearchInput value={value} onChange={onChange} placeholder={placeholder} isOpen={isOpen} />
    {isOpen ? (
      <FiChevronUp className="search-select-dropdown__icon" data-testid="chevron-up-icon" />
    ) : (
      <FiChevronDown className="search-select-dropdown__icon" data-testid="chevron-down-icon" />
    )}
  </div>
);

export default SelectedOption;
