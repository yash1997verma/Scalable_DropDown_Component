import './App.css';
import { useState } from 'react';
import Dropdown from './components/Dropdown';
function App() {
  const items = ["T-shirt", "Jeans", "Shirt"];
  const [selectedOption, setSelectedOption] = useState("Select")

  return (
    <div className="h-screen flex justify-center items-center">
      <Dropdown items ={items} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
    </div>
  );
}

export default App;
