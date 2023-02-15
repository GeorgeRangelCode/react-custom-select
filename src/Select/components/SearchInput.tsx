interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isOpen: boolean;
}

const SearchInput: React.FC<Props> = ({ value, onChange, placeholder, isOpen }) => (
  <input
    type="text"
    className={`search-select-dropdown__search ${isOpen ? "is-open" : ""}`}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default SearchInput;
