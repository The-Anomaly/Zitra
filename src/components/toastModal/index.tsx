import * as React from "react";
import styles from "./styles.module.css";
import { useOutsideAlerter } from "helpers";
import { MenuClose } from "assets";

interface ToastProps {
  show: boolean;
  closeModal: () => void;
  type: boolean;
  title: string;
  text: string;
}

const Toast: React.FC<ToastProps> = ({
  show,
  closeModal,
  type,
  title,
  text,
}) => {
  React.useEffect(() => {
    if (show) {
      setTimeout(() => {
        closeModal();
      }, 10000);
    }
  }, [show]);

  if (!show) return null;

  return (
    <aside
      className={`${styles.body} ${type ? styles.success : styles.failure}`}
    >
      <MenuClose
        onClick={closeModal}
        className={styles.closeBtn}
        role="button"
      />
      <p className={styles.ttl}>{title}</p>
      <p className={styles.txt}>{text}</p>
    </aside>
  );
};

export { Toast };
