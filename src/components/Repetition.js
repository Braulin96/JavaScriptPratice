import React, { useState } from "react";

const Repetition = () => {
  const [number, setNumber] = useState("");

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className="p-5 bg-gray-200 w-[500px] aspect-square rounded-2xl min-w-[300px]">
      <h1 className="text-2xl pb-2">Getting number inserted</h1>
      <input
        className="p-2 rounded-md border-2 border-gray-300"
        type="number"
        onChange={handleNumberChange}
        placeholder="Insert a number"
      />
      <p className="pt-2">o numero inserido foi {number}</p>
    </div>
  );
};

export default Repetition;
