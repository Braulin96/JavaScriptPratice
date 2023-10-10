import React, { useRef, useState, useEffect } from "react";

const RefText = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const numberRef = useRef(0);
  const buttonRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    //setNumber ((prevNumber) => prevNumber + 10)
    numberRef.current = numberRef.current+10;
  });
  //to start already with a number as clicked and focus in input field
  useEffect(() => {
    buttonRef.current.click();
    inputRef.current.focus();
  }, []);

  return (
    <div className="bg-gray-200 p-5">
      <p className="text-xl font-bold"> number is : {number} </p>
      <p className="text-xl font-bold">
        number of useRef : {numberRef.current}
      </p>
      <p className="text-xl font-bold"> counting is : {count} </p>
      <button
        ref={buttonRef}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Add
      </button>
      <div>
        <input
          ref={inputRef}
          type="text"
          className="bg-blue-100 border border-blue-400 px-5 py-2"
        />
      </div>
    </div>
  );
};
export default RefText;
