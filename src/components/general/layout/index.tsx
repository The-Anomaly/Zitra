import * as React from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import styles from "./styles.module.css";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export { Layout };
