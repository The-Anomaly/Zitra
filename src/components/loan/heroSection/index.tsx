import { ArrowDown, loanHeroImg, MobileZigzag, ZigZag } from "assets";
import * as React from "react";
import styles from "./styles.module.css";

const Hero = () => {
  return (
    <>
      <section className={styles.heroBg}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.textSec}>
            <h1 className={styles.ttl}>
              A better way to{" "}
              <span>
                financial <ZigZag className={styles.zigzag} />{" "}
                <MobileZigzag className={`${styles.zigzag} ${styles.mobileZigzag}`} />
              </span>{" "}
              freedom
            </h1>
            <p className={styles.txt}>
              Apply for a loan today to help with your small business, a
              renovation project at home, a car purchase, rent, school fees,
              medical expenses, etc.
            </p>
            <img className={styles.img} src={loanHeroImg} alt="" />
            <p className={styles.txt2}>
              We offer few loan options <ArrowDown />{" "}
            </p>
          </div>
       
        </div>
      </section>
    </>
  );
};
export { Hero };
