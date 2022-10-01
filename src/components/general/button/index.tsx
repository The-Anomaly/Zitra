import * as React from "react";
import styles from "./styles.module.css";

interface ButtonProps {
  children: any;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`${styles.btn} ${className}`}
    >
      {children}
    </button>
  );
};

export { Button };
