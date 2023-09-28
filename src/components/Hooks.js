import React from "react";
import { useState, useEffect } from "react";
import Denzel from "../assets/denzelWhashington.jpeg";
import Jackie from "../assets/jackieChan.jpeg";
import JetLi from "../assets/jetLi.jpeg";

const Hooks = () => {
  const mobile = [
    {
      title: "Iphone",
      description:
        "Apple's mobile device that combines an iPod music and video player, mobile phone and Internet browser capability in a handheld unit with a touchscreen interface.",
    },
    {
      title: "Nokia",
      description:
        "A Nokia Corporation (pronúncia em finlandês: [ˈnɔkiɑ], nóquia), é uma empresa multinacional finlandesa fundada em 1865",
    },
    {
      title: "Samsung",
      description:
        "Samsung Galaxy S9 é um smartphone com sistema operacional Android e da família Galaxy, produzido pela Samsung",
    },
  ];

  const [number, setNumber] = useState("0");
  const [interactions, setInteractions] = useState(0);
  const [size, setSize] = useState(0);

  //to get the value of the index
  const handleChange = (index) => {
    setNumber(index);
    console.log("index:", index);
  };

  //get the value of number of interactions
  const handleInteractions = () => {
    setInteractions(interactions + 1);
  };

  //calling handleInteractions always when the value of number change
  useEffect(() => {
    handleInteractions();
    console.log("interactions:", interactions);
  }, [number]);

  return (
    <>
      <div className="bg-green-200 p-10 rounded-xl space-y-5">
        <h1> UseEffect Task </h1>
        <div className="flex gap-10">
          <div className="bg-white rounded-xl p-10">
            {mobile.map((name, index) => (
              <p onClick={() => handleChange(index)} key={index}>
                {" "}
                {name.title}{" "}
              </p>
            ))}
          </div>
          <div className="bg-white rounded-xl p-10">
            {mobile[number].description}
          </div>
        </div>
        <div className="bg-green-400 p-10 rounded-xl space-y-5">
          <p> Number of interactions: {interactions}</p>
          <button
            className="bg-green-200 rounded-xl px-3 py-2"
            onClick={() => setInteractions(0)}
          >
            {" "}
            Clear{" "}
          </button>
        </div>
      </div>
    </>
  );
};
export default Hooks;
