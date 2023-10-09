import React, { useContext, useEffect, useState } from "react";
import ContextTest from "./shared/ContextTest";

// In this component the training is about use Context, use ref and useReducer

export const ThemeContext = React.createContext();

const MoreHooks = () => {
  //const [number, setNumber] = useState(0);
  const [value, setValue] = useState("")
  const [final, setFinal] = useState("")
  
  const handleNumber = (e) => {
    setValue(e.target.value)
    console.log('value:', value)
  }

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
      <div>
        <p className="text-xl font-bold">
          Input testing useState and useContext
        </p>
        <div className="p-5">
          <input onChange={handleNumber}
            className="border border-blue-600 px-3 py-2"
            type="number"
            placeholder="hello"
          />
        <button onClick={()=> setFinal(value)} className="bg-green-200 rounded-full px-3 py-2"> click me</button>
        {console.log('final:',final)}
        </div>
      </div>
    </>
  );
};
export default MoreHooks;
