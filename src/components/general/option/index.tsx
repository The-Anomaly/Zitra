import * as React from "react";
import { Button } from "../button";
import styles from "./styles.module.css";

export interface OptionProps {
  title: string;
  text1?: string;
  text2: string;
  image: string;
  id?: string;
  apply: () => void;
}

const Option: React.FC<OptionProps> = ({
  text1,
  text2,
  title,
  image,
  id,
  apply,
}) => {
  return (
    <>
      <section id={id} className={`container ${styles.optionContainer}`}>
        <div className={styles.txtSec}>
          <h2 className={styles.ttl}>{title}</h2>
          {text1 ? <p className={styles.txt1}>{text1}</p> : ""}
          <p className={styles.txt2}>{text2}</p>
          <Button className={styles.btn} onClick={apply}>
            Apply Now
          </Button>
        </div>
        <img className={styles.img} src={image} alt="" />
      </section>
    </>
  );
};

export { Option };
