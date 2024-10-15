import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import creator_1 from "../assets/creators/jonny.jpg";
import creator_2 from "../assets/creators/zgod.jpg";
import creator_3 from "../assets/creators/mizo.jpg";

const images = [
  { src: creator_1, name: "Jonathan Gaming" },
  { src: creator_2, name: "ZGod Gaming" },
  { src: creator_3, name: "Mizo is Live" },
];

export const Creators = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  if (images.length === 0) {
    return (
      <div className="relative w-full h-64 rounded-lg bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const getImageIndex = (offset) => {
    return (currentIndex + offset + images.length) % images.length;
  };

  return (
    <div className="m-5">
      <h1 className="font-bold text-4xl text-yellow-400 ">
        Our Creators
      </h1>
      <div className="relative w-full h-96 overflow-hidden p-10 mt-5 sm:h-80">
        <div className="flex justify-center items-center h-full">
          {[-1, 0, 1].map((offset) => (
            <div
              key={offset}
              className={`absolute w-48 h-48 transition-all duration-300 ease-in-out
              ${offset === 0 ? "z-10 scale-125" : "z-0 scale-100 opacity-50"}
              ${offset === -1 ? "-translate-x-32" : ""}
              ${offset === 1 ? "translate-x-32" : ""}`}
            >
              <img
                src={images[getImageIndex(offset)].src}
                alt={images[getImageIndex(offset)].name}
                className="w-full h-full object-cover rounded-full"
              />
              <figcaption
                className={`text-center text-yellow-400 font-bold mt-2 p-2${
                  offset === 0 ? "text-xl" : "text-sm"
                }`}
              >
                {images[getImageIndex(offset)].name}
              </figcaption>
            </div>
          ))}
        </div>
        
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
      
    </div>
  );
};

export default Creators;
