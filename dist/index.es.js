import dayjs from 'dayjs';
import classNames from 'classnames';
import React, { useRef, useState, useEffect } from 'react';
import { GrCalendar, GrFormPrevious, GrFormNext } from 'react-icons/gr';

var generateDate = function generateDate(month, year) {
  if (month === void 0) {
    month = dayjs().month();
  }
  if (year === void 0) {
    year = dayjs().year();
  }
  var firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  var lastDateOfMonth = dayjs().year(year).month(month).endOf("month");
  var arrayOfDate = [];
  for (var i = 0; i < firstDateOfMonth.day(); i++) {
    var date = firstDateOfMonth.day(i);
    arrayOfDate.push({
      currentMonth: false,
      date: date
    });
  }
  for (var i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({
      currentMonth: true,
      date: firstDateOfMonth.date(i),
      today: firstDateOfMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString()
    });
  }
  var remaining = 42 - arrayOfDate.length;
  for (var i = lastDateOfMonth.date() + 1; i <= lastDateOfMonth.date() + remaining; i++) {
    arrayOfDate.push({
      currentMonth: false,
      date: lastDateOfMonth.date(i)
    });
  }
  return arrayOfDate;
};
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var styles = {"rippleAnimation":"datepicker-module_rippleAnimation__KEpJD","ripple":"datepicker-module_ripple__e0Nun","divAnimation":"datepicker-module_divAnimation__jj5dZ"};

