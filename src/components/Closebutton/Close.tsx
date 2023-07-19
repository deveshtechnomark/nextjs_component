import React from "react";
import styles from "./Close.module.scss";
import { Tooltip } from "../Tooltip/Tooltip";

const Close: React.FC = () => {
  return (
    <>
      <Tooltip position="top" content="Close">
        <div className={styles.main}>
          <button
            className={`${styles.fromMiddle} ${styles.circle} ${styles.scaleUp}`}
            data-animation="minimize"
          >
            <span></span>
          </button>
        </div>
      </Tooltip>
    </>
  );
};

export { Close };