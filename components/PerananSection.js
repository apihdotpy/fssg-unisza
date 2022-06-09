import React from "react";
import { PERANAN } from "../data/peranan";
import Peranan from "./Peranan";

export default function PerananSection() {
  return (
    <>
      <h3 className="text-white font-bold text-center mb-12 lg:mb-24">
        Peranan Utama
      </h3>
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-y-24">
        {PERANAN.map((peranan, index) => (
          <Peranan key={index} index={index} {...peranan} />
        ))}
      </div>
    </>
  );
}
