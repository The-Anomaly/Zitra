import { MenuClose } from "assets";
import { Button } from "components";
import * as React from "react";
import styles from "./styles.module.css";

const useOutsideAlerter = (ref: any, closeFunction: () => any) => {
  React.useEffect(() => {
    /**
     * Hide if clicked on outside of element
     */
    const handleClickOutside = (event: { target: any }) => {
      if (ref.current && !ref.current.contains(event.target)) {
        closeFunction && closeFunction();
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

interface ApplyProps {
  show: boolean;
  closeModal: () => void;
  submit: (data) => void;
}

const ApplyNowUI: React.FC<ApplyProps> = ({ show, closeModal, submit }) => {
  const modalBody = React.useRef(null);
  useOutsideAlerter(modalBody, closeModal);

  if (!show) return null;

  return (
    <aside className={styles.dialog} role={"dialog"}>
      <div ref={modalBody} className={styles.body}>
        <MenuClose
          onClick={closeModal}
          className={styles.closeBtn}
          role="button"
        />
        <p className={styles.tag}>Lets get you started</p>
        <h1 className={styles.ttl}>PROVIDE US WITH YOUR DETAILS</h1>
        <p className={styles.txt}>... we will get to you in a snap!</p>
        <form className={styles.contactForm}>
          <div className={`${styles.inputWrap} ${styles.halfWidth}`}>
            <label>First name</label>
            <input type={"text"} />
          </div>
          <div className={`${styles.inputWrap} ${styles.halfWidth}`}>
            <label>Last name</label>
            <input type={"text"} />
          </div>
          <div className={styles.inputWrap}>
            <label>Phone number</label>
            <input type={"tel"} />
          </div>
          <div className={styles.inputWrap}>
            <label>Email Address</label>
            <input type={"text"} />
          </div>
          <Button className={styles.contactBtn} onClick={() => {}}>
            Get started
          </Button>
        </form>
      </div>
    </aside>
  );
};

export { ApplyNowUI };
