'use strict';

var classNames = require('classnames');
var React = require('react');

var isToday = function isToday(date) {
  var today = new Date();
  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
};
var generateDate = function generateDate(month, year) {
  if (month === void 0) {
    month = new Date().getMonth();
  }
  if (year === void 0) {
    year = new Date().getFullYear();
  }
  var firstDateOfMonth = new Date(year, month, 1);
  var lastDateOfMonth = new Date(year, month + 1, 0);
  var arrayOfDate = [];
  for (var i = 0; i < firstDateOfMonth.getDay(); i++) {
    var date = new Date(year, month, -i);
    arrayOfDate.push({
      currentMonth: false,
      date: date
    });
  }
  for (var i = 1; i <= lastDateOfMonth.getDate(); i++) {
    var date = new Date(year, month, i);
    arrayOfDate.push({
      currentMonth: true,
      date: date,
      today: isToday(date)
    });
  }
  var remaining = 42 - arrayOfDate.length;
  for (var i = 1; i <= remaining; i++) {
    var date = new Date(year, month + 1, i);
    arrayOfDate.push({
      currentMonth: false,
      date: date
    });
  }
  return arrayOfDate;
};
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function ChevronLeft() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  })));
}

var Calendar = function Calendar(props) {
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var currentDate = new Date();
  var startYear = props.startYear,
    endYear = props.endYear;
  var inputRef = React.useRef(null);
  var _a = React.useState(currentDate),
    today = _a[0],
    setToday = _a[1];
  var _b = React.useState(false),
    showMonthList = _b[0],
    setShowMonthList = _b[1];
  var _c = React.useState(false),
    showYearList = _c[0],
    setShowYearList = _c[1];
  var _d = React.useState(currentDate),
    selectedDate = _d[0],
    setSelectedDate = _d[1];
  var _e = React.useState(''),
    fullDate = _e[0],
    setFullDate = _e[1];
  var _f = React.useState(1),
    currentPage = _f[0],
    setCurrentPage = _f[1];
  var _g = React.useState(true),
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
    var newDate = new Date(today);
    newDate.setMonth(month);
    setToday(newDate);
    setShowMonthList(false);
  };
  var toggleYearList = function toggleYearList() {
    setShowYearList(!showYearList);
  };
  var selectYear = function selectYear(year) {
    var newDate = new Date(today);
    newDate.setFullYear(year);
    setToday(newDate);
    setShowYearList(false);
  };
  var handleDateClick = function handleDateClick(date) {
    var newDate = new Date(date);
    setToday(newDate);
    setSelectedDate(date);
    newDate.setDate(date.getDate() + 1);
    var formattedDate = newDate.toISOString().slice(0, 10);
    setFullDate(formattedDate);
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
  React.useEffect(function () {
    props.onSelectedDate(fullDate);
  }, [fullDate]);
  React.useEffect(function () {
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
    className: "peer block min-h-[auto] pl-1 w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-500 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1 text-black",
    placeholder: "Select a date",
    onClick: calendarShow,
    defaultValue: fullDate.toString()
  })), toggleOpen && /*#__PURE__*/React.createElement("div", {
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
  }, months[today.getMonth()]), showYearList === true && showMonthList === false ? /*#__PURE__*/React.createElement("h1", {
    className: "font-proxima text-[14px] font-semibold ml-1"
  }, startYear + ' - ' + endYear) : /*#__PURE__*/React.createElement("h1", {
    className: "font-proxima text-[14px] font-semibold ml-1 cursor-pointer ".concat(showMonthList ? 'pointer-events-none' : ''),
    onClick: toggleYearList
  }, today.getFullYear())), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-5"
  }, showYearList === false ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    color: "#848A95",
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all ".concat(showMonthList ? "hidden" : "", " text-[20px]"),
    onClick: function onClick() {
      var newDate = new Date(today);
      newDate.setMonth(newDate.getMonth() - 1);
      setToday(newDate);
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, null)), /*#__PURE__*/React.createElement("div", {
    color: "#848A95",
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all ".concat(showMonthList ? "hidden" : "", " rotate-180 text-[20px]"),
    onClick: function onClick() {
      var newDate = new Date(today);
      newDate.setMonth(newDate.getMonth() + 1);
      setToday(newDate);
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, null))) : /*#__PURE__*/React.createElement(React.Fragment, null, currentPage <= totalPages && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    color: "#848A95",
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all ".concat(currentPage === 1 ? "opacity-50 pointer-events-none" : "", " text-[20px]"),
    onClick: currentPage === 1 ? undefined : goToPreviousPage
  }, /*#__PURE__*/React.createElement(ChevronLeft, null)), /*#__PURE__*/React.createElement("div", {
    color: "#848A95",
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all ".concat(currentPage === totalPages ? "opacity-50 pointer-events-none" : "", " rotate-180 text-[20px]"),
    onClick: currentPage === totalPages ? undefined : goToNextPage
  }, /*#__PURE__*/React.createElement(ChevronLeft, null)))))), showMonthList === true ? /*#__PURE__*/React.createElement("div", {
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
  }, generateDate(today.getMonth(), today.getFullYear()).map(function (_a, index) {
    var date = _a.date,
      currentMonth = _a.currentMonth;
    var currentDate = new Date(date);
    var isSameDay = currentDate.getDate() === selectedDate.getDate() && currentDate.getMonth() === selectedDate.getMonth();
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "h-full w-full grid place-content-center text-sm text-CSDarkGray font-proxima relative",
      onClick: function onClick() {
        return handleDateClick(currentDate);
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: classNames(currentMonth ? "" : "text-gray-400", "h-[40px] w-[40px] grid place-content-center rounded-full cursor-pointer z-10", {
        "bg-CSgreen text-white": isSameDay
      })
    }, currentDate.getDate()), isSameDay && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "absolute flex inset-0 rounded-full overflow-visible"
    }, /*#__PURE__*/React.createElement("span", {
      className: "rippleAnimation absolute rounded-full bg-CSgreen opacity-50"
    }))));
  })))))));
};

