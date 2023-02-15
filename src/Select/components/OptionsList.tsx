import React from "react";
import { Option } from "../interfaces/interfaces";

interface Props {
  options: Option[];
  onClick: (option: Option) => void;
}

const OptionsList: React.FC<Props> = ({ options, onClick }) => (
  <div className="search-select-dropdown__options">
    {options.map(option => (
      <div key={option.value} className="search-select-dropdown__option" onClick={() => onClick(option)}>
        {option.label}
      </div>
    ))}
  </div>
);

export default OptionsList;
