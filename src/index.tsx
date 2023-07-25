import React from "react";
import styles from "./index.module.scss";

interface Props {
  variant?: string;
}

const Close: React.FC<Props> = ({ variant }) => {
  return (
    <>
      <div className={styles.main}>
        <button
          className={`${styles.fromMiddle} ${styles.circle} ${
            variant === "small" ? styles.small : styles.medium
          } ${styles.scaleUp}`}
          data-animation="minimize"
        >
          <span></span>
        </button>
      </div>
    </>
  );
};

export { Close };