var Calendar = function Calendar(props) {
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var currentDate = dayjs();
  var startYear = props.startYear,
    endYear = props.endYear;
  var inputRef = useRef(null);
  var _a = useState(currentDate),
    today = _a[0],
    setToday = _a[1];
  var _b = useState(false),
    showMonthList = _b[0],
    setShowMonthList = _b[1];
  var _c = useState(false),
    showYearList = _c[0],
    setShowYearList = _c[1];
  var _d = useState(currentDate),
    selectedDate = _d[0],
    setSelectedDate = _d[1];
  var _e = useState(''),
    fullDate = _e[0],
    setFullDate = _e[1];
  var _f = useState(1),
    currentPage = _f[0],
    setCurrentPage = _f[1];
  var _g = useState(false),
    toggleOpen = _g[0],
    setToggleOpen = _g[1];
  var yearsPerPage = 16;
  var totalPages = Math.ceil((endYear - startYear + 1) / yearsPerPage);
  var startIndex = (currentPage - 1) * yearsPerPage;
  var displayedYears = Array.from({
    length: yearsPerPage
  }, function (_, index) {
    var year = startYear + startIndex + index;
    return year <= endYear ? year : null;
  }).filter(function (year) {
    return year !== null;
  });
  var toggleMonthList = function toggleMonthList() {
    setShowMonthList(!showMonthList);
  };
  var selectMonth = function selectMonth(month) {
    setToday(today.month(month));
    setShowMonthList(false);
  };
  var toggleYearList = function toggleYearList() {
    setShowYearList(!showYearList);
  };
  var selectYear = function selectYear(year) {
    setToday(today.year(year));
    setShowYearList(false);
  };
  var handleDateClick = function handleDateClick(date) {
    setToday(date.startOf('month'));
    setSelectedDate(date);
    var fullDate = date.format("YYYY-MM-DD");
    setFullDate(fullDate);
  };
  var goToNextPage = function goToNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  var goToPreviousPage = function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  var calendarShow = function calendarShow() {
    setToggleOpen(!toggleOpen);
  };
  useEffect(function () {
    props.onSelectedDate(fullDate);
  }, [fullDate]);
  useEffect(function () {
    var handleOutsideClick = function handleOutsideClick(event) {
      var target = event.target;
      var isInputClick = inputRef.current && inputRef.current.contains(target);
      var isCalendarClick = target.closest(".divAnimation");
      if (!isInputClick && !isCalendarClick) {
        setToggleOpen(false);
      }
    };
    var handleMouseDown = function handleMouseDown(event) {
      setTimeout(function () {
        handleOutsideClick(event);
      }, 0);
    };
    document.addEventListener("mousedown", handleMouseDown);
    return function () {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "relative flex",
    ref: inputRef
  }, /*#__PURE__*/React.createElement("input", {
    type: toggleOpen ? "date" : "text",
    className: "peer block min-h-[auto] pl-1 w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1 appearance-none",
    placeholder: "Select a date",
    onClick: calendarShow,
    defaultValue: fullDate.toString()
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute inset-y-0 right-2 flex items-center pointer-events-none"
  }, /*#__PURE__*/React.createElement(GrCalendar, {
    color: "#FF0000",
    className: "w-5 h-5 cursor-pointer",
    onClick: calendarShow
  }))), toggleOpen && /*#__PURE__*/React.createElement("div", {
    className: "relative ".concat(toggleOpen ? "divAnimation" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex  mx-auto  items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shadow-md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between border-b-2 border-CSBorderColor py-[12px] px-[12px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row "
  }, showMonthList === true ? "" : showYearList === true ? "" : /*#__PURE__*/React.createElement("h1", {
    className: "font-proxima text-[14px] font-semibold cursor-pointer",
    onClick: toggleMonthList
  }, months[today.month()]), showYearList === true && showMonthList === false ? /*#__PURE__*/React.createElement("h1", {
    className: "font-proxima text-[14px] font-semibold ml-1"
  }, startYear + ' - ' + endYear) : /*#__PURE__*/React.createElement("h1", {
    className: "font-proxima text-[14px] font-semibold ml-1 cursor-pointer ".concat(showMonthList ? 'pointer-events-none' : ''),
    onClick: toggleYearList
  }, today.year())), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-5"
  }, showYearList === false ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GrFormPrevious, {
    color: "#848A95",
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all ".concat(showMonthList ? "hidden" : ""),
    onClick: function onClick() {
      setToday(function (prevToday) {
        return prevToday.month(prevToday.month() - 1);
      });
    }
  }), /*#__PURE__*/React.createElement(GrFormNext, {
    color: "#848A95",
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all ".concat(showMonthList ? "hidden" : ""),
    onClick: function onClick() {
      setToday(function (prevToday) {
        return prevToday.month(prevToday.month() + 1);
      });
    }
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, currentPage <= totalPages && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GrFormPrevious, {
    color: "#848A95",
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all ".concat(currentPage === 1 ? "opacity-50 pointer-events-none" : ""),
    onClick: currentPage === 1 ? undefined : goToPreviousPage
  }), /*#__PURE__*/React.createElement(GrFormNext, {
    color: "#848A95",
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all ".concat(currentPage === totalPages ? "opacity-50 pointer-events-none" : ""),
    onClick: currentPage === totalPages ? undefined : goToNextPage
  }))))), showMonthList === true ? /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 place-content-center overflow-hidden font-proxima"
  }, months.map(function (month, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "py-5 px-2 w-full h-full grid place-content-center text-sm text-CSDarkGray font-proxima relative cursor-pointer",
      onClick: function onClick() {
        return selectMonth(index);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-14 h-12 hover:bg-CSHoverGreen hover:text-CSgreen transition-all duration-200 flex items-center justify-center rounded-md"
    }, month.length > 5 ? month.slice(0, 3) : month));
  }))) : showYearList === true ? /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 grid-rows-4 gap-1 place-content-center overflow-hidden font-proxima"
  }, displayedYears.map(function (year) {
    return /*#__PURE__*/React.createElement("div", {
      key: year,
      className: "py-2 px-2 w-full h-full grid place-content-center text-sm text-CSDarkGray font-proxima relative cursor-pointer",
      onClick: function onClick() {
        return selectYear(year);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "py-4 px-3 w-full h-full hover:bg-CSHoverGreen hover:text-CSgreen transition-all duration-200 flex items-center justify-center rounded-md"
    }, year));
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-full grid grid-cols-7 font-proxima"
  }, days.map(function (day, index) {
    return /*#__PURE__*/React.createElement("h1", {
      key: index,
      className: "h-14 grid place-content-center text-[12px]"
    }, day);
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full grid grid-cols-7"
  }, generateDate(today.month(), today.year()).map(function (_a, index) {
    var date = _a.date,
      currentMonth = _a.currentMonth;
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "h-full w-full grid place-content-center text-sm text-CSDarkGray font-proxima relative",
      onClick: function onClick() {
        return handleDateClick(date);
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: classNames(currentMonth ? "" : "text-gray-400", "h-[40px] w-[40px] grid place-content-center rounded-full cursor-pointer z-10", {
        "bg-CSgreen text-white": date.isSame(selectedDate, 'day')
      })
    }, date.date()), date.isSame(selectedDate, 'day') && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "absolute flex inset-0 rounded-full overflow-visible"
    }, /*#__PURE__*/React.createElement("span", {
      className: "".concat(styles.rippleAnimation, " absolute rounded-full bg-CSgreen opacity-50")
    }))));
  })))))));
};

