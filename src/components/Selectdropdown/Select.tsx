import React, { useEffect, useRef, useState } from "react";
import { Toast } from "../Toast/Toast";
import { Button } from "../Button/Button";
import { Text } from "../Textfield/Text";

interface Option {
  value: any;
  label: string;
}

interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  options: Option[];
  type?: string;
  label?: string;
  className?: string;
  search?: boolean;
  validate?: boolean;
  defaultValue?: any;
  value?: any;
  avatar?: boolean;
  avatarName?: string;
  avatarImgUrl?: string;
  errorMessage?: string;
  hasError?: boolean;
  getValue: (value: any) => void;
  getError: (arg1: boolean) => void;
  supportingText?: string;
  errorClass?: string;
  addDynamicForm?: boolean;
  addDynamicForm_Label?: string;
  addDynamicForm_Placeholder?: string;
  addDynamicForm_ButtonLabel?: String;
  addDynamicForm_ButtonLabelEdit?: String;
  onChangeText?: (value: any, label: any) => void;
  onClickButton?: () => void;
}

const Select: React.FC<SelectProps> = ({
  id,
  options,
  getValue,
  type,
  label,
  className,
  search = false,
  validate,
  defaultValue,
  value,
  errorMessage = "This is a required field.",
  supportingText,
  hasError,
  getError,
  errorClass,
  addDynamicForm,
  addDynamicForm_Label,
  addDynamicForm_Placeholder,
  addDynamicForm_ButtonLabel,
  addDynamicForm_ButtonLabelEdit,
  onClickButton,
  onChangeText,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [inputLabel, setInputLabel] = useState("");
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    defaultValue
      ? options.find((option) => option.value === defaultValue) ?? null
      : null
  );

  const [editing, setEditing] = useState(false);
  const [textName, setTextName] = useState("");
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    if (validate) {
      setErrMsg(errorMessage);
      setError(hasError);
      hasError && getError(false);
      defaultValue && setInputValue(defaultValue);
    }
  }, [errorMessage, hasError, validate, defaultValue]);

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  const handleToggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();
    if (validate && inputValue === "") {
      setError(true);
      setErrMsg("Please select a valid option.");
    } else {
      setError(false);
      setErrMsg("");
      setInputValue(inputValue);
    }
  };

  const handleSelect = (value: any) => {
    setSelectedOption({ label, value });
    setInputValue(label);
    setOpen(false);

    if (label.trim() === "") {
      setError(true);
      getError(false);
      setErrMsg("Please select a valid option.");
    } else {
      setError(false);
      setErrMsg("");
      getValue(value);
      getError(true);
    }
  };

  const handleBlur = () => {
    if (validate) {
      if (inputValue === "") {
        setError(true);
        setErrMsg("Please select a valid option.");
        getError(false);
      } else {
        setError(false);
        setErrMsg("");
        getError(true);
      }
    }
  };

  const handleSubmit = () => {
    onChangeText(textValue, inputLabel);
    if (onClickButton) {
      onClickButton();
    }
  };

  useEffect(() => {
    setOpen(editing);
  }, [editing]);

  console.log("Open : ", open);
  console.log("Editing : ", editing);

  return (
    <>
      <Toast position="top_right" />

      <div
        className={`relative font-medium flex-row border-b  ${
          inputValue
            ? "border-primary min-w-full"
            : error
            ? "border-defaultRed min-w-full"
            : "border-lightSilver min-w-full hover:border-primary transition-colors duration-300"
        } ${className}`}
        ref={selectRef}
      >
        {label && (
          <label
            className={`text-[14px] font-normal w-full ${
              open
                ? "text-primary"
                : inputValue
                ? "text-primary"
                : error
                ? "text-defaultRed"
                : "text-slatyGrey"
            }`}
            htmlFor={id}
          >
            {label}
            {validate && <span className="text-defaultRed">&nbsp;*</span>}
          </label>
        )}

        <div className="flex flex-row items-center relative mb-0 w-full">
          <input
            id={id}
            onBlur={handleBlur}
            onClick={handleToggleOpen}
            onChange={handleInputChange}
            readOnly={!search}
            placeholder={"Please select"}
            value={
              defaultValue !== null && defaultValue !== undefined
                ? options.find((option) => option.value === defaultValue)
                    ?.label ?? "Please select"
                : selectedOption
                ? selectedOption.label
                : defaultValue
                ? options.find((option) => option.value === defaultValue)
                    ?.label ?? ""
                : inputValue.length > 25
                ? inputValue.substring(0, 20) + "..."
                : inputValue
            }
            autoComplete="off"
            className={`flex-grow outline-none bg-white text-darkCharcoal text-[14px] font-normal w-full ${
              open ? "text-primary" : ""
            } ${!open ? "cursor-pointer" : "cursor-default"} ${
              !open ? "placeholder-darkCharcoal" : "placeholder-primary"
            }`}
          />

          <div
            onClick={handleToggleOpen}
            className={`text-[1.5rem] text-darkCharcoal m-2 cursor-pointer ${
              open ? "rotate-180" : ""
            }`}
          >
            <svg
              className="w-3 h-3 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
              />
            </svg>
          </div>
        </div>

        <ul
          className={`absolute group z-10 h-56  bg-pureWhite mt-[1px] w-full shadow-md transition-transform ${
            open
              ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500"
              : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500"
          } ${open ? "ease-out" : ""}`}
        >
          <div className="relative flex flex-col h-full overflow-y-auto">
            {options.length > 0 &&
              options.map((option, index) => (
                <li
                  key={index}
                  className={`p-[10px] group/item text-[14px] hover:bg-whiteSmoke  font-normal cursor-pointer flex flex-row items-center ${
                    option.value === inputValue ? "bg-whiteSmoke" : ""
                  } ${
                    search && !option.label.toLowerCase().startsWith(inputValue)
                      ? "hidden"
                      : ""
                  }`}
                  onClick={() => {
                    if (option.label !== inputValue) {
                      handleSelect(option.value);
                    }
                  }}
                >
                  {option.label}

                  {addDynamicForm && (
                    <a className="group/edit invisible hover:bg-slate-200 group-hover/item:visible ...">
                      <div className="absolute flex flex-row right-0 mr-2 justify-end items-end  ... ">
                        <svg
                          className="w-5 h-5 text-gray-800 float-right cursor-pointer"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 21 21"
                          onClick={(event) => {
                            event.stopPropagation();
                            setTextValue(option.value);
                            setInputLabel(option.label);
                            onChangeText(option.value, option.label);
                            setEditing(true);
                          }}
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"
                          />
                        </svg>

                        <svg
                          className="w-5 h-5 text-gray-800 ml-[8px]"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 20"
                          onClick={() => {
                            onChangeText(option.value, option.label);
                          }}
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
                          />
                        </svg>
                      </div>
                    </a>
                  )}
                </li>
              ))}
          </div>
          {addDynamicForm && (
            <li className="fixed bottom-0 w-full">
              <div className="bg-gray-100 flex flex-row justify-between ">
                <div className="m-2 w-full">
                  <Text
                    label={addDynamicForm_Label}
                    placeholder={addDynamicForm_Placeholder}
                    className="w-full"
                    value={editing ? inputLabel : textName}
                    getValue={(e) => {
                      if (editing) {
                        setOpen(true);
                        setInputLabel(e);
                        onChangeText(textValue, e);
                      } else {
                        setTextName(e);
                        onChangeText(textValue, e);
                      }
                    }}
                    getError={(e) => e}
                  />
                </div>
                <div className="m-5">
                  <Button
                    type="button"
                    variant="btn-primary"
                    className="rounded-[4px] !h-auto"
                    onClick={handleSubmit}
                  >
                    {editing
                      ? addDynamicForm_ButtonLabelEdit
                      : addDynamicForm_ButtonLabel}
                  </Button>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
      {!error && supportingText && (
        <span className="text-slatyGrey text-[12px] sm:text-[14px] -mt-[20px]">
          {supportingText}
        </span>
      )}
      {error && (
        <span
          className={`text-defaultRed text-[12px] sm:text-[14px] ${errorClass}`}
        >
          {errMsg}
        </span>
      )}
    </>
  );
};

export { Select };