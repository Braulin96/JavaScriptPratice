import React, { useState, useEffect } from "react";

const Hooks = () => {
  const [randomImage, setRandomImage] = useState("");
  const [time, setTime] = useState("");
  const [dateArray, setDateArray] = useState([]);
  const [totalChanges, setTotalChanges] = useState(0);

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
    setTotalChanges(totalChanges + 1);
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
      <div className="p-20 space-y-5 bg-gray-100 rounded-2xl flex gap-10 w-[900px] overflow-scroll relative items-center justify-around">
        <div className="space-y-10 my-auto z-20">
          <div className="bg-blue-300 border-2 border-blue-00 rounded-full w-72 aspect-square mx-auto flex justify-center items-center overflow-hidden">
            {randomImage && (
              <img
                className="w-full h-full object-cover"
                src={randomImage}
                alt="Random"
              />
            )}
            {!randomImage && <p>Loading random image...</p>}
          </div>
          <div className="bg-gray-900 w-full h-4 blur-xl rounded-full"></div>

          {totalChanges > 0 && (
            <p className="absolute bottom-4 left-4 text-gray-900">
              Total of changes:
              <span className="pl-1">{totalChanges}</span>
            </p>
          )}
        </div>
        <div className="space-y-4 z-20">
          <p className="text-2xl text-white font-bold text-center">Times of change</p>
          <div className="bg-white overflow-scroll text-left rounded-xl h-[250px] aspect-square relative">
            <div className="py-5 text-center relative">
              {dateArray.map((times, index) => (
                <>
                  <p key={index} className="py-2 text-gray-600 ">
                    {getOrdinalSuffix(index + 1)} change at {times}
                  </p>
                </>
              ))}
            </div>
            <button
              onClick={() => {
                fetchRandomImage();
                handleTime();
              }}
              className="bg-gray-600 font-bold text-white  py-3 text-sm shadow-2xl w-full bottom-0 absolute"
            >
              Change photo
            </button>
          </div>
        </div>
        <div className="h-full w-[645px] bg-gray-400 absolute right-0 -top-5 opacity-75 z-10"></div>
      </div>
    </div>
  );
};
export default Hooks;
