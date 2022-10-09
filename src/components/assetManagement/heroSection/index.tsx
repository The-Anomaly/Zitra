import { ArrowDown, assetsHeroImg, MobileZigzag, ZigZag } from "assets";
import * as React from "react";
import styles from "./styles.module.css";

const Hero = () => {
  return (
    <>
      <section className={styles.heroBg}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.textSec}>
            <h1 className={styles.ttl}>
              The investment for your comfort - Easy investment for a{" "}
              <span>
                happier <ZigZag className={styles.zigzag} />
                <MobileZigzag
                  className={`${styles.zigzag} ${styles.mobileZigzag}`}
                />
              </span>
              life
            </h1>
            <p className={styles.txt}>
              We offer a wide range of investment products and services across
              asset classes and investment styles. These include equities, money
              market and fixed income portfolios in local and global markets,
              collective investment schemes, and other investment vehicles
            </p>
            <img className={styles.img} src={assetsHeroImg} alt="" />
            <p className={styles.txt2}>
              We offer few investment options
              <ArrowDown />{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export { Hero };
