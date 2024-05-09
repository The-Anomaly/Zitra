import * as React from "react";
import { LoanUI } from "components";
import { LoanForm, LoanFormConfam } from "pages";
import { LoanFormSmallBusiness } from "pages/loanFormSmallBusiness";

const Loan = () => {
  const [raiz, setRaiz] = React.useState(false);
  const [confam, setConfam] = React.useState(false);
  const [smallBusiness, setSmallBusiness] = React.useState(false);

  return (
    <>
      <LoanForm show={raiz} closeModal={() => setRaiz(false)} />
      <LoanFormConfam show={confam} closeModal={() => setConfam(false)} />
      <LoanFormSmallBusiness
        show={smallBusiness}
        closeModal={() => setSmallBusiness(false)}
      />
      <LoanUI
        smallBusiness={() => setSmallBusiness(true)}
        raiz={() => setRaiz(true)}
        confam={() => setConfam(true)}
      />
    </>
  );
};
export { Loan };
