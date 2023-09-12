import { useState } from "react";

function App() {

  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedProduct(e.target.value);
  }

  const handleChangeOption = (e) => {
    setSelectedOption(e.target.value);
  }

  return (
    <div className="App">
      <h1> Select the product you want</h1>
      <div className="flex" style={{textAlign:'center'}}>
        <select id="framework" className="" onChange={handleChange}>
          <option value="angular">Angular</option>
          <option value="react">React</option>
          <option value="Vue">Vue.js</option>
          <option value="Ember">Ember.js</option>
        </select>
      </div>
      <div className="flex" style={{textAlign:'center'}}>
        <select id="framework" className="" onChange={handleChangeOption}>
          <option value="1">option 1</option>
          <option value="2">Option 2</option>
          <option value="3">option 3</option>
          <option value="4">option 4</option>
        </select>
      </div>
        <p>You selected: {selectedProduct}</p>
        <p>You selected: {selectedOption}</p>
    </div>
  );
}

export default App;
