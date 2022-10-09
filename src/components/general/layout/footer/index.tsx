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
                <a>Contact Us</a>
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
                <a>Zitra Raiz</a>
              </li>
              <li>
                <a>Zitra Pesado</a>
              </li>
              <li>
                <a>Zitra Sharpaly</a>
              </li>
              <li>
                <a>Zitra Primero</a>
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.ttl}>Contact</p>
            <ul className={styles.list}>
              <li>
                <a>017002801</a>
              </li>
              <li>
                <a>info@zitrainvestments.com</a>
              </li>
              <li>Address D59, Landbridge Avenue Oniru, Lekki Lagos.</li>
              <p className={`${styles.ttl} ${styles.socialsTtl}`}>Socials</p>
              <div className={styles.socials}>
                <a>
                  <img src={instagram} alt="" />
                </a>
                <a>
                  <Twitter />
                </a>
                <a>
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
