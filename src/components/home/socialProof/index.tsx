import {
  appzoneLogo,
  bidellusLogo,
  onepipeLogo,
  PagaLogo,
  primepayLogo,
  providusLogo,
  SuntrustLogo,
  youverifyLogo,
  SmallZigzag,
  remitaLogo,
  krediLogo,
} from "assets";
import * as React from "react";
import styles from "./styles.module.css";

const SocialProof = () => {
  return (
    <section className={`container ${styles.proofContainer}`}>
      <h2 className={styles.ttl}>
        Brands that TRUST us <SmallZigzag className={styles.zigzag} />
      </h2>
      <div className={styles.logoWrap}>
        <PagaLogo className={styles.logo1} />
        <img className={styles.logo2} src={providusLogo} alt="" />
        <SuntrustLogo className={styles.logo3} />
        <img className={styles.logo4} src={appzoneLogo} alt="" />
        <img className={styles.logo9} src={remitaLogo} alt="" />
        <img className={styles.logo5} src={youverifyLogo} alt="" />
        <img className={styles.logo6} src={primepayLogo} alt="" />
        <img className={styles.logo7} src={onepipeLogo} alt="" />
        <img className={styles.logo10} src={krediLogo} alt="" />
        <img className={styles.logo8} src={bidellusLogo} alt="" />
      </div>
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          <div className={styles.slide}>
            <PagaLogo className={styles.logo1} />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo2} src={providusLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <SuntrustLogo className={styles.logo3} />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo4} src={appzoneLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo9} src={remitaLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo5} src={youverifyLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo6} src={primepayLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo7} src={onepipeLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo10} src={krediLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo8} src={bidellusLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <PagaLogo className={styles.logo1} />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo2} src={providusLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <SuntrustLogo className={styles.logo3} />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo4} src={appzoneLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo9} src={remitaLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo5} src={youverifyLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo6} src={primepayLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo7} src={onepipeLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo10} src={krediLogo} alt="" />
          </div>
          <div className={styles.slide}>
            <img className={styles.logo8} src={bidellusLogo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { SocialProof };