var CalendarYear = function CalendarYear(props) {
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var currentDate = dayjs();
  var startYear = props.startYear,
    endYear = props.endYear;
  var inputRef = useRef(null);
  var _a = useState(currentDate),
    today = _a[0],
    setToday = _a[1];
  var _b = useState(false),
    showMonthList = _b[0],
    setShowMonthList = _b[1];
  var _c = useState(false),
    showYearList = _c[0],
    setShowYearList = _c[1];
  var _d = useState(currentDate),
    selectedDate = _d[0],
    setSelectedDate = _d[1];
  var _e = useState(''),
    fullDate = _e[0],
    setFullDate = _e[1];
  var _f = useState(1),
    currentPage = _f[0],
    setCurrentPage = _f[1];
  var _g = useState(false),
    toggleOpen = _g[0],
    setToggleOpen = _g[1];
  var yearsPerPage = 16;
  var totalPages = Math.ceil((endYear - startYear + 1) / yearsPerPage);
  var startIndex = (currentPage - 1) * yearsPerPage;
  var displayedYears = Array.from({
    length: yearsPerPage
  }, function (_, index) {
    var year = startYear + startIndex + index;
    return year <= endYear ? year : null;
  }).filter(function (year) {
    return year !== null;
  });
  var toggleMonthList = function toggleMonthList() {
    setShowMonthList(!showMonthList);
  };
  var selectMonth = function selectMonth(month) {
    setToday(today.month(month));
    setShowMonthList(false);
  };
  var toggleYearList = function toggleYearList() {
    setShowYearList(!showYearList);
  };
  var selectYear = function selectYear(year) {
    setToday(today.year(year));
    setShowYearList(false);
  };
  var handleDateClick = function handleDateClick(date) {
    setToday(date.startOf('month'));
    setSelectedDate(date);
    var fullDate = date.format("YYYY-MM");
    setFullDate(fullDate);
  };
  var goToNextPage = function goToNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  var goToPreviousPage = function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  var calendarShow = function calendarShow() {
    setToggleOpen(!toggleOpen);
  };
  useEffect(function () {
    props.onSelectedDate(fullDate);
  }, [fullDate]);
  useEffect(function () {
    var handleOutsideClick = function handleOutsideClick(event) {
      var target = event.target;
      var isInputClick = inputRef.current && inputRef.current.contains(target);
      var isCalendarClick = target.closest(".divAnimation");
      if (!isInputClick && !isCalendarClick) {
        setToggleOpen(false);
      }
    };
    var handleMouseDown = function handleMouseDown(event) {
      setTimeout(function () {
        handleOutsideClick(event);
      }, 0);
    };
    document.addEventListener("mousedown", handleMouseDown);
    return function () {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "relative flex",
    ref: inputRef
  }, /*#__PURE__*/React.createElement("input", {
    type: toggleOpen ? "month" : "text",
    className: "peer block min-h-[auto] pl-1 w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1 appearance-none",
    placeholder: "Select a date",
    onClick: calendarShow,
    defaultValue: fullDate.toString()
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute inset-y-0 right-2 flex items-center pointer-events-none"
  }, /*#__PURE__*/React.createElement(GrCalendar, {
    color: "#FF0000",
    className: "w-5 h-5 cursor-pointer",
    onClick: calendarShow
  }))), toggleOpen && /*#__PURE__*/React.createElement("div", {
    className: "relative ".concat(toggleOpen ? "divAnimation" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex  mx-auto  items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shadow-md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between border-b-2 border-CSBorderColor py-[12px] px-[12px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row "
  }, showMonthList === true ? "" : showYearList === true ? "" : /*#__PURE__*/React.createElement("h1", {
    className: "font-proxima text-[14px] font-semibold cursor-pointer",
    onClick: toggleMonthList
  }, months[today.month()]), showYearList === true && showMonthList === false ? /*#__PURE__*/React.createElement("h1", {
    className: "font-proxima text-[14px] font-semibold ml-1"
  }, startYear + ' - ' + endYear) : /*#__PURE__*/React.createElement("h1", {
    className: "font-proxima text-[14px] font-semibold ml-1 cursor-pointer ".concat(showMonthList ? 'pointer-events-none' : ''),
    onClick: toggleYearList
  }, today.year())), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-5"
  }, showYearList === false ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GrFormPrevious, {
    color: "#848A95",
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all ".concat(showMonthList ? "hidden" : ""),
    onClick: function onClick() {
      setToday(function (prevToday) {
        return prevToday.month(prevToday.month() - 1);
      });
    }
  }), /*#__PURE__*/React.createElement(GrFormNext, {
    color: "#848A95",
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all ".concat(showMonthList ? "hidden" : ""),
    onClick: function onClick() {
      setToday(function (prevToday) {
        return prevToday.month(prevToday.month() + 1);
      });
    }
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, currentPage <= totalPages && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GrFormPrevious, {
    color: "#848A95",
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all ".concat(currentPage === 1 ? "opacity-50 pointer-events-none" : ""),
    onClick: currentPage === 1 ? undefined : goToPreviousPage
  }), /*#__PURE__*/React.createElement(GrFormNext, {
    color: "#848A95",
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all ".concat(currentPage === totalPages ? "opacity-50 pointer-events-none" : ""),
    onClick: currentPage === totalPages ? undefined : goToNextPage
  }))))), showMonthList === true ? /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 place-content-center overflow-hidden font-proxima"
  }, months.map(function (month, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "py-5 px-2 w-full h-full grid place-content-center text-sm text-CSDarkGray font-proxima relative cursor-pointer",
      onClick: function onClick() {
        return selectMonth(index);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-14 h-12 hover:bg-CSHoverGreen hover:text-CSgreen transition-all duration-200 flex items-center justify-center rounded-md"
    }, month.length > 5 ? month.slice(0, 3) : month));
  }))) : showYearList === true ? /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 grid-rows-4 gap-1 place-content-center overflow-hidden font-proxima"
  }, displayedYears.map(function (year) {
    return /*#__PURE__*/React.createElement("div", {
      key: year,
      className: "py-2 px-2 w-full h-full grid place-content-center text-sm text-CSDarkGray font-proxima relative cursor-pointer",
      onClick: function onClick() {
        return selectYear(year);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "py-4 px-3 w-full h-full hover:bg-CSHoverGreen hover:text-CSgreen transition-all duration-200 flex items-center justify-center rounded-md"
    }, year));
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-full grid grid-cols-7 font-proxima"
  }, days.map(function (day, index) {
    return /*#__PURE__*/React.createElement("h1", {
      key: index,
      className: "h-14 grid place-content-center text-[12px]"
    }, day);
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full grid grid-cols-7"
  }, generateDate(today.month(), today.year()).map(function (_a, index) {
    var date = _a.date,
      currentMonth = _a.currentMonth;
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "h-full w-full grid place-content-center text-sm text-CSDarkGray font-proxima relative",
      onClick: function onClick() {
        return handleDateClick(date);
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: classNames(currentMonth ? "" : "text-gray-400", "h-[40px] w-[40px] grid place-content-center rounded-full cursor-pointer z-10", {
        "bg-CSgreen text-white": date.isSame(selectedDate, 'day')
      })
    }, date.date()), date.isSame(selectedDate, 'day') && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "absolute flex inset-0 rounded-full overflow-visible"
    }, /*#__PURE__*/React.createElement("span", {
      className: "".concat(styles.rippleAnimation, " absolute rounded-full bg-CSgreen opacity-50")
    }))));
  })))))));
};

export { Calendar, CalendarYear };
