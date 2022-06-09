import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillCalendar } from "react-icons/ai";

export default function Article({ title, imageUrl, category, alt }) {
  return (
    <div className="flex items-center border gap-x-8 rounded-xl p-4 transition pb-3 h-40 bg-white drop-shadow-lg  border-slate-900/10 lg:p-6">
      <div className="h-24 w-24 rounded-full overflow-hidden drop-shadow-sm ring-4 ring-primary-500">
        <Image src={imageUrl} layout="fill" alt={alt} />
      </div>
      <div className="flex-1 h-full">
        <article className="flex flex-col gap-y-2 justify-between h-full">
          <Link href="#">
            <a className="font-semibold text-slate-900 tracking-tight text-base hover:text-primary-400">
              {title}
            </a>
          </Link>
          <div className="flex justify-between">
            <div className="flex items-center gap-x-2">
              <AiFillCalendar className="text-slate-600" />
              <span className="text-xs font-medium text-slate-600">
                5 April 2020
              </span>
            </div>
            <span className="text-xs bg-black uppercase text-primary-500 rounded-full font-bold px-5 py-0.5 lg:py-1.5">
              {category}
            </span>
          </div>
        </article>
      </div>
    </div>
    // <div class="drop-shadow-xl bg-white block... h-10 w-full">a</div>
  );
}
