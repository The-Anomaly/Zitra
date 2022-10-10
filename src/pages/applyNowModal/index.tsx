import { ApplyNowUI } from "components";
import * as React from "react";

interface ApplyProps {
  show: boolean;
  closeModal: () => void;
}

const ApplyNow: React.FC<ApplyProps> = ({ show, closeModal }) => {
  return (
    <>
      <ApplyNowUI show={show} closeModal={closeModal} submit={() => {}} />
    </>
  );
};

export { ApplyNow };
