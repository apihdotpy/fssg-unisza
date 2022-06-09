import React from "react";
import Image from "next/image";
import Container from "./Container";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Introduction() {
  return (
    <div className="py-12 lg:py-32 bg-pattern1">
      <Container>
        <article className="pt-12  flex flex-col gap-y-12 lg:flex-row sm:pt-24 lg:pt-1lg:justify-between lg:items-center">
          <section className="lg:w-2/3 lg:pr-36">
            <h1 className="text-slate-900 font-extrabold tracking-tight text-center max-w-3xl mx-auto lg:mb-12 lg:text-left">
              Fakulti Sains Sosial Gunaan (FSSG)
            </h1>
            <p className="text-lg text-slste-900 max-w-3xl mx-auto text-center lg:text-left">
              Ditubuhkan pada
              <span className="font-bold text-yellow-900">
                {` Januari 2014 `}
              </span>
              . Matlamat utama penubuhan FSSG adalah untuk memperkukuh dan
              memantapkan lagi ekosistem ilmu dan pembangunan akademia UniSZA
              bagi membantu negara menghasilkan modal insan yang
              <span className="font-bold text-yellow-900">
                {` berilmu pengetahuan `}
              </span>
              ,
              <span className="font-bold text-yellow-900">
                {` profesional `}
              </span>
              ,
              <span className="font-bold text-yellow-900">
                {` berakhlak tinggi `}
              </span>
              ,<span className="font-bold text-yellow-900">{`  kreatif `}</span>
              ,
              <span className="font-bold text-yellow-900">{`  meneroka `}</span>
              dan
              <span className="font-bold text-yellow-900">
                {`  menyelidik `}.
              </span>
            </p>
            <a className="group mt-12 h-12 px-6 cursor-pointer rounded-lg mx-4 flex gap-x-1 items-center justify-center bg-black font-semibold transition duration-100  text-white hover:drop-shadow-lg  hover:scale-105 focus:ring-yellow-600 lg:py-7 lg:w-64 lg:mt-16">
              Lebih Lanjut
              <AiOutlineArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-all duration-300"
              />
            </a>
          </section>
          <section className="flex justify-center lg:w-1/3 lg:pl-24">
            <Image src="/logo.png" alt="logo-fssg" height={1010} width={980} />
          </section>
        </article>
      </Container>
    </div>
  );
}
