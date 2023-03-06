import * as React from "react";
import { HomeUI } from "components";
import { LoanForm } from "pages/loanForm";
import { InvestmentForm } from "pages/investmentForm";

const Home = () => {
  const [showLoan, setShowLoan] = React.useState(false);
  const [showInvestment, setShowInvestment] = React.useState(false);
  return (
    <>
      <LoanForm show={showLoan} closeModal={() => setShowLoan(false)} />
      <InvestmentForm
        show={showInvestment}
        closeModal={() => setShowInvestment(false)}
      />
      <HomeUI
        loan={() => setShowLoan(true)}
        investment={() => setShowInvestment(true)}
      />
    </>
  );
};
export { Home };
