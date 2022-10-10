import { landingSecurityImg } from "assets";
import { Button } from "components/general";
import * as React from "react";
import styles from "./styles.module.css";

const Security = ({ apply }) => {
  return (
    <section className={`container ${styles.securityContainer}`}>
      <div className={styles.txtSec}>
        <h4 className={styles.ttl}>
          At Zitra investments we priotize your security{" "}
        </h4>
        <p className={styles.txt}>
          The protection of your information is of utmost importance to us. All
          data exchanged over our platform is protected using the most recent
          version of our security certificate, which ensures the privacy and
          security of your information.
        </p>
        <Button className={styles.btn} onClick={apply}>
          Get started now
        </Button>
      </div>
      <img
        className={styles.img}
        src={landingSecurityImg}
        alt="suprised man pointing with his index finger"
      />
    </section>
  );
};

export { Security };
