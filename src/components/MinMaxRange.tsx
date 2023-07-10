import React, { useState, ChangeEvent } from "react";
import styles from "./range.module.scss";

interface MinMaxRangeProps {
  minValue?: number;
  maxValue?: number;
  minRange: number;
  maxRange: number;
  number?: boolean;
}

const MinMaxRange: React.FC<MinMaxRangeProps> = ({
  minValue,
  maxValue,
  minRange,
  maxRange,
  number,
}) => {
  const gap = (maxRange - minRange) / 10;

  const [minValueRange, setMinValueRange] = useState<number>(minRange);
  const [maxValueRange, setMaxValueRange] = useState<number>(maxRange);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "min") {
      if (maxValueRange - Number(value) < gap) {
        setMinValueRange(maxValueRange - gap);
      } else {
        setMinValueRange(Number(value));
      }
    } else {
      if (Number(value) - minValueRange < gap) {
        setMaxValueRange(minValueRange + gap);
      } else {
        setMaxValueRange(Number(value));
      }
    }
  };

  const progressStyle = {
    left: `${((minValueRange - minValue) / (maxValue - minValue)) * 100}%`,
    right: `${
      100 - ((maxValueRange - minValue) / (maxValue - minValue)) * 100
    }%`,
  };

  const numbers = Math.ceil((maxValue - minValue) / 10);

  let totalSteps = Array.apply(null, new Array(11)).map(function (_el, i) {
    return i++;
  });

  return (
    <div className={styles.container}>
      <div className={styles.range_slider}>
        <div className={styles.progress} style={progressStyle}></div>
        <input
          type="range"
          name="min"
          min={minValue}
          max={maxValue}
          value={minValueRange}
          onChange={handleInputChange}
        />
        <input
          type="range"
          name="max"
          min={minValue}
          max={maxValue}
          value={maxValueRange}
          onChange={handleInputChange}
        />
      </div>
      {number && (
        <div
          className={`flex justify-between items-center ml-2 mt-1 text-[#6E6D7A] text-sm`}
        >
          {totalSteps.map((i, index) => (
            <span key={index}>{minValue + index * numbers}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export { MinMaxRange };
