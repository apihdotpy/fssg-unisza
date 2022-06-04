import React from "react";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

export default function SlideShow({ images }) {
  return (
    <div className="mx-auto max-w-7xl">
      <AliceCarousel
        renderNextButton={NextButton}
        renderPrevButton={PrevButton}
        mouseTracking
        infinite
        controlsStrategy="alternate"
        autoPlay={true}
        autoPlayInterval={3000}
      >
        {images.map((image, index) => (
          <Image key={index} src={image.url} alt="" height={720} width={1280} />
        ))}
      </AliceCarousel>
    </div>
  );
}

const NextButton = () => {
  return (
    <button className="absolute right-4 top-[38%] bg-slate-900/40 h-10 w-10 rounded-full flex justify-center items-center transition hover:scale-105">
      <AiFillCaretRight className="" size={24} />
    </button>
  );
};

const PrevButton = () => {
  return (
    <button className="absolute left-4 top-[36%] bg-slate-900/40 h-10 w-10 rounded-full flex justify-center items-center transition hover:scale-105">
      <AiFillCaretLeft className="" size={24} />
    </button>
  );
};
