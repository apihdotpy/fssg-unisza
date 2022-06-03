import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CardLink({ icon, title, url }) {
  return (
    <div className="flex flex-col items-center gap-y-3">
      <div className="h-20 w-20 bg-slate-100 relative rounded-full overflow-hidden">
        <Image src={icon} layout="fill" objectFit="contain" />
      </div>
      <Link href={url}>
        <a className="text-xs font-semibold text-primary-500 text-center transition hover:scale-110 lg:text-base lg:mt-4">
          {title}
        </a>
      </Link>
    </div>
  );
}
