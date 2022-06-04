import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import {Html} from "next/document"
// data
import { PERANAN } from "../data/peranan";
import { images } from "../data/carousel-data";
import { NEWS } from "../data/news-data";
import { LINKS } from "../data/links-data";
import { PEOPLE } from "../data/awards-data";
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
import Article from "../components/Article";
import Peranan from "../components/Peranan";

export default function Home() {
  return (
    <Html lang="en">
      <Head>
        <title>FSSG Official</title>
        <meta
          name="description"
          content="Fakulti Sains Sosial dan Gunaan Official Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        {/* Introduction */}
        <div className="min-h-screen bg-pattern1 bg-no-repeat">
          <Container>
            <article className="pt-20 sm:pt-24 lg:pt-32 lg:flex lg:justify-between lg:gap-x-40">
              <div className="md:max-w-xl">
                <h1 className="text-slate-900 font-extrabold tracking-tight text-center max-w-3xl mx-auto">
                  Fakulti Sains Sosial Gunaan
                  <span className="text-primary-400"> (FSSG)</span>
                </h1>
                <p className="my-6 text-lg text-slate-600 max-w-3xl mx-auto text-center">
                  Ditubuhkan pada
                  <span className="font-bold text-yellow-400">
                    {` Januari 2014 `}
                  </span>
                  . Matlamat utama penubuhan FSSG adalah untuk memperkukuh dan
                  memantapkan lagi ekosistem ilmu dan pembangunan akademia
                  UniSZA bagi membantu negara menghasilkan modal insan yang
                  <span className="font-bold text-yellow-400">
                    {` berilmu pengetahuan `}
                  </span>
                  ,
                  <span className="font-bold text-yellow-400">
                    {` profesional `}
                  </span>
                  ,
                  <span className="font-bold text-yellow-400">
                    {` berakhlak tinggi `}
                  </span>
                  ,
                  <span className="font-bold text-yellow-400">
                    {`  kreatif `}
                  </span>
                  ,
                  <span className="font-bold text-yellow-400">
                    {`  meneroka `}
                  </span>
                  dan
                  <span className="font-bold text-yellow-400">
                    {`  menyelidik `}.
                  </span>
                </p>
                <a className="h-12 px-6 cursor-pointer rounded-lg w-full flex gap-x-2 items-center justify-center bg-black font-semibold transition  text-white hover:scale-105 hover:bg-primary-500 hover:text-black lg:py-7 lg:mx-auto lg:w-64 lg:mt-16">
                  Lebih Lanjut
                  <AiOutlineArrowRight size={20} />
                </a>
              </div>
              <div className="py-12 md:flex-1">
                {/* from tailwind tutorial - blob animated */}
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="m-8 relative space-y-4">
                    <Image
                      src="/logo.png"
                      alt="logo-fssg"
                      height={240}
                      width={240}
                    />
                  </div>
                </div>
              </div>
            </article>
          </Container>
        </div>

        {/* News */}

        <div className="relative bg-primary-500 py-8 bg-pattern2 bg-no-repeat">
          <Container>
            <h3 className="font-bold tracking-tight mb-8 text-center lg:text-left lg:mb-12">
              News Archives
            </h3>
            <div className="grid grid-cols-1 gap-y-3 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-8">
              {NEWS.map((news, index) => (
                <Article key={index} {...news} />
              ))}
            </div>
            <button className="flex mx-auto mt-8 items-center gap-x-2 text-white bg-slate-900 px-16 py-4 rounded-full group transition hover:text-primary-500 hover:scale-110">
              <span className="text-sm group-hover:animate-pulse group-hover:text-extrabold lg:text-base lg:capitalize">
                view more
              </span>
              <AiOutlineArrowRight className="group-hover:animate-pulse" />
            </button>
          </Container>
          {/* Gallery */}
          <div className="mt-12">
            <h3 className="font-bold tracking-tight mb-8 text-center lg:my-24">
              Images Gallery
            </h3>
            <div className="w-full">
              <SlideShow images={images} />
            </div>
          </div>
        </div>

        {/* Links */}

        <div className="relative bg-black w-full pb-6">
          <Container>
            <h3 className="text-white font-bold mb-6 tracking-tight text-center lg:py-24">
              Alternative Links
            </h3>
            <div className="relative grid grid-cols-4 gap-y-8 gap-x-4 lg:grid-cols-6 mb-24">
              {LINKS.map((link, index) => {
                return <CardLink key={index} {...link} />;
              })}
            </div>
            <h3 className="text-white font-bold text-center mb-12 lg:mb-24">
              Peranan Utama
            </h3>
            <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-y-24">
              {PERANAN.map((peranan, index) => (
                <Peranan key={index} index={index} {...peranan} />
              ))}
            </div>
          </Container>
        </div>

        {/* Awards */}
        <div className="relative text-center pb-16 bg-pattern3 bg-no-repeat -mt-1 lg:pt-24">
          <Container>
            <h2 className="text-center font-extrabold py-8 text-primary-500 lg:mb-12">
              Awards
            </h2>
            <div className="grid grid-cols-3 gap-y-6 gap-x-2 lg:grid-cols-6 lg:gap-y-12">
              {PEOPLE.map((user, index) => (
                <AwardsUser key={index} index={index} {...user} />
              ))}
            </div>
          </Container>
        </div>

        {/* Info */}

        <div className="bg-black py-8 lg:pb-24">
          <Container>
            <h2 className="text-white font-extrabold tracking-wider mb-8 lg:my-12">
              How Can We Help?
            </h2>
            <div className="flex flex-col gap-y-5 max-w-xl">
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
        <div className="bg-black text-purple-500 text-center py-5">
          Code with <span className="text-red-500">&hearts;</span> by ApihJS
        </div>
      </main>
      <footer className="flex justify-between items-center bg-yellow-500 px-8 py-2 lg:justify-center lg:gap-x-12">
        <span>Copyright &copy; 2022 Unisza</span>
        <div className="flex gap-3">
          <AiFillFacebook size={20} />
          <AiFillInstagram size={20} />
          <AiFillTwitterSquare size={20} />
        </div>
      </footer>
    </Html>
  );
}
