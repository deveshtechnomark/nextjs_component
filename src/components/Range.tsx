import React, { useState, ChangeEvent } from "react";
import styles from "./index.module.scss";
import "./index.css";

interface RangeSelectorProps {
  dot?: boolean;
  minValue?: number;
  maxValue?: number;
  number?: boolean;
}

const genSlideStyle = (value: number) => {
  return {
    point: {
      left: `calc(${value * 10}% - ${1 * value}px)`,
    },
    range: {
      width: `${value * 10}%`,
    },
  };
};

const Range: React.FC<RangeSelectorProps> = ({
  dot,
  minValue = 0,
  maxValue = 100,
  number,
}) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const slideStyle = genSlideStyle(value);

  const numbers = Math.ceil((maxValue - minValue) / 10);

  let totalSteps = Array.apply(null, new Array(11)).map(function (el, i) {
    return i++;
  });

  return (
    <div>
      <div className={`${styles.range} ${dot && styles.range_dot}`}>
        {dot && (
          <>
            <span className={styles.bullet} />
            <span className={styles.bullet_1} />
            <span className={styles.bullet_2} />
            <span className={styles.bullet_3} />
            <span className={styles.bullet_4} />
            <span className={styles.bullet_5} />
            <span className={styles.bullet_6} />
            <span className={styles.bullet_7} />
            <span className={styles.bullet_8} />
          </>
        )}
        <span className={styles.range_value} style={slideStyle.range} />
        <span className={styles.circle} style={slideStyle.point} />
        <input
          className={styles.range_slide}
          name="range"
          type="range"
          min=""
          max="10"
          value={value}
          step="1"
          onChange={handleChange}
        />
      </div>
      {number && (
        <div
          className={`${styles.range_slide} flex justify-between items-center ml-2 mt-1 text-[#6E6D7A] text-sm`}
        >
          {totalSteps.map((i, index) => (
            <span key={index}>{minValue + index * numbers}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export { Range };
