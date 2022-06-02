import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
// data
import { PERANAN } from "../data/peranan";
import { images } from "../data/carousel-data";
// components
import Container from "../components/Container";
import CardLink from "../components/CardLink";
// icons
import {
  AiOutlineMenu,
  AiOutlineArrowRight,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineCalendar,
  AiFillInfoCircle,
  AiFillPhone,
  AiFillContainer,
  AiFillMail,
} from "react-icons/ai";
import { MdOutlinePsychology } from "react-icons/md";
import { icons } from "react-icons";
import AwardsUser from "../components/AwardsUser";
import SlideShow from "../components/SlideShow";

export default function Home() {
  return (
    <>
      <div className="min-h-screen  bg-pattern1 bg-no-repeat">
        <header className="sticky top-0 bg-white">
          <div className="flex justify-between items-center py-4 px-6">
            <img src="/logo-unisza.jpg" alt="logo unisza" className="h-10" />
            <AiOutlineMenu />
          </div>
        </header>
        <Container>
          <article className="py-10">
            <h1 className="text-slate-900 font-extrabold tracking-tight text-center">
              Fakulti Sains Sosial Gunaan
              <span className="text-primary-500"> (FSSG)</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto text-center">
              Ditubuhkan pada Januari 2014. Matlamat utama penubuhan FSSG adalah
              untuk memperkukuh dan memantapkan lagi ekosistem ilmu dan
              pembangunan akademia UniSZA bagi membantu negara menghasilkan
              modal insan yang berilmu pengetahuan, profesional, berakhlak
              tinggi, kreatif, inovatif serta berbudaya keusahawanan, meneroka
              dan menyelidik.
            </p>
            <button className="flex items-center gap-x-4 mx-auto mt-6 bg-black px-8 py-4 rounded-lg text-white font-semibold transition hover:bg-primary-500 hover:text-black hover:scale-110 ">
              Lebih Lanjut
              <AiOutlineArrowRight size={20} />
            </button>
            <div className="my-12">
              <img
                src="/logo.png"
                alt="logo-fssg"
                className="w-60 h-60 mx-auto"
              />
            </div>
          </article>
        </Container>
      </div>

      {/* News */}

      <div className="relative bg-primary-500 py-8 bg-pattern2 bg-no-repeat">
        <Container>
          <h2 className="font-semibold mb-8">News Archives</h2>
          <div className="grid grid-cols-1 gap-y-4">
            {[1, 2, 3].map((article, index) => (
              <div
                key={index}
                className="flex gap-x-8 group transition hover:scale-105 cursor-pointer"
              >
                <div className="h-24 w-24 rounded-xl bg-black overflow-hidden drop-shadow-sm">
                  <img src="/fake.jpg" alt="" className="h-full w-auto" />
                </div>
                <div className="flex-1 py-2">
                  <div className="flex flex-col justify-between h-full">
                    <h6 className="font-semibold tracking-tight">
                      MAJLIS SANJUNG BUDI PROF. DATUK DR. YAHAYA BIN IBRAHIM
                    </h6>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-x-2">
                        <AiOutlineCalendar className="text-slate-800" />
                        <span className="text-xs font-medium text-slate-800">
                          5 April 2020
                        </span>
                      </div>
                      <span className="text-xs uppercase bg-black text-white rounded-lg px-5 py-1">
                        Category
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="flex mx-auto mt-8 items-center gap-x-2 bg-black text-primary-400 px-16 py-1.5 rounded-md group transition hover:scale-110">
            <span className="text-sm group-hover:animate-pulse">view more</span>
            <AiOutlineArrowRight className="group-hover:animate-pulse" />
          </button>
        </Container>
        {/* Gallery */}
        <div className="mt-12">
          <h2 className="font-semibold mb-8 text-center">Gallery</h2>
          <div className="w-full">
            <SlideShow images={images} />
          </div>
        </div>
      </div>

      {/* Links */}

      <div className="relative bg-black w-full pb-6">
        <Container>
          <h2 className="text-white mb-6 text-center">Links</h2>
          <div className="grid grid-cols-4 gap-y-8 gap-x-4 lg:grid-cols-8">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16].map(
              (link, index) => {
                return <CardLink key={index} />;
              }
            )}
          </div>
          <h2 className="text-white mt-20 mb-6 font-extrabold text-center">
            Peranan Utama
          </h2>
          <div className="grid grid-cols-1 gap-y-12">
            {PERANAN.map((peranan) => {
              const Icon = peranan.icon;
              return (
                <div
                  key={peranan.id}
                  className="flex flex-col items-center gap-y-4 "
                >
                  <Icon className="text-primary-400 h-8 w-8" />
                  <h5 className="text-white text-center">{peranan.title}</h5>
                  <span className="text-slate-400 text-center">
                    {peranan.description}
                  </span>
                </div>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Awards */}
      <div className="relative text-center pb-16 bg-pattern3 bg-no-repeat -mt-1">
        <Container>
          <h2 className="text-center font-extrabold py-8 text-primary-500">
            Awards
          </h2>
          <div className="grid grid-cols-3 gap-y-6 gap-x-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((user, index) => (
              <AwardsUser key={index} />
            ))}
          </div>
        </Container>
      </div>

      {/* Info */}

      <div className="bg-black py-8">
        <Container>
          <h2 className="text-white font-extrabold tracking-wider mb-8">
            How Can We Help?
          </h2>
          <div className="flex flex-col gap-y-5">
            <div className="flex items-center gap-x-7">
              <AiFillInfoCircle className="text-primary-600 " size={40} />
              <span className="flex-1 text-primary-600">
                Fakulti Sains Sosial Gunaan Universiti Sultan Zainal Abidin
                Kampus Gong Badak, 21300, Kuala Nerus, Terengganu Darul Iman.
              </span>
            </div>
            <div className="flex items-center gap-x-7">
              <AiFillPhone className="text-primary-600 " size={40} />
              <span className="flex-1 text-primary-600">
                09-6688302/ 8308/ 8306
              </span>
            </div>
            <div className="flex items-center gap-x-7">
              <AiFillContainer className="text-primary-600 " size={40} />
              <span className="flex-1 text-primary-600">09-6687895</span>
            </div>
            <div className="flex items-center gap-x-7">
              <AiFillMail className="text-primary-600 " size={40} />
              <span className="flex-1 text-primary-600">
                fssg@unisza.edu.my
              </span>
            </div>
          </div>
        </Container>
      </div>
      <footer className="flex justify-between items-center bg-yellow-500 px-8 py-2">
        <span>Copyright &copy; 2022 Unisza</span>
        <div className="flex gap-3">
          <AiFillFacebook size={20} />
          <AiFillInstagram size={20} />
          <AiFillTwitterSquare size={20} />
        </div>
      </footer>
    </>
  );
}
