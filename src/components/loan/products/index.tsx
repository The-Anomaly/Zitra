import { raizImg, sharpalyImg } from "assets";
import { Button } from "components/general";
import * as React from "react";
import styles from "./styles.module.css";

interface ProductsProps {
  raiz: () => void;
  confam: () => void;
}

const Products: React.FC<ProductsProps> = ({ raiz, confam }) => {
  return (
    <>
      <section id="raiz" className={styles.productBg}>
        <div className={`container ${styles.productContainer}`}>
          <div className={styles.txtSec}>
            <h2 className={styles.ttl}>Zitra Raiz</h2>
            <p className={styles.txt}>
              We offer quick payday emergency loans without collateral. Zitra
              Raiz is the most convenient with low-interest rate, exceptional
              customer services, quick turnaround time, and we guarantee you
              peace of mind. No HIDDEN charges!
              <br />
              Raiz your account and surprise your emergencies.
            </p>
            <div className={styles.pointList}>
              <div className={styles.point}>
                <p className={styles.pointTtl}>Instant cash</p>
                <p className={styles.pointTxt}>
                  Access loans of up to 5 million Naira without collateral
                </p>
              </div>
              <div className={styles.point}>
                <p className={styles.pointTtl}>
                  Convinient terms and repayment tenor
                </p>
                <p className={styles.pointTxt}>
                  Repay conveniently between 3-12 months. No stress on your
                  finances
                </p>
              </div>
              <div className={styles.point}>
                <p className={styles.pointTtl}>Competitive rates</p>
                <p className={styles.pointTxt}>
                  Relax! We’ve got you covered. Our rates are friendly and the
                  best out there, (you can ask around)
                </p>
              </div>
              <div className={styles.point}>
                <p className={styles.pointTtl}>No hidden charges</p>
                <p className={styles.pointTxt}>
                  Hidden charges? No way. Our offer is easy for everyone to
                  understand
                </p>
              </div>
            </div>
            <Button onClick={raiz}>Apply now</Button>
          </div>
          <div className={styles.imgSec}>
            <img className={styles.img} src={raizImg} />
          </div>
        </div>
      </section>
      <section id="confam" className={styles.productBg}>
        <div
          className={`container ${styles.productContainer} ${styles.reverse}`}
        >
          <div className={styles.txtSec}>
            <h2 className={styles.ttl}>Zitra Confam</h2>
            <p className={styles.txt}>
              Zitra Confam gives businesses quick, easy and flexible access to
              business loans tailored to their business requirements. We
              understand how important it is to keep your business afloat, our
              rates are highly competitive, and we have a quick turnaround time.
            </p>
            <div className={styles.pointList}>
              <p className={styles.txt2}>
                A lot of businessess choose us because we offer:
              </p>
              <div className={styles.point}>
                <p className={styles.pointTtl}>Quick turnaround time</p>
              </div>
              <div className={styles.point}>
                <p className={styles.pointTtl}>Competitive interest rates</p>
              </div>
              <div className={styles.point}>
                <p className={styles.pointTtl}>Easy documentation</p>
              </div>
              {/* <div className={styles.point}>
                <p className={styles.pointTtl}>
                  No business registration required
                </p>
              </div> */}
              <div className={styles.point}>
                <p className={styles.pointTtl}>Flexible repayment structure</p>
              </div>
            </div>
            <Button onClick={confam}>Apply now</Button>
          </div>
          <div className={styles.imgSec}>
            <img className={styles.img} src={sharpalyImg} />
          </div>
        </div>
      </section>
    </>
  );
};

export { Products };
