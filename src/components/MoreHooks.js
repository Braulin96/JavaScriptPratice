import React, { useContext, useEffect, useState } from "react";
import ContextTest from "./shared/ContextTest";

// In this component the training is about use Context, use ref and useReducer

//export const ThemeContext = React.createContext();
export const ThemeContext = React.createContext();

const MoreHooks = () => {
  //const [number, setNumber] = useState(0);
  const [value, setValue] = useState("");
  const [final, setFinal] = useState("");
  const [array, setArray] = useState([]);

  const handleNumber = (e) => {
    setValue(e.target.value);
  };

  // Update the array whenever the final value changes
  useEffect(() => {
    if (final !== "") {
      setArray((prevArray) => [...prevArray, final]);
    }
  }, [final]);

  return (
    <>
      {/*}
      <ThemeContext.Provider value={number}>
        <div>MoreHooks</div>
        <button
          className="bg-green-500 px-2 py-2"
          onClick={() => setNumber(number + 1)}
        >
          increase
        </button>
        <ContextTest />
         </ThemeContext.Provider>*/}
      <ThemeContext.Provider value={array}>
        <p className="text-xl font-bold">
          Input testing useState and useContext
        </p>
        <div className="p-5">
          <input
            onChange={handleNumber}
            className="border border-blue-600 px-3 py-2"
            type="number"
            placeholder="insert your code"
          />
          <button
            onClick={() => {
              setFinal(value);
              setValue("");
            }}
            className="bg-green-200 rounded-full px-3 py-2"
          >
            click me
          </button>

          {console.log("final:", final)}
          {console.log("value:", value)}
          {console.log("updatedArray:", array)}
        </div>
        <ContextTest />
      </ThemeContext.Provider>
    </>
  );
};
export default MoreHooks;
