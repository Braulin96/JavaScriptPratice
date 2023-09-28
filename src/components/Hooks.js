import React from "react";
import { useState, useEffect } from "react";
import Denzel from "../assets/denzelWhashington.jpeg";
import Jackie from "../assets/jackieChan.jpeg";
import JetLi from "../assets/jetLi.jpeg";

const actor = [
  {
    name: "Denzel Whashington",
    description:
      "Denzel Hayes Washington Jr. (born December 28, 1954) is an American actor, producer and director. In a career spanning over four decades, Washington has received numerous accolades, including a Tony Award, two Academy Awards, three Golden Globe Awards and two Silver Bears.",
    Image: Denzel,
  },
  {
    name: "Jackie Chan",
    description:
      'Jackie Chan SBS MBE PMW[4] (Chinese: 成龍, Yale romanization: Sìhng Lùhng, Jyutping: Sing4 Lung4; lit. "becoming the dragon";[5][3][2] born 7 April 1954) is a Hong Kong[6][7] actor, filmmaker, martial artist, and stuntman known for his slapstick acrobatic fighting style.',
    Image: Jackie,
  },
  {
    name: "Jet Li",
    description:
      "Li Lianjie (courtesy name Yangzhong; born 26 April 1963),[1] better known by his stage name Jet Li, is a Chinese-born Singaporean[2] martial artist, retired Wushu champion, film actor, film producer, and philanthropist. He is widely regarded as one of the most iconic Chinese film stars.",
    Image: JetLi,
  },
];

const ActorState = () => {
  const [info, setInfo] = useState(0);

  const handleChange = (index) => {
    setInfo(index);
    console.log("info:", index);
  };
  return (
    <div className="p-5 text-center">
      <h1>Function training state, maps and objects</h1>
      <div className="px-2 py-5 text-center flex justify-center flex-wrap bg-gray-200 gap-5 overflow-hidden rounded-xl">
        <div className="min-w-[300px] max-w-[500px] space-y-6 px-5 my-auto">
          <div className="bg-gray-800 py-5 rounded-xl">
            <ul className="names space-y-2">
              {actor.map((names, index) => (
                <li
                  className={`${
                    info === index ? "text-cyan-500" : "text-white"
                  }`}
                  key={index}
                  onMouseEnter={() => handleChange(index)}
                >
                  {names.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="description bg-gray-600 p-5 rounded-xl text-white text-left">
            {actor[info].description}
          </div>
        </div>
        <div className="description rounded-xl px-5 min-w-[200px] w-auto max-w-[400px] py-5 bg-gray-900 flex justify-center ">
          {
            <img
              className="rounded-xl aspect-square grayscale w-full max-w-full"
              src={actor[info].Image}
              alt={actor[info].name}
            />
          }
        </div>
      </div>
    </div>
  );
};

const TestUseEffect = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); //to remove the eventListener it is called first to clean up whatever we did before
    };
  }, []);

  return (
    <div className="bg-red-300 rounded-xl px-5 py-10 justify-center flex gap-5">
      <h1>{windowWidth}</h1>
    </div>
  );
};

const ChangeTitle = () => {
  const [title, setTitle] = useState("first");
  const [count, setCount] = useState(0);

  const handleChange = () => {
    setCount(count+1)
  }

  useEffect(()=> {
    handleChange()
    console.log('count:', count)
  },[title]);

  
  return (
    <div className="flex-col space-x-10">
      <p> the value for this title is: {title} </p>
      <button
        className="bg-green-400 px-3 py-2 rounded-xl"
        onClick={() => setTitle("first")}
      >
        title
      </button>
      <button
        className="bg-green-400 px-3 py-2 rounded-xl"
        onClick={() => setTitle("second")}
      >
        title 2
      </button>
      <button
        className="bg-green-400 px-3 py-2 rounded-xl"
        onClick={() => setTitle("third")}
      >
        title 2
      </button>
      <p> {title} </p>
    </div>
  );
};

const Hooks = () => {
  return <ChangeTitle />;
};
export default Hooks;
