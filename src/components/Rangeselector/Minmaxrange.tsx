import React, { useState, ChangeEvent } from "react";
import styles from "./Minmaxrange.module.scss";

interface MinMaxRangeProps {
    variant?: string;
    minValue: number;
    maxValue: number;
    minRange: number;
    maxRange: number;
    number?: boolean;
    gap?: number;
    getValue: (arg1: number, arg2: number) => void;
}

const MinMaxRange: React.FC<MinMaxRangeProps> = ({
    variant = "dot",
    minValue = 0,
    maxValue = 100,
    minRange,
    maxRange,
    number,
    getValue,
    gap = 10,
}) => {
    const gapValue = (maxRange - minRange) / gap;

    const [minValueRange, setMinValueRange] = useState<number>(minRange);
    const [maxValueRange, setMaxValueRange] = useState<number>(maxRange);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "min") {
            if (maxValueRange - Number(value) < gapValue) {
                setMinValueRange(maxValueRange - gapValue);
            } else {
                setMinValueRange(Number(value));
            }
        } else {
            if (Number(value) - minValueRange < gapValue) {
                setMaxValueRange(minValueRange + gapValue);
            } else {
                setMaxValueRange(Number(value));
            }
        }
    };
    getValue(minValueRange, maxValueRange);

    const progressStyle = {
        left: `${((minValueRange - minValue) / (maxValue - minValue)) * 100}%`,
        right: `${100 - ((maxValueRange - minValue) / (maxValue - minValue)) * 100
            }%`,
    };

    const numbers = Math.ceil((maxValue - minValue) / gap);

    let totalSteps = Array.apply(null, new Array(gap + 1)).map(function (_el, i) {
        return i++;
    });

    return (
        <div className={styles.container}>
            <div className={styles.range_slider}>
                <div
                    className={`flex items-center justify-between w-full absolute ${variant === "dot" && "top-[1.2px]"
                        }`}
                >
                    {totalSteps.map((i, index) => (
                        <span
                            className={`${variant === "line" ? `${styles.line}` : `${styles.dot}`
                                }`}
                            key={index}
                        />
                    ))}
                </div>
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