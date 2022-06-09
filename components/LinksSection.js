import React from "react";
import { LINKS } from "../data/links-data";
import Container from "./Container";
import CardLink from "./CardLink";
import PerananSection from "./PerananSection";

export default function LinksSection() {
  return (
    <section className="relative bg-black w-full pb-6">
      <Container>
        <h3 className="text-white font-bold mb-6 tracking-tight text-center lg:py-24">
          Alternative Links
        </h3>
        <div className="relative grid grid-cols-4 gap-y-8 gap-x-4 lg:grid-cols-6 mb-24">
          {LINKS.map((link, index) => {
            return <CardLink key={index} {...link} />;
          })}
        </div>
        <PerananSection />
      </Container>
    </section>
  );
}
