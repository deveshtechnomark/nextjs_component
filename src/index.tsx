import React, {
  useState,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
} from "react";
import "./index.css";
import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsCheckLg,
  BsDot,
} from "react-icons/bs";
import { Typography } from "Typography";
import "Typography/dist/index.css";

interface PasswordProps {
  label?: string;
  required?: boolean;
  className?: string;
  validate?: boolean;
  errorMessage?: string;
  minlength?: string;
  maxlength?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  form?: string;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  size?: number;
  value?: string;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onInput?: (event: Event) => void;
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
  onMouseDown?: (event: MouseEvent<HTMLInputElement>) => void;
  onMouseUp?: (event: MouseEvent<HTMLInputElement>) => void;
  onMouseEnter?: (event: MouseEvent<HTMLInputElement>) => void;
  onMouseLeave?: (event: MouseEvent<HTMLInputElement>) => void;
  onMouseOver?: (event: MouseEvent<HTMLInputElement>) => void;
  onMouseOut?: (event: MouseEvent<HTMLInputElement>) => void;
  onInvalid?: (event: Event) => void;
  onReset?: (event: Event) => void;
  onSubmit?: (event: Event) => void;
  props?: any;
}

const Password: React.FC<PasswordProps> = ({
  label,
  required,
  className,
  onBlur,
  validate,
  errorMessage = "This is a required field!",
  props,
}) => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [err, setErr] = useState(false);
  const [focus, setFocus] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorMes, setErrorMes] = useState("");
  const [data, setData] = useState("");

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newData = e.target.value;
    setPassword(newData);
    setData(newData);
    setOpen(true);
    if (err) {
      setErr(false);
    }
  };

  interface RequirementItem {
    regex: RegExp;
    index: number;
  }

  const requirements: RequirementItem[] = [
    { regex: /[^A-Za-z0-9]/, index: 0 },
    { regex: /[A-Z]/, index: 1 },
    { regex: /[a-z]/, index: 2 },
    { regex: /[0-9]/, index: 3 },
    { regex: /\s/, index: 4 },
    { regex: /.{8,}/, index: 5 },
  ];

  const requirementList = [
    "1 Special Character",
    "1 Uppercase",
    "1 Lowercase",
    "1 Number",
    "No Space Allowed",
    "Minimum 8 Characters",
  ];

  const validatePassword = (): JSX.Element[] => {
    let isAllValid = true;

    const requirementsList = requirements.map((item) => {
      let isValid;
      if (item.index === 4 && password.length > 0) {
        isValid = !item.regex.test(password);
      } else {
        isValid = item.regex.test(password);
      }
      const requirementItemClass = isValid ? "valid" : "";

      if (!isValid) {
        isAllValid = false;
      }

      return (
        <Typography type="h6">
          <li
            key={item.index}
            className={`${requirementItemClass} flex items-center justify-left text-xs passwordsm:text-base passwordmd:text-lg`}
          >
            {isValid ? (
              <BsCheckLg className="text-teal-500 ml-[5px] my-[6px]" />
            ) : (
              <BsDot className="text-gray-500 text-3xl" />
            )}
            <span
              className={`${
                isValid &&
                "line-through ml-[7px] decoration-gray-500 text-gray-500"
              }`}
            >
              {requirementList[item.index]}
            </span>
          </li>
        </Typography>
      );
    });

    if (isAllValid) {
      setOpen(false);
    }

    return requirementsList;
  };

  const validateInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setErr(true);
      setOpen(false);
      setErrorMes(errorMessage);
    } else if (!e.target.value.match(/[^A-Za-z0-9]/)) {
      setErr(true);
      setOpen(false);
      setErrorMes("Please fill details according to the requirements.");
    } else if (!e.target.value.match(/[A-Z]/)) {
      setErr(true);
      setOpen(false);
      setErrorMes("Please fill details according to the requirements.");
    } else if (!e.target.value.match(/[a-z]/)) {
      setErr(true);
      setOpen(false);
      setErrorMes("Please fill details according to the requirements.");
    } else if (!e.target.value.match(/[0-9]/)) {
      setErr(true);
      setOpen(false);
      setErrorMes("Please fill details according to the requirements.");
    } else if (e.target.value.match(/\s/)) {
      setErr(true);
      setOpen(false);
      setErrorMes("Please fill details according to the requirements.");
    } else if (!e.target.value.match(/.{8,}/)) {
      setErr(true);
      setOpen(false);
      setErrorMes("Please fill details according to the requirements.");
    } else {
      setErr(false);
    }
  };

  const handleFocus = () => {
    setFocus(true);
    setOpen(true);
  };

  const getPasswordStrength = () => {
    let strength = "password";
    if (
      data.match(/[^A-Za-z0-9]/) &&
      data.match(/[A-Z]/) &&
      data.match(/[a-z]/) &&
      data.match(/[0-9]/) &&
      !data.match(/\s/) &&
      data.match(/.{8,}/)
    ) {
      strength = "Excellent";
    } else if (
      data.match(/[A-Z]/) &&
      data.match(/[a-z]/) &&
      data.match(/[0-9]/)
    ) {
      strength = "Good";
    } else if (password.length >= 3 && data.match(/[a-z]/)) {
      strength = "Too weak";
    }
    return strength;
  };

  return (
    <div className="relative flex flex-col text-sm sm:text-base mb-6 w-full">
      {label && (
        <label
          className={`${
            err
              ? "text-error"
              : focus
              ? "text-textExcellent"
              : "text-defaultColor"
          }`}
        >
          <Typography type="label">
            {label}
            {required && "*"}
          </Typography>
        </label>
      )}
      <div
        className={`${
          !err &&
          "relative inline-block before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-textExcellent before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full"
        }`}
      >
        <Typography type="h6">
          <input
            className={`${className} py-2 px-3 border-b outline-none w-full ${
              err
                ? "border-error"
                : focus
                ? "border-textExcellent"
                : "border-defaultColor"
            }`}
            type={type}
            id="password-input"
            value={password}
            onChange={handlePasswordChange}
            onBlur={onBlur ? onBlur : validate ? validateInput : undefined}
            onFocus={handleFocus}
            {...props}
          />
        </Typography>
      </div>
      {type === "password" ? (
        <span
          className={`absolute top-9 right-1 text-md sm:text-lg ${
            err ? "text-error" : "text-textDefault"
          }`}
          onClick={() => setType("text")}
        >
          <BsFillEyeSlashFill />
        </span>
      ) : (
        <span
          className={`absolute top-9 right-1 text-md sm:text-lg ${
            err ? "text-error" : "text-textDefault"
          }`}
          onClick={() => setType("password")}
        >
          <BsFillEyeFill />
        </span>
      )}

      {open && (
        <>
          <div className="absolute bottom-[90px] left-0 bg-white shadow-2xl py-4 pl-2 pr-4 text-[16px] sm-text-[14px] w-fit">
            <ul className="requirement-list">{validatePassword()}</ul>
          </div>
          <span className="w-2 h-2 bg-white absolute bottom-[85px] left-[20px] rotate-[45deg]"></span>
        </>
      )}

      {password && (
        <div className="absolute top-[60px] mt-2 flex items-center">
          <div className="relative w-[150px] sm:w-[180px] h-[5px] rounded-lg bg-textDefault">
            <span
              className={`absolute rounded-l-lg h-[5px] ${
                data.match(/[^A-Za-z0-9]/) &&
                data.match(/[A-Z]/) &&
                data.match(/[a-z]/) &&
                data.match(/[0-9]/) &&
                !data.match(/\s/) &&
                data.match(/.{8,}/)
                  ? "bg-textExcellent w-[150px] sm:w-[180px] rounded-lg"
                  : data.match(/[A-Z]/) &&
                    data.match(/[a-z]/) &&
                    data.match(/[0-9]/)
                  ? "bg-textGood w-[85px] sm:w-[100px]"
                  : password.length >= 3 && data.match(/[a-z]/)
                  ? "bg-textWeek  w-[30px] sm:w-[45px]"
                  : "bg-textDefault"
              }`}
            ></span>
          </div>
          <span className="ml-4 text-xs sm:text-sm">
            {getPasswordStrength()}
          </span>
        </div>
      )}
      {err && (
        <Typography type="h6">
          <span
            className={`absolute ${
              password ? "top-[90px]" : "top-[65px]"
            } text-error`}
          >
            {errorMes}
          </span>
        </Typography>
      )}
    </div>
  );
};

export { Password };
