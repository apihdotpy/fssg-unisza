import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// icons
import {
  AiOutlineArrowRight,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillInfoCircle,
  AiFillPhone,
  AiFillContainer,
  AiFillMail,
} from "react-icons/ai";
// data
import { PERANAN } from "../data/peranan";
import { images } from "../data/carousel-data";
import { NEWS } from "../data/news-data";
import { LINKS } from "../data/links-data";
import { PEOPLE } from "../data/awards-data";
// components
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Container from "../components/Container";
import CardLink from "../components/CardLink";
import AwardsUser from "../components/AwardsUser";
import SlideShow from "../components/SlideShow";
import Article from "../components/Article";
import Peranan from "../components/Peranan";
import IntroductionSection from "../components/IntroductionSection";
import NewsSection from "../components/NewsSection";
import LinksSection from "../components/LinksSection";
import InfoSection from "../components/InfoSection";
import AwardsSection from "../components/AwardsSection";
import Footer from "../components/Footer";

export default function Home() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    console.log(inView);
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      <Head>
        <title>FSSG Official</title>
        <meta
          name="description"
          content="Fakulti Sains Sosial dan Gunaan Official Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative">
        <NavBar />
        <IntroductionSection />
        <NewsSection />
        <LinksSection />
        <AwardsSection />
        <InfoSection />
        <div className="bg-black text-purple-500 text-center py-5">
          Code with <span className="text-red-500">&hearts;</span> by ApihJS
        </div>
      </main>
      <Footer />
    </>
  );
}
