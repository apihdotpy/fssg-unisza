import React from "react";

export default function Peranan({ index, icon, title, description }) {
  const Icon = icon;
  return (
    <div
      className={`flex flex-col items-center gap-y-4 lg:px-20 lg:items-start lg:border-r lg:border-slate-100/30${
        (index + 1) % 3 === 0 ? " border-none" : ""
      }`}
    >
      <Icon className="text-primary-400 h-8 w-8 lg:h-14 lg:w-14" />
      <div className="lg:h-24">
        <h5 className="text-white font-bold text-center lg:text-left lg:font-xl">
          {title}
        </h5>
      </div>
      <span className="text-slate-300 text-center lg:text-left lg:text-lg">
        {description}
      </span>
    </div>
  );
}
