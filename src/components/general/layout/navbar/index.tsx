import { logo } from "assets";
import { Button } from "components";
import * as React from "react";
import { Link } from "react-router-dom";
import { Routes } from "router";
import styles from "./styles.module.css";

export interface NavbarProps {
  active: "home" | "loans" | "investments" | "asset-management" | "about";
}

const Navbar: React.FC<NavbarProps> = ({ active }) => {
  const NavLinks = [
    {
      text: "Home",
      state: "home",
      link: Routes.home,
    },
    {
      text: "Loans",
      state: "loans",
      link: Routes.loans,
    },
    {
      text: "Investments",
      state: "investments",
      link: Routes.investments,
    },
    {
      text: "Asset Management",
      state: "asset-management",
      link: Routes.assetManagement,
    },
    {
      text: "About us",
      state: "about",
      link: Routes.about,
    },
  ];
  return (
    <>
      <header className={`container ${styles.header}`}>
        <img className={styles.logo} src={logo} alt="logo" />
        <nav className={styles.nav}>
          <ul className={styles.navlist}>
            {NavLinks.map((item, index) => (
              <li
                key={index}
                className={item.state === active ? styles.activeItem : ""}
              >
                <Link to={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button className={styles.navBtn} onClick={() => {}}>
          Apply now
        </Button>
      </header>
    </>
  );
};
export { Navbar };
