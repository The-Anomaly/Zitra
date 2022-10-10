import * as React from "react";
import { LoanUI } from "components";
import { ApplyNow } from "pages";

const Loan = () => {
  const [state, setState] = React.useState(false);

  return (
    <>
      <ApplyNow show={state} closeModal={() => setState(false)} />
      <LoanUI apply={() => setState(true)} />
    </>
  );
};
export { Loan };
