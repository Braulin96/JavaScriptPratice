import React, { useContext, useState } from "react";
import ContextTest from "./shared/ContextTest";

// In this component the training is about use Context, use ref and useReducer

export const ThemeContext = React.createContext();

const MoreHooks = () => {
  const [number, setNumber] = useState(0);
  

  return (
    <>
      <ThemeContext.Provider value={number}>
        <div>MoreHooks</div>
        <button
          className="bg-green-500 px-2 py-2"
          onClick={() => setNumber(number + 1)}
        >
          increase
        </button>
        <ContextTest />
      </ThemeContext.Provider>
      <div>
        <p className="text-xl font-bold">
          Input testing useState and useContext
        </p>
        <div className="p-5">
          <input
            className="border border-blue-600 px-3 py-2"
            type="number"
            placeholder="hello"
          />
        </div>
      </div>
    </>
  );
};
export default MoreHooks;
