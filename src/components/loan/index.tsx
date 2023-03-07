import * as React from "react";
import { Hero } from "./heroSection";
import { Products } from "./products";

interface LoanProps {
  apply: (to?: string) => void;
}

const LoanUI: React.FC<LoanProps> = ({ apply }) => {
  return (
    <>
      <Hero />
      <Products apply={apply} />
    </>
  );
};
export { LoanUI };
