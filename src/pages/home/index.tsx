import * as React from "react";
import { HomeUI } from "components";
import { ApplyNow } from "pages/applyNowModal";

const Home = () => {
  const [state, setState] = React.useState(false);
  return (
    <>
      <ApplyNow show={state} closeModal={() => setState(false)} />
      <HomeUI apply={() => setState(true)} />
    </>
  );
};
export { Home };
