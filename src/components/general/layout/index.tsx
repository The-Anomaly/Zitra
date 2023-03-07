import { InvestmentForm, LoanForm } from "pages";
import * as React from "react";
import { Footer } from "./footer";
import { Navbar, NavbarProps } from "./navbar";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";
import { Routes } from "router";
import axios from "axios";
import { Preloader, Toast } from "components";
import { SENDINBLUE_KEY, SENDINBLUE_LIST_ID } from "config";
import { WhatsappIcon } from "assets";

interface LayoutProps extends NavbarProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children, active }) => {
  const [showLoan, setShowLoan] = React.useState(false);
  const [showInvestment, setShowInvestment] = React.useState(false);
  const { pathname } = useLocation();
  const [toast, setToast] = React.useState({
    show: false,
    type: false,
    title: "",
    text: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [clear, setClear] = React.useState(false);

  const apply = () => {
    if (pathname === Routes.loans) {
      setShowLoan(true);
    } else {
      setShowInvestment(true);
    }
  };

  const newsletter = async (email) => {
    setLoading(true);
    const options = {
      method: "POST",
      url: "https://api.sendinblue.com/v3/contacts",
      headers: {
        accept: "application/json",
        "api-key": SENDINBLUE_KEY,
      },
      data: {
        email,
        listIds: [SENDINBLUE_LIST_ID],
      },
    };

    axios
      .request(options)
      .then((response) => {
        setToast({
          show: true,
          type: true,
          title: "Great",
          text: "You've successfully subscribed to our newsletter!",
        });

        setClear(!clear);
      })
      .catch((error) => {
        setToast({
          show: true,
          type: false,
          title: "Error",
          text: error.response.data.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Preloader loading={loading} />
      <Toast
        {...toast}
        closeModal={() => setToast({ ...toast, show: false })}
      />
      <LoanForm show={showLoan} closeModal={() => setShowLoan(false)} />
      <InvestmentForm
        show={showInvestment}
        closeModal={() => setShowInvestment(false)}
      />
      <Navbar active={active} apply={apply} />
      <main className={styles.wrapper}>{children}</main>
      <a
        className={styles.whatsapp}
        href="https://wa.me/+2347047751368"
        target="blank"
      >
        <WhatsappIcon />
        <p>Chat with us</p>
      </a>
      <Footer clear={clear} submit={newsletter} />
    </>
  );
};
export { Layout };
