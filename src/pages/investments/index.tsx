import * as React from "react";
import { InvestmentsUI } from "components";
import { InvestmentForm } from "pages/investmentForm";

const Investments = () => {
  const [state, setState] = React.useState(false);

  return (
    <>
      <InvestmentForm show={state} closeModal={() => setState(false)} />
      <InvestmentsUI apply={() => setState(true)} />
    </>
  );
};
export { Investments };
