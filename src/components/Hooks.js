import React, { useState, useEffect } from "react";
import OpenModal from "./OpenModal";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import { motion, AnimatePresence } from "framer-motion";

// Initialize AOS
AOS.init();

//this component training about useState, useEffect, map, array and localStorage
const Hooks = () => {
  const [randomImage, setRandomImage] = useState("");
  const [time, setTime] = useState("");
  //operator (??) to provide an empty array as a default value if dateArray is null.
  const [dateArray, setDateArray] = useState(
    JSON.parse(localStorage.getItem("dateArray")) ?? []
  );
  const [totalChanges, setTotalChanges] = useState(dateArray.length);

  //modal
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleCleaning = () => {
    localStorage.clear();
    setDateArray([]); // Reinitialize dateArray to an empty array
    setTotalChanges(0); // Reset totalChanges to 0
  };

  //get time
  const handleTime = () => {
    const date = new Date();
    const clickTime =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    setTime(clickTime);
    const updatedArray =
      dateArray.length > 0 ? [...dateArray, clickTime] : [clickTime];
    setDateArray(updatedArray);
    //localStorage.setItem("dateArray", JSON.stringify(updatedArray)); // Update local storage
    setTotalChanges(totalChanges + 1);

    localStorage.setItem("dateArray", JSON.stringify(dateArray));
    //retrieve the array from localStorage use JSON.parse() to convert the JSON string back to a JavaScript object:

    //console.log("Stored Date Array:", storedDateArray);
  };

  useEffect(() => {
    // Save dateArray to localStorage whenever it changes
    localStorage.setItem("dateArray", JSON.stringify(dateArray));
  }, [dateArray]);
  //const storedDateArray = JSON.parse(localStorage.getItem("dateArray"));

  //to get suffix for ordinal number
  /*
  const getOrdinalSuffix = (number) => {
    const suffixes = ["th", "st", "nd", "rd"];
    const v = number % 100;
    return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
  }; */

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
  }, [time]);

  return (
    <div className="flex justify-center py-10">
      <div className="p-20 space-y-5 bg-gray-100 rounded-2xl flex gap-10 w-[900px] overflow-scroll relative items-center justify-around">
        {/* Image loading section */}
        <div className="space-y-10 my-auto z-10">
          <div
            data-aos="zoom-in"
            data-aos-offset="500"
            data-aos-once="false"
            data-aos-delay="200"
            data-aos-duration="500"
            className="border-2 border-gray-600 rounded-full w-72 aspect-square mx-auto flex justify-center items-center overflow-hidden"
          >
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
        <div className="space-y-4">
          {/* your last change was made container */}
          <div className="bg-white overflow-scroll text-left rounded-xl h-[250px] aspect-square relative z-10">
            <div className="py-5 text-center relative">
              <p className="py-2 text-gray-600">
                {dateArray.length > 0
                  ? `Your last change was made at ${
                      dateArray[dateArray.length - 1]
                    }`
                  : "No changes made yet!"}
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 9, delay: 1.5 }}
                exit={{ x: "-100vh", opacity: 0 }}
              >
                <OpenModal
                  className="pt-10 underline"
                  isOpen={isOpen}
                  closeModal={closeModal}
                  title="Complete list"
                  handleOpen={handleOpen}
                  cleanup={
                    <button className="underline" onClick={handleCleaning}>
                      {dateArray.length > 0 ? "clear" : ""}{" "}
                    </button>
                  }
                  description={dateArray.map((array, index) => (
                    <p key={index}>
                      the change number {index + 1} was made {array}
                    </p>
                  ))}
                />
              </motion.div>
            </div>

            <button
              onClick={() => {
                fetchRandomImage();
                handleTime();
              }}
              className="bg-gray-600 font-bold text-white py-3 text-sm shadow-2xl w-full bottom-0 absolute"
            >
              Change photo
            </button>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-once="false"
          data-aos-delay="200"
          data-aos-duration="500"
          className="h-full w-[645px] bg-gray-400 absolute right-0 -top-5 opacity-75 z-0"
        ></div>
      </div>
    </div>
  );
};
export default Hooks;
