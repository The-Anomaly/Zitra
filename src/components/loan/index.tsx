import * as React from "react";
import { Hero } from "./heroSection";
import { Products } from "./products";

const LoanUI = ({apply}) => {
  return (
    <>
      <Hero />
      <Products apply={apply} />
    </>
  );
};
export { LoanUI };
