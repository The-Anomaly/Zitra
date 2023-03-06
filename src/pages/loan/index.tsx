import * as React from "react";
import { LoanUI } from "components";
import { LoanForm } from "pages";

const Loan = () => {
  const [state, setState] = React.useState(false);

  return (
    <>
      <LoanForm show={state} closeModal={() => setState(false)} />
      <LoanUI apply={() => setState(true)} />
    </>
  );
};
export { Loan };
