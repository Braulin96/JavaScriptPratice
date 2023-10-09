import React, { useContext } from "react";
import ContextTest from "./shared/ContextTest";

// In this component the training is about use Context, use ref and useReducer
const name = "joao";
const age = "28";

export const ThemeContext = React.createContext();
const MoreHooks = () => {
  return (
    <ThemeContext.Provider value={age}>
      <div>MoreHooks</div>
      <ContextTest />
    </ThemeContext.Provider>
  );
};
export default MoreHooks;
