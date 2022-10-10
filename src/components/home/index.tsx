import * as React from "react";
import { Hero } from "./heroSection";
import { HowItWorks } from "./howItWorks";
import { Products } from "./products";
import { Security } from "./security";
import { SocialProof } from "./socialProof";
import { Testimonials } from "./testimonials";

const HomeUI = ({ apply }) => {
  return (
    <>
      <Hero apply={apply} />
      <SocialProof />
      <Products />
      <HowItWorks />
      <Security apply={apply} />
      <Testimonials />
    </>
  );
};
export { HomeUI };
