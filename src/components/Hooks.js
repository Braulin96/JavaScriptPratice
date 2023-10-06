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
      <div className="p-20 space-y-5 bg-cyan-900 rounded-2xl flex gap-10 h-[500px] w-[900px] overflow-scroll relative items-center justify-center">
        <div className="space-y-5 my-auto">
          <div className="bg-blue-300  border-2 border-blue-00 rounded-full w-72 aspect-square mx-auto flex justify-center items-center overflow-hidden">
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
              className="bg-white font-bold text-gray-900 px-4 py-2 rounded-full text-sm shadow-2xl"
            >
              Change photo
            </button>
            {totalChanges > 0 && (
              <p className="absolute bottom-4 left-4 text-gray-900">
                Total of changes:
                <span className="pl-1 text-white">{totalChanges}</span>
              </p>
            )}
          </div>
        </div>
        <div className="bg-gray-900 p-5 overflow-scroll text-center rounded-xl w-[300px] h-[250px]">
          <p className="text-xl text-white font-bold"> Times of change </p>
          {dateArray.map((times, index) => (
            <>
              <p key={index} className="py-2 text-white ">
                {getOrdinalSuffix(index + 1)} change at {times}
              </p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Hooks;
