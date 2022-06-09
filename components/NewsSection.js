import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NEWS } from "../data/news-data";
import { images } from "../data/carousel-data";
import Container from "./Container";
import Article from "./Article";
import SlideShow from "./SlideShow";

export default function NewsSection() {
  return (
    <section className="relative py-8 bg-pattern2 bg-no-repeat">
      <Container>
        <h3 className="font-bold tracking-tight mb-8 text-center lg:text-left lg:mb-12">
          News Archives
        </h3>
        <div className="grid grid-cols-1 gap-y-3 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-8">
          {NEWS.map((news, index) => (
            <Article key={index} {...news} />
          ))}
        </div>
        <button className="flex mx-auto mt-8 items-center gap-x-2 text-primary-500 bg-slate-900 px-16 py-4 rounded-full group transition hover:bg-primary-500 hover:text-black hover:scale-110">
          <span className="text-sm group-hover:animate-pulse group-hover:text-extrabold lg:text-base lg:capitalize">
            view more
          </span>
          <AiOutlineArrowRight className="group-hover:animate-pulse" />
        </button>
      </Container>
      {/* Gallery */}
      <div className="mt-12">
        <h3 className="font-bold tracking-tight mb-8 text-center lg:my-24">
          Images Gallery
        </h3>
        <div className="w-full">
          <SlideShow images={images} />
        </div>
      </div>
    </section>
  );
}
