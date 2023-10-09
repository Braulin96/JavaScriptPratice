import React, { useContext, useEffect, useState } from "react";
import ContextTest from "./shared/ContextTest";

// In this component the training is about useState useContext, useRef and useReducer

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
  useEffect(() => {
    if (final !== "") {
      setArray((prevArray) => [...prevArray, final]);
    }
  }, [final]);

  return (
    <>
      <ThemeContext.Provider value={array}>
        <p className="text-xl font-bold text-center py-2">
          Input testing useState and useContext
        </p>
        <div className="flex justify-center">
        <div className="flex justify-center bg-gradient-to-br from-slate-600 via-cyan-200 to-gray-700 rounded-xl w-fit px-10 py-5">
          <div className="p-5 space-y-5">
            <div>
              <input
                onChange={handleNumber}
                className="border border-gray-500 rounded-md px-3 py-2"
                type="number"
                placeholder="insert your code"
              />
            </div>

            <div>
              <button
                onClick={() => {
                  setFinal(value);
                  setValue("");
                }}
                className="bg-white rounded-full px-3 py-2 text-cyan-900 font-bold"
              >
                click me
              </button>
            </div>
          </div>
          <div className="py-2">
            <ContextTest />
          </div>
        </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
};
export default MoreHooks;
