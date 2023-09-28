import React from "react";
import { useState, useEffect } from "react";
import Denzel from "../assets/denzelWhashington.jpeg";
import Jackie from "../assets/jackieChan.jpeg";
import JetLi from "../assets/jetLi.jpeg";

const Hooks = () => {
  const mobile = [
    {
      title: "Iphone",
      description: "Apple's mobile device that combines an iPod music and video player, mobile phone and Internet browser capability in a handheld unit with a touchscreen interface.",
    },
    {
      title: "Nokia",
      description: "A Nokia Corporation (pronúncia em finlandês: [ˈnɔkiɑ], nóquia), é uma empresa multinacional finlandesa fundada em 1865",
    },
    {
      title: "Samsung",
      description: "Samsung Galaxy S9 é um smartphone com sistema operacional Android e da família Galaxy, produzido pela Samsung",
    },
  ];

  const [number, setNumber] = useState(0)
  
  const handleChange = (index) => {
    setNumber(index)
    console.log('index:',index)
  }

  return (
    <>
      <div className="bg-green-200 p-10 rounded-xl space-y-5">
        <h1> UseEffect Task </h1>
        <div className="flex gap-10">
          <div className="bg-white rounded-xl p-10"> 
           {
            mobile.map((name, index)=>(
             <p onClick={()=> handleChange (index)} key={index}> {name.title} </p>
            ))
           }
          </div>
          <div className="bg-white rounded-xl p-10">{mobile[number].description}</div>
        </div>
      </div>
    </>
  );
};
export default Hooks;
