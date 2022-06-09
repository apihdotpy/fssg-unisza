import React from "react";
import { PEOPLE } from "../data/awards-data";
import Container from "./Container";
import AwardsUser from "./AwardsUser";

export default function AwardsSection() {
  return (
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
  );
}
