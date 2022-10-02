import { ArrowDown, loanHeroImg, ZigZag } from "assets";
import * as React from "react";
import styles from "./styles.module.css";

const Hero = () => {
  return (
    <>
      <section className={styles.heroBg}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.textSec}>
            <h1 className={styles.ttl}>
              A better way to financial freedom{" "}
              <ZigZag className={styles.zigzag} />
            </h1>
            <p className={styles.txt}>
              Apply for a loan today to help with your small business, a
              renovation project at home, a car purchase, rent, school fees,
              medical expenses, etc.
            </p>
            <p className={styles.txt2}>We offer few loan options <ArrowDown /> </p>
          </div>
          <img className={styles.img} src={loanHeroImg} alt="" />
        </div>
      </section>
    </>
  );
};
export { Hero };
