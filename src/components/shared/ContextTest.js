import React, { useContext } from "react";
import { ThemeContext } from "../MoreHooks";

//this component is getting a context passed from MoreHooks.js component
const ContextTest = () => {
  //const number = useContext (ThemeContext)
  const array = useContext(ThemeContext);
  return (
    <>
      <div>Get the values from array create in More</div>
      {console.log("arrayContext:", { array })}
      {array.map((code, index) => (
        <p key={index}> the code you chose was {code}</p>
      ))}
    </>
  );
};
export default ContextTest;
