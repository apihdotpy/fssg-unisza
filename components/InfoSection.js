import React from "react";
import Image from "next/image";
import {
  AiFillInfoCircle,
  AiFillPhone,
  AiFillContainer,
  AiFillMail,
} from "react-icons/ai";

import Container from "./Container";

export default function InfoSection() {
  return (
    <div className="bg-black py-8 lg:pb-24">
      <Container>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h2 className="text-white font-extrabold tracking-wider mb-8 lg:my-12">
              How Can We Help?
            </h2>
            <div>
              <div className="flex flex-col gap-y-5">
                <div className="flex items-center gap-x-7">
                  <AiFillInfoCircle className="text-primary-600 " size={40} />
                  <span className="flex-1 text-primary-600">
                    Fakulti Sains Sosial Gunaan Universiti Sultan Zainal Abidin
                    Kampus Gong Badak, 21300, Kuala Nerus, Terengganu Darul
                    Iman.
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
            </div>
          </div>
          <div className="relative w-full h-60 lg:w-1/2 lg:h-auto">
            <Image src="/contact-us.svg" layout="fill" />
          </div>
        </div>
      </Container>
    </div>
  );
}
