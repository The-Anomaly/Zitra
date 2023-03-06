import * as React from "react";
import { Hero } from "./heroSection";
import { HowItWorks } from "./howItWorks";
import { Products } from "./products";
import { Security } from "./security";
import { SocialProof } from "./socialProof";
import { Testimonials } from "./testimonials";

const HomeUI = ({ loan, investment }) => {
  return (
    <>
      <Hero apply={loan} />
      <SocialProof />
      <Products />
      <HowItWorks />
      <Security apply={investment} />
      <Testimonials />
    </>
  );
};
export { HomeUI };
