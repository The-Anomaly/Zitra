import * as React from "react";
import { Hero } from "./heroSection";
import { Products } from "./products";

interface LoanProps {
  raiz: () => void;
  confam: () => void;
}

const LoanUI: React.FC<LoanProps> = ({ raiz, confam }) => {
  return (
    <>
      <Hero />
      <Products raiz={raiz} confam={confam} />
    </>
  );
};
export { LoanUI };
