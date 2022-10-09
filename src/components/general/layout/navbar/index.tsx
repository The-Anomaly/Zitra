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
  const [showNav, setShowNav] = React.useState(false);
  const [reduceNavHeight, setReduceNavHeight] = React.useState(false);
  const [mobile, setMobile] = React.useState(
    window.innerWidth <= 800 ? true : false
  );

  const screenSizeUpdate = () => {
    if (window.innerWidth <= 800) {
      setMobile(true);
    } else if (window.innerWidth > 800) {
      setMobile(false);
      setShowNav(false);
    }
  };
  window.onresize = screenSizeUpdate;

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setReduceNavHeight(true);
    } else {
      setReduceNavHeight(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
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
      <header className={styles.navBg}>
        <div
          className={`container ${styles.header} ${
            showNav ? styles.openMenu : ""
          } ${reduceNavHeight ? styles.navHeight : ""}`}
        >
          <img className={styles.logo} src={logo} alt="logo" />
          {(showNav && mobile) || !mobile ? (
            <>
              <nav className={styles.nav}>
                <ul className={styles.navlist}>
                  {NavLinks.map((item, index) => (
                    <li
                      key={index}
                      className={item.state === active ? styles.activeItem : ""}
                    >
                      <Link onClick={() => setShowNav(false)} to={item.link}>
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button className={styles.navBtn} onClick={() => {}}>
                Apply now
              </Button>
            </>
          ) : (
            ""
          )}
          <button
            onClick={() => setShowNav(!showNav)}
            className={`${styles.hamburger} ${
              showNav ? styles.closeMenuBtn : ""
            }`}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </header>
    </>
  );
};
export { Navbar };
