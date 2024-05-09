import * as React from "react";
import { Hero } from "./heroSection";
import { Products } from "./products";

interface LoanProps {
  raiz: () => void;
  confam: () => void;
  smallBusiness: () => void;
}

const LoanUI: React.FC<LoanProps> = ({ raiz, confam, smallBusiness }) => {
  return (
    <>
      <Hero />
      <Products raiz={raiz} confam={confam} smallBusiness={smallBusiness} />
    </>
  );
};
export { LoanUI };
