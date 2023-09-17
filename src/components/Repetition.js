import React, { useState } from "react";
import Flower from '../assets/flower.png'

const Repetition = () => {
  const [number, setNumber] = useState("");

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const array = ["a", "b", "c", "d", "e"];
  const renderedItems = array.map((item, index) => (
    <p key={index}>Item {item}</p>
  ));

  return (
    <>
      <div style={{ padding: "50px 0px 0px 50px" }}>Repetition</div>
      <input
        type="number"
        onChange={handleNumberChange}
        placeholder="Insert a number"
      />
      <p>o numero inserido foi {number}</p>

      {renderedItems}
    
        <img className="flower"  src={Flower} alt="flower"/>
     

      

      

    
    </>
  );
};

export default Repetition;
