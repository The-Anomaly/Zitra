import * as React from "react";
import { Hero } from "./heroSection";
import { InvestmentOptions } from "./options";

const InvestmentsUI = ({ apply, dollarInvestment }) => {
  return (
    <>
      <Hero />
      <InvestmentOptions apply={apply} dollarInvestment={dollarInvestment} />
    </>
  );
};
export { InvestmentsUI };
