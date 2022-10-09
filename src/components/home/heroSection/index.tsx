import { landingHeroImg, ZigZag } from "assets";
import { Button } from "components/general";
import * as React from "react";
import styles from "./styles.module.css";

const Hero = () => {
  return (
    <>
      <section className={styles.heroBg}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.textSec}>
            <h1 className={styles.ttl}>
              Making Loans{" "}
              <span>
                simple <ZigZag className={styles.zigzag} />
              </span>{" "}
              for you{" "}
            </h1>
            <p className={styles.txt}>
              Start your journey with Zitra Investments and discover how simple
              money can be, whether you want to pay off credit card debt or
              resolve unexpected expenses that arise during the year.
            </p>
            <Button className={styles.btn} onClick={() => {}}>
              Apply Now
            </Button>
            <img className={styles.img} src={landingHeroImg} alt="" />
            <div  className={styles.textSec2}>
              <p className={styles.txt2}>
                Get loans up to 5million within minutes
              </p>
              <ul className={styles.points}>
                <li>Clear and Transparent Process</li>
                <li>Flexible repayment</li>
                <li>Easily apply in minutes</li> <li>Competitive rates</li>
                <li>
                  No bot – Real time support and efficient 24/7 customer service
                </li>
                <li>No collateral needed</li>
              </ul>
            </div>
          </div>
 
        </div>
      </section>
    </>
  );
};
export { Hero };
