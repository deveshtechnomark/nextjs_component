import React, { useState, useEffect } from "react";
import "./Switch.css";

type SwitchProps = {
  checked?: boolean;
  disabled?: boolean;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  error?: boolean;
};

const Switch: React.FC<SwitchProps> = ({
  checked = false,
  disabled = false,
  primary = false,
  secondary = false,
  success = false,
  info = false,
  warning = false,
  error = false,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  useEffect(() => {
    if (error || primary || success || secondary || info || warning) {
      setIsChecked(true);
    }
  }, [primary, success, secondary, info, warning, error]);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
      />
      <div
        className={`w-11 h-6 bg-csSwitchGray ${
          disabled
            ? "cursor-not-allowed"
            : "cursor-pointer peer-focus:outline-none"
        } rounded-full ${
          isChecked ? "peer-checked:after:translate-x-full" : ""
        } peer-checked:after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-csSwitchWhite after:rounded-full after:h-5 after:w-5 after:transition-all  ${
          isChecked ? "peer-checked:bg-csSwitchDefalut" : ""
        } ${primary ? "peer-checked:bg-csSwitchDefalut" : ""} ${
          secondary ? "peer-checked:bg-csSwitchSecondary" : ""
        } ${success ? "peer-checked:bg-csSwitchSuccess" : ""} ${
          info ? "peer-checked:bg-csSwitchInfo" : ""
        } ${warning ? "peer-checked:bg-csSwitchWarning" : ""} ${
          error ? "peer-checked:bg-csSwitchError" : ""
        }`}
      ></div>
    </label>
  );
};

export { Switch };
