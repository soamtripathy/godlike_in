import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carousel_1 from "../assets/ach1.jpg";
import carousel_2 from "../assets/ach2.jpg";
import carousel_4 from "../assets/ach4.jpg";

const Achievement = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="m-2 md:m-5 overflow-hidden">
      <Carousel
        showArrows={!isMobile}
        showThumbs={false}
        autoPlay={true}
        transitionTime={1000}
        dynamicHeight={true}
        infiniteLoop={true}
        showStatus={false}
        useKeyboardArrows
        className="flex justify-center"
        width="80%"
        centerMode={!isMobile}
        centerSlidePercentage={isMobile ? 100 : 40}
        emulateTouch={true}
      >
        <div>
          <img
            src={carousel_1}
            alt="Achievement 1"
            className="carousel-image p-5 "
          />
        </div>
        <div>
          <img
            src={carousel_2}
            alt="Achievement 2"
            className="carousel-image p-5"
          />
        </div>
        <div>
          <img
            src={carousel_4}
            alt="Achievement 3"
            className="carousel-image p-5"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Achievement;