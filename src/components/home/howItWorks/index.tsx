import { landingHowImg, SmallZigzag2 } from "assets";
import * as React from "react";
import styles from "./styles.module.css";

const HowItWorks = () => {
  return (
    <section className={styles.howBg}>
      <div className={`container ${styles.howContainer}`}>
        <div className={styles.txtSec}>
          <h3 className={styles.ttl}>How it Works <SmallZigzag2 className={styles.zigzag} /></h3>
          <p className={styles.txt}>
            Today, Tomorrow, always with you! <br />Get started with the following
            steps:
          </p>
          <div className={styles.pointList}>
            <div className={styles.point}>
              <p className={styles.pointTtl}>Apply</p>
              <p className={styles.pointTxt}>
                Share some information about yourself, and choose your loan
                tenure.
              </p>
            </div>
            <div className={styles.point}>
              <p className={styles.pointTtl}>Verify</p>
              <p className={styles.pointTxt}>
                Verify the information that you’ve provided.
              </p>
            </div>
            <div className={styles.point}>
              <p className={styles.pointTtl}>Receive your funds</p>
              <p className={styles.pointTxt}>
                Sign needed documents and Funds are then deposited directly into
                your bank account in as little as 24 hours, if your loan is
                approved.
              </p>
            </div>
          </div>
        </div>
        <img className={styles.img} src={landingHowImg} alt="" />
      </div>
    </section>
  );
};

export { HowItWorks };
