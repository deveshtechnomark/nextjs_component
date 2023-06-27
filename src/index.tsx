import React from "react";
import styles from "./index.module.scss";
import { Tooltip } from "tooltip";
import "tooltip/dist/index.css";

const Close: React.FC = () => {
  return (
    <>
      <Tooltip position="top" text="Close">
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
