import React from "react";
import Image from "next/image";

export default function AwardsUser({ name, image }) {
  return (
    <div className="group flex flex-col items-center gap-y-2 transition duration-300 hover:scale-110">
      <div className="flex justify-center items-center w-[90px] h-[90px] bg-gradient-to-r from-black via-yellow-700 to-yellow-500 rounded-full drop-shadow-md lg:h-32 lg:w-32">
        <div className="relative w-20 h-20 rounded-full bg-white overflow-hidden border-2 border-white lg:h-[116px] lg:w-[116px]">
          <Image src={image} layout="fill" />
        </div>
      </div>
      <span className="text-sm group-hover:text-primary-500 group-hover:font-bold lg:text-base lg:font-semibold">
        {name}
      </span>
    </div>
  );
}
