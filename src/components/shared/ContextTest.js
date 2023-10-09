import React, { useContext } from "react";
import { ThemeContext } from "../MoreHooks";

//this component is getting a context passed from MoreHooks.js component
const ContextTest = () => {
  //const number = useContext (ThemeContext)
  const array = useContext(ThemeContext);
  return (
    <>
      <h1 className="font-bold text-lg">Get the values from array create in More</h1>
     <div className="bg-gray-400 px-5 py-3 rounded-xl mt-3">
      {array.map((code, index) => (
        <p className="text-left" key={index}> code: {code} key: {index}</p>
      ))}
      </div>
    </>
  );
};
export default ContextTest;
