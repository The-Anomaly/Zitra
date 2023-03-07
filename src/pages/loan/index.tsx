import * as React from "react";
import { LoanUI } from "components";
import { LoanForm } from "pages";

const Loan = () => {
  const [state, setState] = React.useState(false);
  const [mailTo, setMailTo] = React.useState<string | undefined>(undefined);

  return (
    <>
      <LoanForm to={mailTo} show={state} closeModal={() => setState(false)} />
      <LoanUI
        apply={(x) => {
          setState(true);
          x && setMailTo(x);
        }}
      />
    </>
  );
};
export { Loan };
