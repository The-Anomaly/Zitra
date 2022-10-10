import { ApplyNow } from "pages";
import * as React from "react";
import { Footer } from "./footer";
import { Navbar, NavbarProps } from "./navbar";
import styles from "./styles.module.css";

interface LayoutProps extends NavbarProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children, active }) => {
  const [state, setState] = React.useState(false);

  return (
    <>
      <ApplyNow show={state} closeModal={() => setState(false)} />
      <Navbar active={active} apply={() => setState(true)} />
      <main className={styles.wrapper}>{children}</main>
      <Footer />
    </>
  );
};
export { Layout };
