import React, { useEffect, useRef, useState } from "react";
import { Text } from "../Textfield/Text";
import { Button } from "../Button/Button";

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
  addDynamicForm_ButtonLabelAdd?: String;
  addDynamicForm_ButtonLabelEdit?: String;
  addDynamicForm_Icons_Edit?: any;
  addDynamicForm_Icons_Delete?: any;
  onChangeText?: (value: any, label: any) => void;
  onClickButton?: (value: any) => void;
  onDeleteButton?: (value: any) => void;
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
  addDynamicForm_ButtonLabelAdd,
  addDynamicForm_ButtonLabelEdit,
  onClickButton,
  onChangeText,
  onDeleteButton,
  addDynamicForm_Icons_Edit,
  addDynamicForm_Icons_Delete,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [inputLabel, setInputLabel] = useState("");
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    defaultValue
      ? options.find((option) => option.value === defaultValue)
      : null
  );

  const [editing, setEditing] = useState(false);
  const [textName, setTextName] = useState("");
  const [textValue, setTextValue] = useState("");
  const [textNameError, setTextNameError] = useState(false);
  const [textNameHasError, setTextNameHasError] = useState(false);

  useEffect(() => {
    if (validate) {
      setErrMsg(errorMessage);
      setError(hasError);
      hasError && getError(false);
      defaultValue !== "" && defaultValue!== null && setInputValue(defaultValue);
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
      setEditing(false);
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

    if (label === "") {
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
      } else if (inputValue === "" && open) {
        setError(false);
        setErrMsg("");
        getError(true);
      } else {
        setError(false);
        setErrMsg("");
        getError(true);
      }
    }
  };

  const handleSubmit = () => {
    textName.trim().length <= 0 && setTextNameHasError(true);
    inputLabel && setTextNameHasError(false);
    setErrMsg("");
    setError(false);
    if ((textName.trim().length > 0 || inputLabel != "") && onClickButton) {
      onClickButton(editing);
      cleartextData();
    }
  };

  const cleartextData = () => {
    setInputLabel("");
    setTextValue("");
    setTextName("");
  };
  const handleDeleteValue = (value: any) => {
    if (onDeleteButton) {
      onDeleteButton(value);
    }
  };

  useEffect(() => {
    setOpen(editing);
  }, [editing]);

  return (
    <>
      <div
        className={`relative font-medium w-full flex-row border-b ${
          open
            ? "border-primary"
            : inputValue
            ? "border-primary"
            : error
            ? "border-defaultRed"
            : "border-lightSilver hover:border-primary transition-colors duration-300"
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
              defaultValue !== null &&
              defaultValue !== undefined &&
              defaultValue !== ""
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
              open ? "" : "rotate-180"
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
          className={`absolute z-10 bg-pureWhite mt-[1px] shadow-md transition-transform w-full ${
            open
              ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500"
              : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500"
          } ${open ? "ease-out" : ""}`}
          style={{ width: selectRef.current?.clientWidth }}
        >
          <li className="relative flex flex-col max-h-40 overflow-y-auto">
            <ul>
              {options.length > 0 &&
                options.map((option, index) => (
                  <li
                    key={index}
                    className={`p-[10px] group/item text-[14px] hover:bg-whiteSmoke font-normal cursor-pointer flex flex-row items-center justify-between ${
                      option.value === inputValue ? "bg-whiteSmoke" : ""
                    } ${
                      search &&
                      !option.label.toLowerCase().startsWith(inputValue)
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

                    {(addDynamicForm || addDynamicForm_Icons_Edit) && (
                      <a className="group/edit invisible hover:bg-slate-100 group-hover/item:visible">
                        <div className="flex flex-row right-0 mr-2 justify-end items-end">
                          {addDynamicForm_Icons_Edit && (
                            <div
                              className="p-[2px]"
                              onClick={(event) => {
                                event.stopPropagation();
                                setTextValue(option.value);
                                setInputLabel(option.label);
                                onChangeText(option.value, option.label);
                                setEditing(true);
                              }}
                            >
                              <svg
                                className="w-4 h-4 float-right cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  d="M2.15425 16.0029H3.39077L12.6504 6.74329L11.4139 5.50674L2.15425 14.7664V16.0029ZM15.858 5.65869L12.4831 2.31451L13.7966 1.00106C14.0838 0.713895 14.4376 0.570312 14.8581 0.570312C15.2786 0.570312 15.6324 0.713895 15.9196 1.00106L17.1561 2.23759C17.4433 2.52475 17.592 2.87346 17.6023 3.28371C17.6125 3.69396 17.4741 4.04267 17.1869 4.32984L15.858 5.65869ZM1.55812 17.5029C1.30044 17.5029 1.08538 17.4167 0.912947 17.2442C0.740513 17.0718 0.654297 16.8567 0.654297 16.5991V14.5049C0.654297 14.3844 0.676088 14.2696 0.719672 14.1607C0.763255 14.0517 0.831847 13.9504 0.925447 13.8568L11.3985 3.38371L14.7735 6.75866L4.30037 17.2317C4.20679 17.3253 4.10551 17.3939 3.99655 17.4375C3.88756 17.4811 3.77281 17.5029 3.6523 17.5029H1.55812Z"
                                  fill="#6E6D7A"
                                />
                              </svg>
                            </div>
                          )}

                          {addDynamicForm_Icons_Delete && (
                            <div
                              className="p-[2px]"
                              onClick={(event) => {
                                event.stopPropagation();
                                onChangeText(option.value, option.label);
                                handleDeleteValue(option.value);
                              }}
                            >
                              <svg
                                className="w-4 h-4 ml-[8px]"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <g mask="url(#mask0_1619_81655)">
                                  <path
                                    d="M7.3077 20.5017C6.80898 20.5017 6.38302 20.3251 6.02982 19.9719C5.67661 19.6187 5.5 19.1928 5.5 18.694V6.00176H5.25C5.03718 6.00176 4.85898 5.92997 4.7154 5.78639C4.5718 5.6428 4.5 5.4646 4.5 5.25179C4.5 5.03897 4.5718 4.86077 4.7154 4.71719C4.85898 4.57359 5.03718 4.50179 5.25 4.50179H8.99997C8.99997 4.25692 9.08619 4.04827 9.25863 3.87584C9.43106 3.7034 9.63971 3.61719 9.88457 3.61719H14.1154C14.3602 3.61719 14.5689 3.7034 14.7413 3.87584C14.9138 4.04827 15 4.25692 15 4.50179H18.75C18.9628 4.50179 19.141 4.57359 19.2845 4.71719C19.4281 4.86077 19.5 5.03897 19.5 5.25179C19.5 5.4646 19.4281 5.6428 19.2845 5.78639C19.141 5.92997 18.9628 6.00176 18.75 6.00176H18.5V18.694C18.5 19.1928 18.3233 19.6187 17.9701 19.9719C17.6169 20.3251 17.191 20.5017 16.6922 20.5017H7.3077ZM17 6.00176H6.99997V18.694C6.99997 18.7838 7.02883 18.8575 7.08652 18.9152C7.14422 18.9729 7.21795 19.0018 7.3077 19.0018H16.6922C16.782 19.0018 16.8557 18.9729 16.9134 18.9152C16.9711 18.8575 17 18.7838 17 18.694V6.00176ZM9.40385 17.0018H10.9038V8.00176H9.40385V17.0018ZM13.0961 17.0018H14.5961V8.00176H13.0961V17.0018Z"
                                    fill="#6E6D7A"
                                  />
                                </g>
                              </svg>
                            </div>
                          )}
                        </div>
                      </a>
                    )}
                  </li>
                ))}
            </ul>
          </li>
          {(addDynamicForm || editing) && (
            <li className="w-full z-50 bg-pureWhite">
              <div className="bg-gray-100 flex flex-row items-center justify-between ">
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
                    hasError={textNameHasError}
                    getError={(e) => setTextNameError(e)}
                  />
                </div>
                <div className="ml-3 mr-2">
                  <Button
                    type="button"
                    variant="btn-primary"
                    className="rounded-[4px] !h-auto"
                    onClick={handleSubmit}
                  >
                    {editing
                      ? addDynamicForm_ButtonLabelEdit
                      : addDynamicForm_ButtonLabelAdd}
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
      {error && !open && (
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
