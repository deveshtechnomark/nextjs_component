import React, { useState } from 'react';
import { FiChevronsLeft, FiChevronLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi';

var Pagination = function Pagination(props) {
  var _a = useState(1),
    currentPage = _a[0],
    setCurrentPage = _a[1];
  var handleClick = function handleClick(pageNumber) {
    setCurrentPage(pageNumber);
    props.onChangePage(pageNumber);
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
  var containerClassName = "flex items-center justify-center mt-4";
  // for prop variant = "buttons"
  return variant === "buttons" ?
  // for "space" prop
  space ? React.createElement("div", {
    className: containerClassName
  }, React.createElement("button", {
    className: "px-3 py-2 rounded text-[14px] font-proxima ".concat(currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"),
    onClick: function onClick() {
      return handleFirstPage();
    },
    disabled: currentPage === 1
  }, "First"), React.createElement("span", {
    className: "text-CSPipeColor"
  }, "|"), React.createElement("button", {
    className: "px-3 py-2 rounded text-[14px] font-proxima ".concat(currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"),
    onClick: function onClick() {
      return handlePrevPage();
    },
    disabled: currentPage === 1
  }, "Prev"), React.createElement("div", {
    className: "flex"
  }, pageNumbers.map(function (pageNumber) {
    return React.createElement("button", {
      key: pageNumber,
      className: "pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded text-[14px] font-proxima ".concat(currentPage === pageNumber ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray" : "text-CSDarkGray bg-CSDropDownBG border border-CSPipeColor", " ml-2"),
      onClick: function onClick() {
        return handleClick(Number(pageNumber));
      },
      disabled: currentPage === pageNumber
    }, pageNumber);
  })), React.createElement("button", {
    className: "px-3 py-2 rounded font-proxima ".concat(currentPage === totalPages ? "text-CSSecondaryGray" : "text-CSDarkGray", " ml-2"),
    onClick: function onClick() {
      return handleNextPage();
    },
    disabled: currentPage === totalPages
  }, "Next"), React.createElement("span", {
    className: "text-CSPipeColor"
  }, "|"), React.createElement("button", {
    className: "px-3 py-2 rounded font-proxima ".concat(currentPage === totalPages ? "text-CSSecondaryGray" : "text-CSDarkGray"),
    onClick: function onClick() {
      return handleLastPage();
    },
    disabled: currentPage === totalPages
  }, "Last")) :
  // buttons without space
  React.createElement("div", {
    className: containerClassName
  }, React.createElement("button", {
    className: "px-3 py-2 text-[14px] font-proxima ".concat(currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"),
    onClick: function onClick() {
      return handleFirstPage();
    },
    disabled: currentPage === 1
  }, "First"), React.createElement("span", {
    className: "text-CSPipeColor"
  }, "|"), React.createElement("button", {
    className: "px-3 py-2 text-[14px] font-proxima ".concat(currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"),
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
        className: "pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded-l-lg text-[14px] font-proxima ".concat(currentPage === pageNumber ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray" : "text-CSDarkGray bg-CSDropDownBG border border-CSPipeColor", " ml-0"),
        onClick: function onClick() {
          return handleClick(Number(pageNumber));
        },
        disabled: currentPage === pageNumber
      }, pageNumber);
    } else if (index === pageNumbers.length - 1) {
      return React.createElement("button", {
        key: pageNumber,
        className: "pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded-r-lg text-[14px] font-proxima ".concat(currentPage === pageNumber ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray" : "text-CSDarkGray bg-CSDropDownBG border-t border-r border-b border-CSPipeColor", " ml-0"),
        onClick: function onClick() {
          return handleClick(Number(pageNumber));
        },
        disabled: currentPage === pageNumber
      }, pageNumber);
    } else {
      return React.createElement("button", {
        key: pageNumber,
        className: "pt-[1px] pr-[9px] pb-[1px] pl-[9px] text-[14px] font-proxima ".concat(currentPage === pageNumber ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray" : "text-CSDarkGray bg-CSDropDownBG border-t border-r border-b border-CSPipeColor"),
        onClick: function onClick() {
          return handleClick(Number(pageNumber));
        },
        disabled: currentPage === pageNumber
      }, pageNumber);
    }
  })), React.createElement("button", {
    className: "px-3 py-2  font-proxima ".concat(currentPage === totalPages ? "text-CSSecondaryGray" : "text-CSDarkGray", " ml-0"),
    onClick: function onClick() {
      return handleNextPage();
    },
    disabled: currentPage === totalPages
  }, "Next"), React.createElement("span", {
    className: "text-CSPipeColor"
  }, "|"), React.createElement("button", {
    className: "px-3 py-2 font-proxima ".concat(currentPage === totalPages ? "text-CSSecondaryGray" : "text-CSDarkGray"),
    onClick: function onClick() {
      return handleLastPage();
    },
    disabled: currentPage === totalPages
  }, "Last")) :
  // arrows with space
  space ? React.createElement("div", {
    className: containerClassName
  }, React.createElement("button", {
    className: "px-3 py-2 text-[14px] ".concat(currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"),
    onClick: function onClick() {
      return handleFirstPage();
    },
    disabled: currentPage === 1
  }, React.createElement(FiChevronsLeft, {
    size: 20
  })), React.createElement("span", {
    className: "text-CSPipeColor"
  }, "|"), React.createElement("button", {
    className: "px-3 py-2 text-[14px] ".concat(currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"),
    onClick: function onClick() {
      return handlePrevPage();
    },
    disabled: currentPage === 1
  }, React.createElement(FiChevronLeft, {
    size: 20
  })), React.createElement("div", {
    className: "flex"
  }, pageNumbers.map(function (pageNumber) {
    return React.createElement("button", {
      key: pageNumber,
      className: "pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded text-[14px] font-proxima ".concat(currentPage === pageNumber ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray" : "text-CSDarkGray", " ml-2"),
      onClick: function onClick() {
        return handleClick(Number(pageNumber));
      },
      disabled: currentPage === pageNumber
    }, pageNumber);
  })), React.createElement("button", {
    className: "px-3 py-2 ".concat(currentPage === totalPages ? "text-CSSecondaryGray" : "text-CSDarkGray", " ml-2"),
    onClick: function onClick() {
      return handleNextPage();
    },
    disabled: currentPage === totalPages
  }, React.createElement(FiChevronRight, {
    size: 20
  })), React.createElement("span", {
    className: "text-CSPipeColor"
  }, "|"), React.createElement("button", {
    className: "px-3 py-2 ".concat(currentPage === totalPages ? "text-CSSecondaryGray" : "text-CSDarkGray"),
    onClick: function onClick() {
      return handleLastPage();
    },
    disabled: currentPage === totalPages
  }, React.createElement(FiChevronsRight, {
    size: 20
  }))) :
  // arrows without space
  React.createElement("div", {
    className: containerClassName
  }, React.createElement("button", {
    className: "px-3 py-2 text-[14px] ".concat(currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"),
    onClick: function onClick() {
      return handleFirstPage();
    },
    disabled: currentPage === 1
  }, React.createElement(FiChevronsLeft, {
    size: 20
  })), React.createElement("span", {
    className: "text-CSPipeColor"
  }, "|"), React.createElement("button", {
    className: "px-3 py-2 text-[14px] ".concat(currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"),
    onClick: function onClick() {
      return handlePrevPage();
    },
    disabled: currentPage === 1
  }, React.createElement(FiChevronLeft, {
    size: 20
  })), React.createElement("div", {
    className: "flex"
  }, pageNumbers.map(function (pageNumber, index) {
    if (!space && index === 0) {
      return React.createElement("button", {
        key: pageNumber,
        className: "pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded-l-lg text-[14px] font-proxima ".concat(currentPage === pageNumber ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray" : "text-CSDarkGray bg-CSDropDownBG border border-CSPipeColor", " ml-0"),
        onClick: function onClick() {
          return handleClick(Number(pageNumber));
        },
        disabled: currentPage === pageNumber
      }, pageNumber);
    } else if (index === pageNumbers.length - 1) {
      return React.createElement("button", {
        key: pageNumber,
        className: "pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded-r-lg text-[14px] font-proxima ".concat(currentPage === pageNumber ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray" : "text-CSDarkGray bg-CSDropDownBG border-t border-r border-b border-CSPipeColor", " ml-0"),
        onClick: function onClick() {
          return handleClick(Number(pageNumber));
        },
        disabled: currentPage === pageNumber
      }, pageNumber);
    } else {
      return React.createElement("button", {
        key: pageNumber,
        className: "pt-[1px] pr-[9px] pb-[1px] pl-[9px] text-[14px] font-proxima ".concat(currentPage === pageNumber ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray" : "text-CSDarkGray bg-CSDropDownBG border-t border-r border-b border-CSPipeColor"),
        onClick: function onClick() {
          return handleClick(Number(pageNumber));
        },
        disabled: currentPage === pageNumber
      }, pageNumber);
    }
  })), React.createElement("button", {
    className: "px-3 py-2 ".concat(currentPage === totalPages ? "text-CSSecondaryGray" : "text-CSDarkGray", " ml-0"),
    onClick: function onClick() {
      return handleNextPage();
    },
    disabled: currentPage === totalPages
  }, React.createElement(FiChevronRight, {
    size: 20
  })), React.createElement("span", {
    className: "text-CSPipeColor"
  }, "|"), React.createElement("button", {
    className: "px-3 py-2 ".concat(currentPage === totalPages ? "text-CSSecondaryGray" : "text-CSDarkGray"),
    onClick: function onClick() {
      return handleLastPage();
    },
    disabled: currentPage === totalPages
  }, React.createElement(FiChevronsRight, {
    size: 20
  })));
};

export { Pagination as default };
