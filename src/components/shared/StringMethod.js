import React from "react";

function StringMethod() {
  const message = "I love java";
  const short = message.charAt(0) // short will display the quote in position 0
  console.log('size:', message.length) // check the size of message
  console.log ('empty:',message.length === 10) //check if the size of the image = 10
  console.log ('position:', message.indexOf("love")) //check the position of love the beginning in this case 2
  console.log ('positionStartEnd:', message.substring(2,6)) //will bring the string from position 2 to 6 => love

  return (
    <>
      <p>{message}</p>
      <p>{short}</p>
    </>
  );
}

export default StringMethod;
