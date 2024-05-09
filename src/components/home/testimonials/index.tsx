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
      <div className={styles.videos}>
        <div>
          <div className={styles.vidWrap}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5q9GrtTbMcI?si=ZF34Ca45VcCVGVHQ"
              title="YouTube video player"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <p className={styles.vidTtl}>Customer Reviews</p>
          <p className={styles.vidTxt}>
            At Zitra Investments, we're committed to helping our customers
            achieve success.
          </p>
        </div>
        <div>
          <div className={styles.vidWrap}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/pVTzN69moVA?si=jR6Spy3Zh_TNalVl"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <p className={styles.vidTtl}>CEO’s Interview</p>
          <p className={styles.vidTxt}>
            Our CEO gives a deep dive into why you should invest with Zitra
          </p>
        </div>
        <div>
          <div className={styles.vidWrap}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Jbt04CRi6U4?si=3lmcBFpK2OzznYqb"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <p className={styles.vidTtl}>Investor’s Forum</p>
          <p className={styles.vidTxt}>
            Recap of Zitra Investor's Forum: Key Insights and Highlights
          </p>
        </div>
      </div>
    </section>
  );
};
export { Testimonials };
