import React, { useState } from "react";
import BlackListener from "../assets/blackListener.png";
import Escutador from "../assets/escutador.png";
import Mobile from "../assets/mobile.png";
import Ferrari from "../assets/ferrari.jpeg";
import Lamborgini from "../assets/lamborgini.jpeg";
import RangeRover from "../assets/rangeRover.jpeg";

const arrayTest = [
  {
    title: "Ferrari",
    description:
      "Experience the pinnacle of automotive excellence with our Ferrari collection. Unleash Italian craftsmanship, precision engineering, and breathtaking speed. Elevate your driving passion with a Ferrari – where performance meets artistry.",
    Image: Ferrari,
    background: 'white'
  },
  {
    title: "Lamborgini",
    description:
      "Unleash your inner daredevil with our Lamborghini selection. Embrace the power, style, and heart-pounding excitement that comes with every Lamborghini drive. Elevate your journey to legendary status with the unmistakable roar of the bull.",
    Image: Lamborgini,
    background: 'black'
  },
  {
    title: "Range Rover",
    description:
      "Elevate your adventures with our Range Rover lineup. Experience the perfect blend of luxury and off-road prowess, designed for those who demand the extraordinary. From city streets to rugged terrains, Range Rover is your passport to limitless exploration.",
    Image: RangeRover,
    background: 'white'
  },
];

const Position = () => {
  const [infoIndex, setInfoIndex] = useState(0);
 
  const handleChange = (index) => {
    setInfoIndex(index); // Set infoIndex to the clicked index
    console.log("infoIndex:", index);
    // Fade in the image with a transition effect
  };

  return (
    <>
      <div className="w-full h-screen bg-gray-900 relative">
        <div className="flex text-center   max-h-[900px] py-60 justify-center gap-10">
            <div className="bg-gray-800 flex items-center justify-around rounded-2xl w-[700px] aspect-square px-16 gap-3">
                <ul className="space-y-5 flex-none">
                {arrayTest.map((item, index) => (
                    <li
                    key={index}
                    onMouseEnter={() => handleChange(index)} // Pass the index to handleChange
                    className={`focus:text-red-400 ${
                        infoIndex === index ? "text-orange-700" : "text-gray-500"
                    }`}
                    >
                    <h1 className="text-2xl text-left">{item.title}</h1>
                    </li>
                ))}
                </ul>
                <div className="max-w-[200px] text-gray-200 text-left flex-none">
                {arrayTest[infoIndex].description}
                </div>
            </div>
            <div className="relative bg-gray-500 w-[800px] rounded-2xl flex justify-center items-center gap-7">
                <div className="opacity-50 bg-gradient-to-tr from-gray-300 via-orange-400 to-orange-700 w-[50px] aspect-square rounded-full 
                absolute z-10 right-5 top-5 ">
                </div>
                <div className="w-[600px] aspect-square">
                <img
                    className="rounded-3xl aspect-square grayscale shadow-md"
                    src={arrayTest[infoIndex].Image}
                />
                </div>
            </div>
        </div>
        <div className="flex justify-center -mt-20">
          <button className="bg-orange-700 hover:bg-orange-600 opacity-60 rounded-full px-40 py-1 text-center text-gray-100">
            Get your car
          </button>
        </div>
      </div>
    </>
  );
};
export default Position;
