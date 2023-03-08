import * as React from "react";
import { LoanUI } from "components";
import { LoanForm, LoanFormConfam } from "pages";

const Loan = () => {
  const [raiz, setRaiz] = React.useState(false);
  const [confam, setConfam] = React.useState(false);

  return (
    <>
      <LoanForm show={raiz} closeModal={() => setRaiz(false)} />
      <LoanFormConfam show={confam} closeModal={() => setConfam(false)} />
      <LoanUI raiz={() => setRaiz(true)} confam={() => setConfam(true)} />
    </>
  );
};
export { Loan };
