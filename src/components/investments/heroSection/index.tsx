import { ArrowDown, investmentsHeroImg, WideZigzag } from "assets";
import * as React from "react";
import styles from "./styles.module.css";

const Hero = () => {
  return (
    <>
      <section className={styles.heroBg}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.textSec}>
            <h1 className={styles.ttl}>
              Invest the extra money for the extra money
              <WideZigzag className={styles.zigzag} />
            </h1>
            <p className={styles.txt}>
              We offer attractive returns on your investments. Let's help you
              kickstart your journey towards the financial Independence
            </p>
            <p className={styles.txt2}>
              We offer various investment options <ArrowDown />{" "}
            </p>
          </div>
          <img className={styles.img} src={investmentsHeroImg} alt="" />
        </div>
      </section>
    </>
  );
};
export { Hero };
