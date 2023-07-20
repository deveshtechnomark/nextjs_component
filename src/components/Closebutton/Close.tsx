import React from "react";
import styles from "./Close.module.scss";

const Close: React.FC = () => {
  return (
    <>
      <div className={styles.main}>
        <button
          className={`${styles.fromMiddle} ${styles.circle} ${styles.scaleUp}`}
          data-animation="minimize"
        >
          <span></span>
        </button>
      </div>
    </>
  );
};

export { Close };