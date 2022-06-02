import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex bg-white">
      <Image src="/banner_fssg.png" width="630" height="77" />
    </div>
  );
}
