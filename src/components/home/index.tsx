import * as React from "react";
import { Hero } from "./heroSection";
import { HowItWorks } from "./howItWorks";
import { Products } from "./products";
import { Security } from "./security";
import { SocialProof } from "./socialProof";
import styles from "./styles.module.css";
import { Testimonials } from "./testimonials";

const HomeUI = () => {
  return (
    <>
      <Hero />
      <SocialProof />
      <Products />
      <HowItWorks />
      <Security />
      <Testimonials />
    </>
  );
};
export { HomeUI };
