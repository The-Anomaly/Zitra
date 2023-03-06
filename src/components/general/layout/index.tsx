import { InvestmentForm, LoanForm } from "pages";
import * as React from "react";
import { Footer } from "./footer";
import { Navbar, NavbarProps } from "./navbar";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";
import { Routes } from "router";

interface LayoutProps extends NavbarProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children, active }) => {
  const [showLoan, setShowLoan] = React.useState(false);
  const [showInvestment, setShowInvestment] = React.useState(false);
  const { pathname } = useLocation();

  const apply = () => {
    if (pathname === Routes.loans) {
      setShowLoan(true);
    } else {
      setShowInvestment(true);
    }
  };

  return (
    <>
      <LoanForm show={showLoan} closeModal={() => setShowLoan(false)} />
      <InvestmentForm
        show={showInvestment}
        closeModal={() => setShowInvestment(false)}
      />
      <Navbar active={active} apply={apply} />
      <main className={styles.wrapper}>{children}</main>
      <Footer />
    </>
  );
};
export { Layout };
