import { generateDate, months } from "./utils/calendarUtility";
import React, { useEffect, useState, useRef } from 'react';

import ChevronLeftIcon from "./icons/ChevronLeft.js";

interface CalendarDate {
    date: Date;
    currentMonth: boolean;
    today: boolean;
    startYear: Number;
    endYear: Number;
}

const CalendarYear = (props): JSX.Element => {
    const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDate: Date = new Date();
    const { startYear, endYear } = props;
    const inputRef = useRef(null);

    const [today, setToday] = useState<Date>(currentDate);
    const [showMonthList, setShowMonthList] = useState<boolean>(false);
    const [showYearList, setShowYearList] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<Date>(currentDate);
    const [fullDate, setFullDate] = useState<String>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [toggleOpen, setToggleOpen] = useState<boolean>(false);

    const currentMonth = today.getMonth();
    const [selectedMonth, setSelectedMonth] = useState<number>(currentMonth);

    const currentYear = today.getFullYear();
    const [selectedYear, setSelectedYear] = useState<number>(currentYear);

    const yearsPerPage: number = 16;
    const totalPages: number = Math.ceil((endYear - startYear + 1) / yearsPerPage);
    const startIndex: number = (currentPage - 1) * yearsPerPage;
    const displayedYears: number[] = Array.from({ length: yearsPerPage }, (_, index) => {
        const year = startYear + startIndex + index;
        return year <= endYear ? year : null;
    }).filter((year) => year !== null);

    const toggleMonthList = () => {
        setShowMonthList(!showMonthList);
    };

    const selectMonth = (month: number) => {
        const newDate = new Date(today);
        newDate.setMonth(month);
        setToday(newDate);
        setShowMonthList(false);
        setSelectedMonth(month);
    };

    const toggleYearList = () => {
        if (!showYearList && !showMonthList) {
            setShowYearList(true);
            setCurrentPage(Math.ceil((selectedYear - startYear + 1) / yearsPerPage));
        } else {
            setShowYearList(false);
        }
    };
    const selectYear = (year: number) => {
        const newDate = new Date(today);
        newDate.setFullYear(year);
        setToday(newDate);
        setShowYearList(false);
        setSelectedYear(year);
    };

    const handleDateClick = (date: Date) => {
        const newToday = new Date(date);
        setToday(newToday);
        setSelectedDate(date);
        const fullDate = date.toISOString().slice(0, 7);
        setFullDate(fullDate);
    };


    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const calendarShow = () => {
        setToggleOpen(!toggleOpen);
    }

    useEffect(() => {
        props.onSelectedDate(fullDate);
    }, [fullDate]);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const target = event.target;
            const isInputClick = inputRef.current && inputRef.current.contains(target);
            const isCalendarClick = target.closest(".divAnimation");
            if (!isInputClick && !isCalendarClick) {
                setToggleOpen(false);
            }
        };
        const handleMouseDown = (event) => {
            setTimeout(() => {
                handleOutsideClick(event);
            }, 0);
        };
        document.addEventListener("mousedown", handleMouseDown);
        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
        };
    }, []);

    return (
        <>
            <div className="relative flex" ref={inputRef}>
                <input
                    type={toggleOpen ? "month" : "text"}
                    className="peer block min-h-[auto] pl-1 w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-500 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1 text-black"
                    placeholder="Select a date"
                    onClick={calendarShow}
                    defaultValue={fullDate.toString()}
                />
            </div>
            {toggleOpen && (
                <div className={`relative ${toggleOpen ? "divAnimation" : ""}`}>
                    <div className="flex  mx-auto  items-center">
                        <div className="shadow-md">
                            <div className="flex justify-between border-b-2 border-borderColor py-[12px] px-[12px]">
                                <div className="flex flex-row ">
                                    {showMonthList === true ? "" : showYearList === true ? "" :
                                        (<h1 className="proxima text-[14px] font-semibold cursor-pointer" onClick={toggleMonthList}>
                                            {months[currentMonth]}
                                        </h1>)}
                                    {showYearList === true && showMonthList === false ?
                                        (<h1 className="proxima text-[14px] font-semibold ml-1">
                                            {startYear + ' - ' + endYear}
                                        </h1>
                                        ) :
                                        (<h1 className={`proxima text-[14px] font-semibold ml-1 cursor-pointer ${showMonthList ? 'pointer-events-none' : ''}`} onClick={toggleYearList}>
                                            {currentYear}
                                        </h1>)
                                    }
                                </div>
                                <div className="flex items-center gap-5">
                                    {showYearList === false ?
                                        <>
                                            <div
                                                className={`w-5 h-5 cursor-pointer hover:scale-105 transition-all ${showMonthList ? "hidden" : ""} text-[20px]`}
                                                onClick={() => {
                                                    const newDate = new Date(today);
                                                    newDate.setMonth(newDate.getMonth() - 1);
                                                    setToday(newDate);
                                                }} >
                                                <ChevronLeftIcon />
                                            </div>
                                            <div
                                                className={`w-5 h-5 cursor-pointer hover:scale-105 transition-all ${showMonthList ? "hidden" : ""} rotate-180 text-[20px]`}
                                                onClick={() => {
                                                    const newDate = new Date(today);
                                                    newDate.setMonth(newDate.getMonth() + 1);
                                                    setToday(newDate);
                                                }}>
                                                <ChevronLeftIcon />
                                            </div>
                                        </>
                                        : <>
                                            {currentPage <= totalPages && (<>
                                                <div
                                                    className={`w-5 h-5 cursor-pointer hover:scale-105 transition-all ${currentPage === 1 ? "opacity-50 pointer-events-none" : ""} text-[20px]`}
                                                    onClick={currentPage === 1 ? undefined : goToPreviousPage}>
                                                    <ChevronLeftIcon />
                                                </div>
                                                <div
                                                    className={`w-5 h-5 cursor-pointer hover:scale-105 transition-all ${currentPage === totalPages ? "opacity-50 pointer-events-none" : ""} rotate-180 text-[20px]`}
                                                    onClick={currentPage === totalPages ? undefined : goToNextPage}>
                                                    <ChevronLeftIcon />
                                                </div>
                                            </>)}
                                        </>
                                    }
                                </div>
                            </div>
                            {showMonthList === true ? (
                                <div className="topBottomAnimation w-full h-full">
                                    <div className="grid grid-cols-4 place-content-center overflow-hidden proxima">
                                        {months.map((month, index) => (
                                            <div
                                                key={index}
                                                className={`py-5 px-2 w-full h-full grid place-content-center text-sm text-textColor proxima relative cursor-pointer `}
                                                onClick={() => selectMonth(index)}
                                            >
                                                <div className={`w-14 h-12 hover:bg-lightGreen hover:text-primary transition-all duration-200 flex items-center justify-center rounded-md ${index === selectedMonth ? 'bg-lightGreen text-primary' : ''
                                                    }`}>
                                                    {month.length > 5 ? month.slice(0, 3) : month}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                                : showYearList === true ? (
                                    <div className="topBottomAnimation w-full">
                                        <div className="grid grid-cols-4 grid-rows-4 gap-1 place-content-center overflow-hidden proxima">
                                            {displayedYears.map((year) => (
                                                <div
                                                    key={year}
                                                    className="py-2 px-2 w-full h-full grid place-content-center text-sm text-textColor proxima relative cursor-pointer"
                                                    onClick={() => selectYear(year)}>
                                                    <div className={`py-4 px-3 w-full h-full hover:bg-lightGreen hover:text-primary transition-all duration-200 flex items-center justify-center rounded-md ${year === selectedYear ? 'bg-lightGreen text-primary' : ''
                                                        }`}>
                                                        {year}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                                    : (
                                        <>
                                            <div className="w-full grid grid-cols-7 proxima">
                                                {days.map((day, index) => (
                                                    <h1
                                                        key={index}
                                                        className="h-14 grid place-content-center text-[12px]">
                                                        {day}
                                                    </h1>
                                                ))}
                                            </div>
                                            <div className="w-full h-full grid grid-cols-7">
                                                {generateDate(today.getMonth(), today.getFullYear()).map(
                                                    ({ date, currentMonth }: CalendarDate, index: number) => {
                                                        const currentDate = new Date(date);
                                                        const isSameDay = currentDate.getDate() === selectedDate.getDate() && currentDate.getMonth() === selectedDate.getMonth();
                                                        return (
                                                            <div
                                                                key={index}
                                                                className="h-full w-full grid place-content-center text-sm text-textColor proxima relative"
                                                                onClick={() => handleDateClick(currentDate)}
                                                            >
                                                                <h1
                                                                    className={`h-[40px] w-[40px] grid place-content-center rounded-full cursor-pointer z-10 ${currentMonth ? "" : "text-gray-400"} ${isSameDay ? "bg-primary text-white" : ""}`}
                                                                >
                                                                    {currentDate.getDate()}
                                                                </h1>
                                                                {isSameDay && (
                                                                    <>
                                                                        <span className="absolute flex inset-0 rounded-full overflow-visible">
                                                                            <span className="rippleAnimation absolute rounded-full bg-primary opacity-50"></span>
                                                                        </span>
                                                                    </>
                                                                )}
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </>
                                    )}
                        </div>
                    </div>
                </div>)
            }
        </>
    );
}
export { CalendarYear };