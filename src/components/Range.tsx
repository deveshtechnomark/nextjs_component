import React, { useState, ChangeEvent } from "react";
import styles from "./index.module.scss";
import "./index.css";

interface RangeSelectorProps {
  variant?: string;
  minRange?: number;
  maxRange?: number;
  gap?: number;
  number?: boolean;
  getValue: (arg1: number) => void;
}

const genSlideStyle = (value: number, gap, minRange, maxRange, getValue) => {
  const numbers = Math.ceil((maxRange - minRange) / gap);
  const x = minRange + value * numbers;
  getValue(x);
  return {
    point: {
      left: `calc(${value * (100 / gap)}% - ${1 * value}px)`,
    },
    range: {
      width: `${value * (100 / gap)}%`,
    },
  };
};

const Range: React.FC<RangeSelectorProps> = ({
  variant = "dot",
  minRange = 0,
  maxRange = 100,
  number,
  gap = 10,
  getValue,
}) => {
  const [value, setValue] = useState<number>(0);

  const slideStyle = genSlideStyle(value, gap, minRange, maxRange, getValue);

  const numbers = Math.ceil((maxRange - minRange) / gap);

  let totalSteps = Array.apply(null, new Array(gap + 1)).map(function (el, i) {
    return i++;
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div>
      <div className={`${styles.range}`}>
        <div
          className={`flex items-center justify-between w-full absolute ${
            variant === "dot" && "top-[1.2px]"
          }`}
        >
          {totalSteps.map((i, index) => (
            <span
              className={`${
                variant === "line" ? `${styles.line}` : `${styles.dot}`
              }`}
              key={index}
            />
          ))}
        </div>
        <span className={styles.range_value} style={slideStyle.range} />
        <span className={styles.circle} style={slideStyle.point} />
        <input
          className={styles.range_slide}
          name="range"
          type="range"
          min=""
          max={gap}
          value={value}
          step="1"
          onChange={handleChange}
        />
      </div>
      {number && (
        <div
          className={`${styles.range_slide} flex justify-between items-center mt-1 text-[#6E6D7A] text-sm`}
        >
          {totalSteps.map((i, index) => (
            <span key={index}>{minRange + index * numbers}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export { Range };
