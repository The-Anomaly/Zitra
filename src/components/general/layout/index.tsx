import * as React from "react";
import { Footer } from "./footer";
import { Navbar, NavbarProps } from "./navbar";
import styles from "./styles.module.css";

interface LayoutProps extends NavbarProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children, active }) => {
  return (
    <>
      <Navbar active={active} />
      <main className={styles.wrapper} >{children}</main>
      <Footer />
    </>
  );
};
export { Layout };
