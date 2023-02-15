import { SearchSelectDropdown } from "./Select/components";
import fruits from "./mock/fruits.json";

const options = fruits.data.fruits.map(item => ({
  value: item,
  label: item,
}));

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
