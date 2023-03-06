import * as React from "react";
import { Hero } from "./heroSection";
import { AssetOptions } from "./options";

const AssetManagementUI = ({ apply }) => {
  return (
    <>
      <Hero />
      <AssetOptions apply={apply} />
    </>
  );
};
export { AssetManagementUI };
