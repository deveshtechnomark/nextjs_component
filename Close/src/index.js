import React from "react";
import styles from "./styles.module.css";

const Close = () => {
  return (
    <>
      <div className={styles.circCont}>
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
