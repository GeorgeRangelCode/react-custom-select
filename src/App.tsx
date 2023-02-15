import SearchSelectDropdown from "./components/Select";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const App = () => {
  const handleOptionChange = (option: any) => {
    console.log(option);
  };

  return (
    <div className="App">
      <SearchSelectDropdown options={options} onChange={handleOptionChange} />
    </div>
  );
};

export default App;
