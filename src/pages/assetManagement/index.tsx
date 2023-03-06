import * as React from "react";
import { AssetManagementUI } from "components";
import { InvestmentForm } from "pages/investmentForm";

const AssetManagement = () => {
  const [state, setState] = React.useState(false);

  return (
    <>
      <InvestmentForm show={state} closeModal={() => setState(false)} />
      <AssetManagementUI apply={() => setState(true)} />
    </>
  );
};
export { AssetManagement };
