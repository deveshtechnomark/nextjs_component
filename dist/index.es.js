import React, { useState, useEffect } from 'react';

function ChevronsLeft() {
  return React.createElement("div", null, React.createElement("svg", {
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("polyline", {
    points: "11 17 6 12 11 7"
  }), React.createElement("polyline", {
    points: "18 17 13 12 18 7"
  })));
}

function ChevronLeft() {
  return React.createElement("div", null, React.createElement("svg", {
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  })));
}

var Pagination = function Pagination(props) {
  var _a = useState(1),
    currentPage = _a[0],
    setCurrentPage = _a[1];
  var _b = useState(false),
    isSmallScreen = _b[0],
    setIsSmallScreen = _b[1];
  var handleScreenSizeChange = function handleScreenSizeChange() {
    if (window.innerWidth <= 768) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };
  // for screen changing
  useEffect(function () {
    handleScreenSizeChange();
    window.addEventListener("resize", handleScreenSizeChange);
    return function () {
      window.removeEventListener("resize", handleScreenSizeChange);
    };
  }, []);
  var handleClick = function handleClick(pageNumber) {
    if (pageNumber === "...") {
      return;
    }
    setCurrentPage(Number(pageNumber));
    props.onChangePage(Number(pageNumber));
  };
  var handleFirstPage = function handleFirstPage() {
    if (currentPage !== 1) {
      handleClick(1);
    }
  };
  var handlePrevPage = function handlePrevPage() {
    if (currentPage > 1) {
      handleClick(currentPage - 1);
    }
  };
  var handleNextPage = function handleNextPage() {
    if (currentPage < props.totalPages) {
      handleClick(currentPage + 1);
    }
  };
  var handleLastPage = function handleLastPage() {
    if (currentPage !== props.totalPages) {
      handleClick(props.totalPages);
    }
  };
  var totalPages = props.totalPages,
    space = props.space,
    variant = props.variant;
  var pageNumbers = [];
  if (totalPages <= 5) {
    pageNumbers = Array.from({
      length: totalPages
    }, function (_, i) {
      return i + 1;
    });
  } else {
    if (currentPage <= 3) {
      pageNumbers = [1, 2, 3, 4, "...", totalPages];
    } else if (currentPage >= totalPages - 2) {
      pageNumbers = [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
      pageNumbers = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
    }
  }
  // page changing conditions for small screens
  if (isSmallScreen) {
    if (currentPage <= 2) {
      pageNumbers = [1, 2, "...", totalPages];
    } else if (currentPage >= totalPages - 1) {
      pageNumbers = [1, "...", totalPages - 1, totalPages];
    } else {
      pageNumbers = [1, currentPage, "...", totalPages];
    }
  }
  //Style for main container
  var containerClassName = "flex items-center mt-4";
  // Common style for normal (Next, Prev) buttons
  var buttonStyles = "".concat(isSmallScreen ? "px-2" : "px-3", " py-2 text-[14px] font-proxima");
  // Common style for arrow buttons
  var arrowButtonStyle = "".concat(isSmallScreen ? "px-2" : "px-3", " py-2");
  // common style for pages button in space variant
  var pagesSpaceStyle = "pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded text-[14px] font-proxima";
  // Common Style for first page number in variant - without space
  var firstPageNumStyle = "pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded-l-lg text-[14px] font-proxima";
  // Common style for last page number in variant - without space
  var lastPageNumStyle = "pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded-r-lg text-[14px] font-proxima";
  // common Style for Middle page numbers for variant without space
  var middlePageNumStyle = "pt-[1px] pr-[9px] pb-[1px] pl-[9px] text-[14px] font-proxima";
  // Styel for current page number
  var currentPageNumStyle = "bg-lightPrimary border border-primary text-darkCharcoal";
  // Style for default Page Numbers with variant space
  var defaultPageNumSpaceStyle = "text-darkCharcoal bg-pureWhite border border-lightSilver";
  // Style for default page numbers for variant without space
  var defaultPageNumStyle = "text-darkCharcoal bg-pureWhite border-t border-r border-b border-lightSilver";
  // for prop variant = "buttons"
  return variant === "buttons" ?
  // for "space" prop
  space ? React.createElement("div", {
    className: containerClassName
  }, React.createElement("button", {
    className: "".concat(buttonStyles, " ").concat(currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleFirstPage();
    },
    disabled: currentPage === 1
  }, "First"), React.createElement("span", {
    className: "text-lightSilver"
  }, "|"), React.createElement("button", {
    className: "".concat(buttonStyles, " ").concat(currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handlePrevPage();
    },
    disabled: currentPage === 1
  }, "Prev"), React.createElement("div", {
    className: "flex"
  }, pageNumbers.map(function (pageNumber) {
    return React.createElement("button", {
      key: pageNumber,
      className: "".concat(pagesSpaceStyle, " ").concat(currentPage === pageNumber ? currentPageNumStyle : defaultPageNumSpaceStyle, " ").concat(isSmallScreen ? "ml-1" : "ml-2"),
      onClick: function onClick() {
        return handleClick(Number(pageNumber));
      },
      disabled: currentPage === pageNumber || pageNumber === "..."
    }, pageNumber);
  })), React.createElement("button", {
    className: "".concat(buttonStyles, " ").concat(currentPage === totalPages ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleNextPage();
    },
    disabled: currentPage === totalPages
  }, "Next"), React.createElement("span", {
    className: "text-lightSilver"
  }, "|"), React.createElement("button", {
    className: "".concat(buttonStyles, " ").concat(currentPage === totalPages ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleLastPage();
    },
    disabled: currentPage === totalPages
  }, "Last")) :
  // buttons without space
  React.createElement("div", {
    className: containerClassName
  }, React.createElement("button", {
    className: "".concat(buttonStyles, " ").concat(currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleFirstPage();
    },
    disabled: currentPage === 1
  }, "First"), React.createElement("span", {
    className: "text-lightSilver"
  }, "|"), React.createElement("button", {
    className: "".concat(buttonStyles, " ").concat(currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handlePrevPage();
    },
    disabled: currentPage === 1
  }, "Prev"), React.createElement("div", {
    className: "flex"
  }, pageNumbers.map(function (pageNumber, index) {
    if (!space && index === 0) {
      return React.createElement("button", {
        key: pageNumber,
        className: "".concat(firstPageNumStyle, " ").concat(currentPage === pageNumber ? currentPageNumStyle : defaultPageNumSpaceStyle),
        onClick: function onClick() {
          return handleClick(Number(pageNumber));
        },
        disabled: currentPage === pageNumber || pageNumber === "..."
      }, pageNumber);
    } else if (index === pageNumbers.length - 1) {
      return React.createElement("button", {
        key: pageNumber,
        className: "".concat(lastPageNumStyle, " ").concat(currentPage === pageNumber ? currentPageNumStyle : defaultPageNumStyle),
        onClick: function onClick() {
          return handleClick(Number(pageNumber));
        },
        disabled: currentPage === pageNumber || pageNumber === "..."
      }, pageNumber);
    } else {
      return React.createElement("button", {
        key: pageNumber,
        className: "".concat(middlePageNumStyle, " ").concat(currentPage === pageNumber ? currentPageNumStyle : defaultPageNumStyle),
        onClick: function onClick() {
          return handleClick(Number(pageNumber));
        },
        disabled: currentPage === pageNumber || pageNumber === "..."
      }, pageNumber);
    }
  })), React.createElement("button", {
    className: "".concat(buttonStyles, " ").concat(currentPage === totalPages ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleNextPage();
    },
    disabled: currentPage === totalPages
  }, "Next"), React.createElement("span", {
    className: "text-lightSilver"
  }, "|"), React.createElement("button", {
    className: "".concat(buttonStyles, " ").concat(currentPage === totalPages ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleLastPage();
    },
    disabled: currentPage === totalPages
  }, "Last")) :
  // arrows with space
  space ? React.createElement("div", {
    className: containerClassName
  }, React.createElement("button", {
    className: "".concat(arrowButtonStyle, " ").concat(currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleFirstPage();
    },
    disabled: currentPage === 1
  }, React.createElement("div", {
    className: "text-[20px]"
  }, React.createElement(ChevronsLeft, null))), React.createElement("span", {
    className: "text-lightSilver"
  }, "|"), React.createElement("button", {
    className: "".concat(arrowButtonStyle, " ").concat(currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handlePrevPage();
    },
    disabled: currentPage === 1
  }, React.createElement("div", {
    className: "text-[20px]"
  }, React.createElement(ChevronLeft, null))), React.createElement("div", {
    className: "flex"
  }, pageNumbers.map(function (pageNumber) {
    return React.createElement("button", {
      key: pageNumber,
      className: "".concat(pagesSpaceStyle, " ").concat(currentPage === pageNumber ? currentPageNumStyle : "text-darkCharcoal", " ").concat(isSmallScreen ? "ml-1" : "ml-2"),
      onClick: function onClick() {
        return handleClick(Number(pageNumber));
      },
      disabled: currentPage === pageNumber || pageNumber === "..."
    }, pageNumber);
  })), React.createElement("button", {
    className: "".concat(arrowButtonStyle, " ").concat(currentPage === totalPages ? "text-slatyGrey" : "text-darkCharcoal", " ").concat(isSmallScreen ? "ml-1" : "ml-2"),
    onClick: function onClick() {
      return handleNextPage();
    },
    disabled: currentPage === totalPages
  }, React.createElement("div", {
    className: "text-[20px] rotate-180"
  }, React.createElement(ChevronLeft, null))), React.createElement("span", {
    className: "text-lightSilver"
  }, "|"), React.createElement("button", {
    className: "".concat(arrowButtonStyle, " ").concat(currentPage === totalPages ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleLastPage();
    },
    disabled: currentPage === totalPages
  }, React.createElement("div", {
    className: "text-[20px] rotate-180"
  }, React.createElement(ChevronsLeft, null)))) :
  // arrows without space
  React.createElement("div", {
    className: containerClassName
  }, React.createElement("button", {
    className: "".concat(arrowButtonStyle, " ").concat(currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleFirstPage();
    },
    disabled: currentPage === 1
  }, React.createElement("div", {
    className: "text-[20px]"
  }, React.createElement(ChevronsLeft, null))), React.createElement("span", {
    className: "text-lightSilver"
  }, "|"), React.createElement("button", {
    className: "".concat(arrowButtonStyle, " ").concat(currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handlePrevPage();
    },
    disabled: currentPage === 1
  }, React.createElement("div", {
    className: "text-[20px]"
  }, React.createElement(ChevronLeft, null))), React.createElement("div", {
    className: "flex"
  }, pageNumbers.map(function (pageNumber, index) {
    if (!space && index === 0) {
      return React.createElement("button", {
        key: pageNumber,
        className: "".concat(firstPageNumStyle, " ").concat(currentPage === pageNumber ? currentPageNumStyle : defaultPageNumSpaceStyle),
        onClick: function onClick() {
          return handleClick(Number(pageNumber));
        },
        disabled: currentPage === pageNumber || pageNumber === "..."
      }, pageNumber);
    } else if (index === pageNumbers.length - 1) {
      return React.createElement("button", {
        key: pageNumber,
        className: "".concat(lastPageNumStyle, " ").concat(currentPage === pageNumber ? currentPageNumStyle : defaultPageNumStyle),
        onClick: function onClick() {
          return handleClick(Number(pageNumber));
        },
        disabled: currentPage === pageNumber || pageNumber === "..."
      }, pageNumber);
    } else {
      return React.createElement("button", {
        key: pageNumber,
        className: "".concat(middlePageNumStyle, " ").concat(currentPage === pageNumber ? currentPageNumStyle : defaultPageNumStyle),
        onClick: function onClick() {
          return handleClick(Number(pageNumber));
        },
        disabled: currentPage === pageNumber || pageNumber === "..."
      }, pageNumber);
    }
  })), React.createElement("button", {
    className: "".concat(arrowButtonStyle, " ").concat(currentPage === totalPages ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleNextPage();
    },
    disabled: currentPage === totalPages
  }, React.createElement("div", {
    className: "text-[20px] rotate-180"
  }, React.createElement(ChevronLeft, null))), React.createElement("span", {
    className: "text-lightSilver"
  }, "|"), React.createElement("button", {
    className: "".concat(arrowButtonStyle, " ").concat(currentPage === totalPages ? "text-slatyGrey" : "text-darkCharcoal"),
    onClick: function onClick() {
      return handleLastPage();
    },
    disabled: currentPage === totalPages
  }, React.createElement("div", {
    className: "text-[20px] rotate-180"
  }, React.createElement(ChevronsLeft, null))));
};

export { Pagination as default };
//# sourceMappingURL=index.es.js.map
