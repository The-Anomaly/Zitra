import {
  Facebook,
  FooterVec1,
  FooterVec2,
  FooterVec3,
  instagram,
  LinkedIn,
  LogoWhite,
  secNigeria,
  Twitter,
  Youtube,
} from "assets";
import * as React from "react";
import { Link } from "react-router-dom";
import { Routes } from "router";
import styles from "./styles.module.css";

interface FooterProps {
  submit: (email: string) => void;
  clear: boolean;
}

const Footer: React.FC<FooterProps> = ({ submit, clear }) => {
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    setEmail("");
  }, [clear]);

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
                <Link to={Routes.assetManagement}>Asset management</Link>
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
                <Link to={`${Routes.loans}#confam`}>Zitra Confam</Link>
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
              <li>Address D59, Landbridge Avenue Victoria Island, Lagos.</li>
              <p className={`${styles.ttl} ${styles.socialsTtl}`}>Socials</p>
              <div className={styles.socials}>
                <a
                  href="https://www.instagram.com/zitrainvestments/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={instagram} alt="" />
                </a>
                <a
                  href="https://twitter.com/zitrainvestment?s=11&t=EljUfIs4lTDFZcbYOdhdLA"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.facebook.com/zitrainvestments"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC5iIoEh-7KndOmmd-uzWpAw"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Youtube />
                </a>
                <a
                  href="https://www.linkedin.com/company/zitra-investments/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <LinkedIn />
                </a>
              </div>
            </ul>
          </div>
          <div className={styles.registeredBy}>
            <p className={styles.ttl2}>Zitra Investments is Licensed by:</p>
            <img src={secNigeria} />
          </div>
          <div>
            <p className={styles.ttl2}>Join our newsletter</p>
            <div className={styles.inputWrap}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="enter your email address"
              />
              <button disabled={email === ""} onClick={() => submit(email)}>
                Sign me up
              </button>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>© 2022 Zitra Investments. All rights reserved. </p>
            <p>
              A COMPANY OF STRONGHOLD INVESTMENT LIMITED (RC 269915), Registered
              Fund Manager by the Securities and Exchange Commission (SEC).
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export { Footer };
