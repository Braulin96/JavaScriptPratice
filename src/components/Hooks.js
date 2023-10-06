import React, { useState, useEffect } from "react";

const Hooks = () => {
  const [randomImage, setRandomImage] = useState("");
  const [time, setTime] = useState("");
  const [dateArray, setDateArray] = useState([]);

  //get time
  const handleTime = () => {
    const date = new Date();
    const clickTime =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    setTime(clickTime);
    //condition to push
    dateArray.length > 0
      ? setDateArray((prevArray) => [...prevArray, time])
      : setDateArray([clickTime]);
  };
  //to get suffix for ordinal number
  const getOrdinalSuffix = (number) => {
    const suffixes = ["th", "st", "nd", "rd"];
    const v = number % 100;
    return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
  };

  //to get the random image
  const fetchRandomImage = async () => {
    try {
      const response = await fetch("https://source.unsplash.com/random");
      // Get the final URL after any redirects (actual image URL)
      const imageUrl = response.url;
      setRandomImage(imageUrl);
    } catch (error) {
      console.error("Error fetching random image:", error);
    }
  };
  useEffect(() => {
    fetchRandomImage();
  }, []);

  return (
    <div className="flex justify-center py-10">
      <div className="p-20 space-y-5 bg-slate-100 w-fit rounded-2xl flex gap-10 max-h-[400px] min-w-[600px] overflow-scroll">
        <div className="space-y-5 my-auto">
          <div className="bg-blue-300 border-2 border-blue-00 rounded-full w-36 aspect-square mx-auto flex justify-center items-center overflow-hidden">
            {randomImage && (
              <img
                className="w-full h-full object-cover"
                src={randomImage}
                alt="Random"
              />
            )}
            {!randomImage && <p>Loading random image...</p>}
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                fetchRandomImage();
                handleTime();
              }}
              className="bg-blue-400 font-bold text-white px-5 py-2 rounded-full"
            >
              Change photo
            </button>
          </div>
        </div>

        <div className="justify-center">
          <p className="text-xl"> Times of change </p>
          {dateArray.map((times, index) => (
            <p key={index} className="py-2 flex">
              The {getOrdinalSuffix(index + 1)} change was made at {times}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Hooks;
