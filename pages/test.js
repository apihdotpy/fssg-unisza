import React, { useState, useEffect } from "react";

function Test() {
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

    if (windowHeight === 0) {
      setNavbarClassName(" bg-transparent");
    } else if (windowHeight < 80) {
      setNavbarClassName(" fixed translate-x-0 -translate-y-20");
    } else {
      setNavbarClassName(
        " sticky bg-white translate-x-0 border-b border-slate-900/10 translate-y-0 transition-all duration-500"
      );
    }
  }, [windowHeight]);
  return (
    <>
      <main>
        <header
          className={`h-20 text-center w-full ${
            windowHeight > 80 ? "fixed bg-white top-0" : "absolute"
          }`}
        >
          Test
        </header>
        <section className="h-screen bg-purple-400">a</section>
        <section className="h-screen bg-red-400">a</section>
      </main>
    </>
  );
}

export default Test;
