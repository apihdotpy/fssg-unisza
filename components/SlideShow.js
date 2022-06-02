import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

export default function SlideShow({ images }) {
  return (
    <div className="bg-blue-100">
      <AliceCarousel
        renderNextButton={NextButton}
        renderPrevButton={PrevButton}
        mouseTracking
        infinite
        controlsStrategy="alternate"
        autoPlay={true}
        autoPlayInterval={3000}
      >
        {images.map((url, index) => (
          <img src={url} alt="" />
        ))}
      </AliceCarousel>
    </div>
  );
}

const NextButton = () => {
  return (
    <div className="absolute right-0 top-[38%] flex bg-red-500">
      <AiFillCaretRight className="" size={24} />
    </div>
  );
};

const PrevButton = () => {
  return (
    <div className="absolute left-0 top-[50%] flex bg-red-500">
      <AiFillCaretLeft className="" size={24} />
    </div>
  );
};
