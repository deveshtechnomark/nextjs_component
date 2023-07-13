import React, {
  useState,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
} from "react";
import { Dot, Check, EyeOpen, EyeClose } from "./icons/icons";
import "./index.css"

interface PasswordProps {
  label?: string;
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
  getValue: (arg1: string) => void;
  hasError?: boolean;
  props?: any;
}

const Password: React.FC<PasswordProps> = ({
  label,
  className,
  onBlur,
  validate,
  errorMessage = "This is a required field!",
  getValue,
  hasError,
  props,
}) => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [err, setErr] = useState(false);
  const [focus, setFocus] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorMes, setErrorMsg] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    setErrorMsg(errorMessage);
    setErr(hasError);
  }, [hasError, errorMessage]);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newData = e.target.value;
    setPassword(newData);
    setData(newData);
    setOpen(true);
    if (err) {
      setErr(false);
    }
    getValue(newData);
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
        <li
          key={item.index}
          className={`${requirementItemClass} flex items-center justify-left text-darkCharcoal text-xs passwordsm:text-base passwordmd:text-lg`}
        >
          {isValid ? (
            <span className="ml-[5px] my-[6px] text-[18px] text-successColor">
              <Check />
            </span>
          ) : (
            <span className="text-3xl text-lightSilver">
              <Dot />
            </span>
          )}
          <span
            className={`${
              isValid &&
              "line-through ml-[7px] decoration-slatyGrey text-slatyGrey"
            }`}
          >
            {requirementList[item.index]}
          </span>
        </li>
      );
    });
    if (isAllValid) {
      setOpen(false);
    }
    return requirementsList;
  };

  const validateInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() === "") {
      setErr(true);
      setOpen(false);
      setErrorMsg(errorMessage);
    } else if (!e.target.value.match(/[^A-Za-z0-9]/)) {
      setErr(true);
      setOpen(false);
      setErrorMsg("Please fill details according to the requirements.");
    } else if (!e.target.value.match(/[A-Z]/)) {
      setErr(true);
      setOpen(false);
      setErrorMsg("Please fill details according to the requirements.");
    } else if (!e.target.value.match(/[a-z]/)) {
      setErr(true);
      setOpen(false);
      setErrorMsg("Please fill details according to the requirements.");
    } else if (!e.target.value.match(/[0-9]/)) {
      setErr(true);
      setOpen(false);
      setErrorMsg("Please fill details according to the requirements.");
    } else if (e.target.value.match(/\s/)) {
      setErr(true);
      setOpen(false);
      setErrorMsg("Please fill details according to the requirements.");
    } else if (!e.target.value.match(/.{8,}/)) {
      setErr(true);
      setOpen(false);
      setErrorMsg("Please fill details according to the requirements.");
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
    <div className="relative flex flex-col text-sm sm:text-base w-full">
      {label && (
        <label
          className={`${
            err ? "text-defaultRed" : focus ? "text-primary" : "text-slatyGrey"
          }`}
        >
          {label}
          {validate && "*"}
        </label>
      )}
      <div
        className={`${
          !err &&
          "relative inline-block before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full"
        }`}
      >
        <input
          className={`${className} py-1 px-3 border-b outline-none w-full pr-10 ${
            err
              ? "border-defaultRed"
              : focus
              ? "border-primary"
              : "border-lightSilver"
          }`}
          type={type}
          id="password-input"
          value={password}
          onChange={handlePasswordChange}
          onBlur={onBlur ? onBlur : validate ? validateInput : undefined}
          onFocus={handleFocus}
          {...props}
        />
      </div>
      {type === "password" ? (
        <span
          className={`absolute top-7 right-1 text-md sm:text-lg ${
            err ? "text-defaultRed" : "text-[#979797]"
          }`}
          onClick={() => setType("text")}
        >
          <EyeClose />
        </span>
      ) : (
        <span
          className={`absolute top-7 right-1 text-md sm:text-lg ${
            err ? "text-defaultRed" : "text-[#979797]"
          }`}
          onClick={() => setType("password")}
        >
          <EyeOpen />
        </span>
      )}

      {open && (
        <>
          <div
            className={`absolute ${
              err ? "bottom-[90px]" : "bottom-[70px]"
            } z-10 left-0 bg-pureWhite shadow-2xl py-4 pl-2 pr-4 text-[16px] sm-text-[14px] w-fit`}
          >
            <ul className="requirement-list">{validatePassword()}</ul>
          </div>
          <span
            className={`w-2 h-2 bg-pureWhite z-10 absolute ${
              err ? "bottom-[86px]" : "bottom-[66px]"
            } left-[20px] rotate-[45deg]`}
          ></span>
        </>
      )}

      {password && (
        <div className="mt-2 flex items-center">
          <div className="relative w-[150px] sm:w-[180px] h-[5px] rounded-lg bg-[#979797]">
            <span
              className={`absolute rounded-l-lg h-[5px] ${
                data.match(/[^A-Za-z0-9]/) &&
                data.match(/[A-Z]/) &&
                data.match(/[a-z]/) &&
                data.match(/[0-9]/) &&
                !data.match(/\s/) &&
                data.match(/.{8,}/)
                  ? "bg-successColor w-[150px] sm:w-[180px] rounded-lg"
                  : data.match(/[A-Z]/) &&
                    data.match(/[a-z]/) &&
                    data.match(/[0-9]/)
                  ? "bg-[#FFBF00] w-[85px] sm:w-[100px]"
                  : password.length >= 3 && data.match(/[a-z]/)
                  ? "bg-defaultRed  w-[30px] sm:w-[45px]"
                  : "bg-[#979797]"
              }`}
            ></span>
          </div>
          <span className="ml-4 text-xs sm:text-sm">
            {getPasswordStrength()}
          </span>
        </div>
      )}
      {err && (
        <span className={`text-defaultRed text-[12px] sm:text-[14px]`}>
          {errorMes}
        </span>
      )}
    </div>
  );
};

export { Password };
