import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const [windowHeight, setWindowHeight] = useState("");
  const [navbarClassName, setNavbarClassName] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setWindowHeight(window.scrollY);
  };

  useEffect(() => {
    console.log("height" + windowHeight);

    if (windowHeight < 200) {
      setNavbarClassName("");
    } else if (windowHeight < 300) {
      setNavbarClassName(" sticky translate-x-0 -translate-y-20");
    } else {
      setNavbarClassName(
        " sticky translate-x-0 border-b border-slate-900/10 translate-y-0 transition-all duration-700"
      );
    }
  }, [windowHeight]);

  return (
    <>
      <div className="bg-primary-500 w-full">
        <div className="flex justify-center py-1 font-bold">
          Fakulti Sains Sosial Gunaan (FSSG) Official Website
        </div>
      </div>
      <header
        className={` top-0 z-40 border-slate-900/10 bg-white${navbarClassName}`}
      >
        <div className="flex justify-between items-center py-4 max-w-8xl mx-auto px-[6%]">
          <div className="relative h-12 w-[106.25px]">
            <Image
              src="/logo-unisza.jpg"
              alt="logo unisza"
              layout="fill"
              height={314}
              width={834}
            />
          </div>
          <AiOutlineMenu className="lg:hidden" />
          <nav className="hidden lg:block">
            <ol className="flex gap-x-8">
              <li className="text-slate-800 tracking-tight font-medium">
                <Link href="/domestic">
                  <a className="relative link-underline hover:text-primary-500 font-semibold">
                    Domestic
                  </a>
                </Link>
              </li>
              <li className="text-slate-800 tracking-tight font-medium">
                <Link href="/domestic">
                  <a className="relative link-underline hover:text-primary-500 font-semibold">
                    International
                  </a>
                </Link>
              </li>
              <li className="text-slate-800 tracking-tight font-medium">
                <Link href="/domestic">
                  <a className="relative link-underline hover:text-primary-500 font-semibold">
                    About
                  </a>
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </header>
    </>
  );
}
