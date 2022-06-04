import React from "react";
import Image from "next/image";
import { AiFillCalendar } from "react-icons/ai";

export default function Article({ title, imageUrl, category, alt }) {
  return (
    <div className="group flex items-center gap-x-8  transition hover:scale-105 cursor-pointer pb-3 border-b border-slate-900/10  lg:pb-8">
      <div className="h-24 w-24 rounded-full overflow-hidden drop-shadow-sm ring-4 ring-white">
        <Image src={imageUrl} layout="fill" alt={alt} />
      </div>
      <div className="flex-1 h-full">
        <article className="flex flex-col gap-y-2 justify-between h-full">
          <p className="font-semibold text-slate-900 tracking-tight text-base ">
            {title}
          </p>
          <div className="flex justify-between">
            <div className="flex items-center gap-x-2">
              <AiFillCalendar className="text-slate-800" />
              <span className="text-xs font-medium text-slate-800">
                5 April 2020
              </span>
            </div>
            <span className="text-xs border bg-white border-black/20 uppercase text-black/80 rounded-full px-5 py-0.5 lg:py-1.5 lg:text-sm">
              {category}
            </span>
          </div>
        </article>
      </div>
    </div>
  );
}
