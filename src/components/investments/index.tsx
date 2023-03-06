import * as React from "react";
import { Hero } from "./heroSection";
import { InvestmentOptions } from "./options";

const InvestmentsUI = ({ apply }) => {
  return (
    <>
      <Hero />
      <InvestmentOptions apply={apply} />
    </>
  );
};
export { InvestmentsUI };
