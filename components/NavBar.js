import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [navbarActive, setNavbarActive] = useState(false);
  const [navbarClassName, setNavbarClassName] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setWindowHeight(window.scrollY);
  };

  useEffect(() => {
    // for development only
    // console.log("height" + windowHeight);

    if (windowHeight < 100) {
      setNavbarClassName("absolute bg-transparent top-0");
      setNavbarActive(false);
    } else if (windowHeight > 100 && windowHeight < 200) {
      setNavbarClassName("fixed -top-32");
    } else if (windowHeight > 200) {
      setNavbarClassName(
        "fixed top-0 bg-white translate-x-0 border-b border-slate-900/10 translate-y-0 transition-all duration-700 drop-shadow-md"
      );
      setNavbarActive(true);
    }
  }, [windowHeight]);

  return (
    <>
      <nav className={`w-full z-10 border-slate-900/10 ${navbarClassName}`}>
        <div className="flex justify-between items-center py-4 max-w-8xl mx-auto px-[6%]">
          <div className="relative h-12 w-[106.25px]">
            <Image
              src="/logo-unisza.png"
              alt="logo unisza"
              layout="fill"
              height={314}
              width={834}
            />
          </div>
          <AiOutlineMenu className="lg:hidden" />
          <nav className="hidden lg:block">
            <ol className="flex gap-x-8">
              <li className="text-slate-900 tracking-tight font-medium">
                <Link href="/domestic">
                  <a
                    className={`relative link-underline font-semibold ${
                      navbarActive
                        ? "before:bg-primary-500 hover:text-primary-500"
                        : "before:bg-white hover:text-white"
                    }`}
                  >
                    Domestic
                  </a>
                </Link>
              </li>
              <li className="text-slate-900 tracking-tight font-medium">
                <Link href="/domestic">
                  <a
                    className={`relative link-underline font-semibold ${
                      navbarActive
                        ? "before:bg-primary-500 hover:text-primary-500"
                        : "before:bg-white hover:text-white"
                    }`}
                  >
                    International
                  </a>
                </Link>
              </li>
              <li className="text-slate-900 tracking-tight font-medium">
                <Link href="/domestic">
                  <a
                    className={`relative link-underline font-semibold ${
                      navbarActive
                        ? "before:bg-primary-500 hover:text-primary-500"
                        : "before:bg-white hover:text-white"
                    }`}
                  >
                    About
                  </a>
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </nav>
    </>
  );
}
