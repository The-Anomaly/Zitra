import {
  Facebook,
  FooterVec1,
  FooterVec2,
  FooterVec3,
  instagram,
  LogoWhite,
  Twitter,
} from "assets";
import * as React from "react";
import { Link } from "react-router-dom";
import { Routes } from "router";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footerBg}>
        <FooterVec1 className={styles.vec1} />
        <FooterVec2 className={styles.vec2} />
        <FooterVec3 className={styles.vec3} />
        <div className={`container ${styles.footerWrap}`}>
          <div>
            <LogoWhite className={styles.logo} />
            <p className={styles.txt1}>
              At Zitra, we provide our clients with premium value-added services
              and build trusting relationships to meet their financial and
              business needs.
            </p>
          </div>
          <div>
            <p className={styles.ttl}>Quick Links</p>
            <ul className={styles.list}>
              <li>
                <Link to={Routes.home}>Home</Link>
              </li>
              <li>
                <Link to={Routes.assetManagement}>Asset managements</Link>
              </li>
              <li>
                <Link to={Routes.about}>About Us</Link>
              </li>
              <li>
                <Link to={`${Routes.about}#contact`}>Contact Us</Link>
              </li>
              <li>
                <a>FAQs</a>
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.ttl}>Our products</p>
            <ul className={styles.list}>
              <li>
                <Link to={`${Routes.loans}#raiz`}>Zitra Raiz</Link>
              </li>
              <li>
                <Link to={`${Routes.investments}#pesado`}>Zitra Pesado</Link>
              </li>
              <li>
                <Link to={`${Routes.loans}#sharpaly`}>Zitra Sharpaly</Link>
              </li>
              <li>
                <Link to={`${Routes.investments}#primero`}>Zitra Primero</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.ttl}>Contact</p>
            <ul className={styles.list}>
              <li>
                <a href="tel:017002801" target={"_blank"} rel="noreferrer">
                  017002801
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@zitrainvestments.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  info@zitrainvestments.com
                </a>
              </li>
              <li>Address D59, Landbridge Avenue Oniru, Lekki Lagos.</li>
              <p className={`${styles.ttl} ${styles.socialsTtl}`}>Socials</p>
              <div className={styles.socials}>
                <a target={"_blank"} rel="noreferrer">
                  <img src={instagram} alt="" />
                </a>
                <a target={"_blank"} rel="noreferrer">
                  <Twitter />
                </a>
                <a target={"_blank"} rel="noreferrer">
                  <Facebook />
                </a>
              </div>
            </ul>
          </div>
          <div>
            <p className={styles.ttl2}>Join our newsletter</p>
            <div className={styles.inputWrap}>
              <input placeholder="enter your email address" />
              <button>Sign me up</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export { Footer };
