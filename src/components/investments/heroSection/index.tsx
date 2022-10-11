import {
  ArrowDown,
  investmentsHeroImg,
  MobileWideZigzag,
  WideZigzag,
} from "assets";
import * as React from "react";
import styles from "./styles.module.css";

const Hero = () => {
  return (
    <>
      <section className={styles.heroBg}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.textSec}>
            <h1 className={styles.ttl}>
              Invest the extra money for the{" "}
              <span>
                extra money
                <WideZigzag className={styles.zigzag} />
                <MobileWideZigzag
                  className={`${styles.zigzag} ${styles.mobileZigzag}`}
                />
              </span>
            </h1>
            <p className={styles.txt}>
              We offer attractive returns on your investments. Let's help you
              kickstart your journey towards financial Independence
            </p>
            <img className={styles.img} src={investmentsHeroImg} alt="" />
            <p className={styles.txt2}>
              We offer various investment options <ArrowDown />{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export { Hero };