var CalendarYear = function CalendarYear(props) {
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var currentDate = new Date();
  var startYear = props.startYear,
    endYear = props.endYear;
  var inputRef = React.useRef(null);
  var _a = React.useState(currentDate),
    today = _a[0],
    setToday = _a[1];
  var _b = React.useState(false),
    showMonthList = _b[0],
    setShowMonthList = _b[1];
  var _c = React.useState(false),
    showYearList = _c[0],
    setShowYearList = _c[1];
  var _d = React.useState(currentDate),
    selectedDate = _d[0],
    setSelectedDate = _d[1];
  var _e = React.useState(''),
    fullDate = _e[0],
    setFullDate = _e[1];
  var _f = React.useState(1),
    currentPage = _f[0],
    setCurrentPage = _f[1];
  var _g = React.useState(true),
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
    var newToday = new Date(today);
    newToday.setMonth(month);
    setToday(newToday);
    setShowMonthList(false);
  };
  var toggleYearList = function toggleYearList() {
    setShowYearList(!showYearList);
  };
  var selectYear = function selectYear(year) {
    var newToday = new Date(today);
    newToday.setFullYear(year);
    setToday(newToday);
    setShowYearList(false);
  };
  var handleDateClick = function handleDateClick(date) {
    var newToday = new Date(date);
    newToday.setDate(1);
    setToday(newToday);
    setSelectedDate(date);
    var fullDate = date.toISOString().slice(0, 7);
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
  React.useEffect(function () {
    props.onSelectedDate(fullDate);
  }, [fullDate]);
  React.useEffect(function () {
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
    className: "peer block min-h-[auto] pl-1 w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-500 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1 text-black",
    placeholder: "Select a date",
    onClick: calendarShow,
    defaultValue: fullDate.toString()
  })), toggleOpen && /*#__PURE__*/React.createElement("div", {
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
  }, months[today.getMonth()]), showYearList === true && showMonthList === false ? /*#__PURE__*/React.createElement("h1", {
    className: "font-proxima text-[14px] font-semibold ml-1"
  }, startYear + ' - ' + endYear) : /*#__PURE__*/React.createElement("h1", {
    className: "font-proxima text-[14px] font-semibold ml-1 cursor-pointer ".concat(showMonthList ? 'pointer-events-none' : ''),
    onClick: toggleYearList
  }, today.getFullYear())), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-5"
  }, showYearList === false ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    color: "#848A95",
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all ".concat(showMonthList ? "hidden" : "", " text-[20px]"),
    onClick: function onClick() {
      var newToday = new Date(today);
      newToday.setMonth(newToday.getMonth() - 1);
      setToday(newToday);
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, null)), /*#__PURE__*/React.createElement("div", {
    color: "#848A95",
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all ".concat(showMonthList ? "hidden" : "", " rotate-180 text-[20px]"),
    onClick: function onClick() {
      var newToday = new Date(today);
      newToday.setMonth(newToday.getMonth() + 1);
      setToday(newToday);
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, null))) : /*#__PURE__*/React.createElement(React.Fragment, null, currentPage <= totalPages && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    color: "#848A95",
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all ".concat(currentPage === 1 ? "opacity-50 pointer-events-none" : "", " text-[20px]"),
    onClick: currentPage === 1 ? undefined : goToPreviousPage
  }, /*#__PURE__*/React.createElement(ChevronLeft, null)), /*#__PURE__*/React.createElement("div", {
    color: "#848A95",
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all ".concat(currentPage === totalPages ? "opacity-50 pointer-events-none" : "", " rotate-180 text-[20px]"),
    onClick: currentPage === totalPages ? undefined : goToNextPage
  }, /*#__PURE__*/React.createElement(ChevronLeft, null)))))), showMonthList === true ? /*#__PURE__*/React.createElement("div", {
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
  }, generateDate(today.getMonth(), today.getFullYear()).map(function (_a, index) {
    var date = _a.date,
      currentMonth = _a.currentMonth;
    var currentDate = new Date(date);
    var isSameDay = currentDate.getDate() === selectedDate.getDate() && currentDate.getMonth() === selectedDate.getMonth();
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "h-full w-full grid place-content-center text-sm text-CSDarkGray font-proxima relative",
      onClick: function onClick() {
        return handleDateClick(currentDate);
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: classNames(currentMonth ? "" : "text-gray-400", "h-[40px] w-[40px] grid place-content-center rounded-full cursor-pointer z-10", {
        "bg-CSgreen text-white": isSameDay
      })
    }, currentDate.getDate()), isSameDay && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "absolute flex inset-0 rounded-full overflow-visible"
    }, /*#__PURE__*/React.createElement("span", {
      className: "rippleAnimation absolute rounded-full bg-CSgreen opacity-50"
    }))));
  })))))));
};

exports.Calendar = Calendar;
exports.CalendarYear = CalendarYear;
