import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carousel_1 from "../assets/ach1.jpg";
import carousel_2 from "../assets/ach2.jpg";
import carousel_4 from "../assets/ach4.jpg";

const Acheivement = () => {
  return (
    <div className=" m-5 overflow-hidden">
      <Carousel
        showArrows={false}
        showThumbs={false}
        autoPlay={true}
        transitionTime={1000}
        dynamicHeight={SVGComponentTransferFunctionElement}
        infiniteLoop={true}
        showStatus={false}
        useKeyboardArrows
        className=" flex justify-center " 
        width="65rem"
        centerMode={true}
        centerSlidePercentage={40}
        
        
      >
        <div>
          <img
            src={carousel_1}
            alt="Achievement 1"
            className="carousel-image  p-10 "
          />
        </div>
        <div>
          <img
            src={carousel_2}
            alt="Achievement 2"
            className="carousel-image p-10 rounded-xl"
          />
        </div>

        <div>
          <img
            src={carousel_4}
            alt="Achievement 3 "
            className="carousel-image p-10"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Acheivement;
