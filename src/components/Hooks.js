import React, { useState, useEffect } from "react";

const Hooks = () => {
  const [randomImage, setRandomImage] = useState("");

  //get time 
  const date = new Date ();
  const clickTime = date.getHours() 
  + ':' + date.getMinutes() 
  + ":" + date.getSeconds(); 

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
      <div className="p-20 space-y-5 bg-slate-100 w-fit rounded-2xl">
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
            onClick={fetchRandomImage}
            className="bg-blue-400 font-bold text-white px-5 py-2 rounded-full"
          >
            Change photo
          </button>
        </div>
        <div className="flex justify-center">
          <p className=""> Here goes the array </p>
        </div>
        <h1 align="center">Current Time</h1>
            <h2 align="center"> {clickTime}</h2>
      </div>
    </div>
  );
};

export default Hooks;
