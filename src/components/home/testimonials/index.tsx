import { SmallZigzag2 } from "assets";
import * as React from "react";
import styles from "./styles.module.css";

const Testimonials = () => {
  return (
    <section className={`container ${styles.testimonialsContainer}`}>
      <h5 className={styles.ttl}>
        Hear what our clients have to say about us{" "}
        <SmallZigzag2 className={styles.zigzag} />{" "}
      </h5>
      <div className={styles.vidWrap}></div>
    </section>
  );
};
export { Testimonials };
