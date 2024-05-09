import * as React from "react";
import { InvestmentsUI } from "components";
import { InvestmentForm } from "pages/investmentForm";
import { InvestmentFormDollar } from "pages/investmentFormDollar";

const Investments = () => {
  const [state, setState] = React.useState(false);
  const [showInvestmentDollar, setShowInvestmentDollar] = React.useState(false);

  return (
    <>
      <InvestmentForm show={state} closeModal={() => setState(false)} />
      <InvestmentFormDollar
        show={showInvestmentDollar}
        closeModal={() => setShowInvestmentDollar(false)}
      />
      <InvestmentsUI
        apply={() => setState(true)}
        dollarInvestment={() => setShowInvestmentDollar(true)}
      />
    </>
  );
};
export { Investments };
