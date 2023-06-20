import React, { useState } from "react";
import { FiChevronsLeft, FiChevronsRight, FiChevronRight, FiChevronLeft } from "react-icons/fi";

interface PaginationProps {
  totalPages: number;
  space: boolean | String; 
  variant: any; 
  onChangePage: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    props.onChangePage(pageNumber);
  };

  const handleFirstPage = () => {
    if (currentPage !== 1) {
      handleClick(1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handleClick(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < props.totalPages) {
      handleClick(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    if (currentPage !== props.totalPages) {
      handleClick(props.totalPages);
    }
  };

  const { totalPages, space, variant } = props;

  let pageNumbers: (number | string)[] = [];

  if (totalPages <= 5) {
    pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    if (currentPage <= 3) {
      pageNumbers = [1, 2, 3, 4, "...", totalPages];
    } else if (currentPage >= totalPages - 2) {
      pageNumbers = [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      pageNumbers = [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      ];
    }
  }

  const containerClassName = `flex items-center justify-center mt-4`;

    // for prop variant = "buttons"
    return variant === "buttons" ? (
        // for "space" prop
        space ? (
            <div className={containerClassName}>
                <button
                    className={`px-3 py-2 rounded text-[14px] font-proxima ${currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"
                        }`}
                    onClick={() => handleFirstPage()}
                    disabled={currentPage === 1}
                >
                    First
                </button>
                <span className="text-CSPipeColor">|</span>
                <button
                    className={`px-3 py-2 rounded text-[14px] font-proxima ${currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"
                        }`}
                    onClick={() => handlePrevPage()}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                <div className="flex">
                    {pageNumbers.map((pageNumber) => (
                        <button
                            key={pageNumber}
                            className={`pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded text-[14px] font-proxima ${currentPage === pageNumber
                                    ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray"
                                    : "text-CSDarkGray bg-CSDropDownBG border border-CSPipeColor"
                                } ml-2`}
                            onClick={() => handleClick(Number(pageNumber))}
                            disabled={currentPage === pageNumber}
                        >
                            {pageNumber}
                        </button>
                    ))}
                </div>

                <button
                    className={`px-3 py-2 rounded font-proxima ${currentPage === totalPages
                            ? "text-CSSecondaryGray"
                            : "text-CSDarkGray"
                        } ml-2`}
                    onClick={() => handleNextPage()}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
                <span className="text-CSPipeColor">|</span>
                <button
                    className={`px-3 py-2 rounded font-proxima ${currentPage === totalPages
                            ? "text-CSSecondaryGray"
                            : "text-CSDarkGray"
                        }`}
                    onClick={() => handleLastPage()}
                    disabled={currentPage === totalPages}
                >
                    Last
                </button>
            </div>
        ) : (
            // buttons without space
            <div className={containerClassName}>
                <button
                    className={`px-3 py-2 text-[14px] font-proxima ${currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"
                        }`}
                    onClick={() => handleFirstPage()}
                    disabled={currentPage === 1}
                >
                    First
                </button>
                <span className="text-CSPipeColor">|</span>
                <button
                    className={`px-3 py-2 text-[14px] font-proxima ${currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"
                        }`}
                    onClick={() => handlePrevPage()}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                <div className="flex">
                    {pageNumbers.map((pageNumber, index) => {
                        if (!space && index === 0) {
                            return (
                                <button
                                    key={pageNumber}
                                    className={`pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded-l-lg text-[14px] font-proxima ${currentPage === pageNumber
                                            ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray"
                                            : "text-CSDarkGray bg-CSDropDownBG border border-CSPipeColor"
                                        } ml-0`}
                                    onClick={() => handleClick(Number(pageNumber))}
                                    disabled={currentPage === pageNumber}
                                >
                                    {pageNumber}
                                </button>
                            );
                        } else if (index === pageNumbers.length - 1) {
                            return (
                                <button
                                    key={pageNumber}
                                    className={`pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded-r-lg text-[14px] font-proxima ${currentPage === pageNumber
                                            ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray"
                                            : "text-CSDarkGray bg-CSDropDownBG border-t border-r border-b border-CSPipeColor"
                                        } ml-0`}
                                    onClick={() => handleClick(Number(pageNumber))}
                                    disabled={currentPage === pageNumber}
                                >
                                    {pageNumber}
                                </button>
                            );
                        } else {
                            return (
                                <button
                                    key={pageNumber}
                                    className={`pt-[1px] pr-[9px] pb-[1px] pl-[9px] text-[14px] font-proxima ${currentPage === pageNumber
                                            ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray"
                                            : "text-CSDarkGray bg-CSDropDownBG border-t border-r border-b border-CSPipeColor"
                                        }`}
                                    onClick={() => handleClick(Number(pageNumber))}
                                    disabled={currentPage === pageNumber}
                                >
                                    {pageNumber}
                                </button>
                            );
                        }
                    })}
                </div>
                <button
                    className={`px-3 py-2  font-proxima ${currentPage === totalPages
                            ? "text-CSSecondaryGray"
                            : "text-CSDarkGray"
                        } ml-0`}
                    onClick={() => handleNextPage()}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
                <span className="text-CSPipeColor">|</span>
                <button
                    className={`px-3 py-2 font-proxima ${currentPage === totalPages
                            ? "text-CSSecondaryGray"
                            : "text-CSDarkGray"
                        }`}
                    onClick={() => handleLastPage()}
                    disabled={currentPage === totalPages}
                >
                    Last
                </button>
            </div>
        )
    ) : // arrows with space
        space ? (
            <div className={containerClassName}>
                <button
                    className={`px-3 py-2 text-[14px] ${currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"
                        }`}
                    onClick={() => handleFirstPage()}
                    disabled={currentPage === 1}
                >
                    <FiChevronsLeft size={20} />
                </button>
                <span className="text-CSPipeColor">|</span>
                <button
                    className={`px-3 py-2 text-[14px] ${currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"
                        }`}
                    onClick={() => handlePrevPage()}
                    disabled={currentPage === 1}
                >
                    <FiChevronLeft size={20} />
                </button>
                <div className="flex">
                    {pageNumbers.map((pageNumber) => (
                        <button
                            key={pageNumber}
                            className={`pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded text-[14px] font-proxima ${currentPage === pageNumber
                                    ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray"
                                    : "text-CSDarkGray"
                                } ml-2`}
                            onClick={() => handleClick(Number(pageNumber))}
                            disabled={currentPage === pageNumber}
                        >
                            {pageNumber}
                        </button>
                    ))}
                </div>
                <button
                    className={`px-3 py-2 ${currentPage === totalPages
                            ? "text-CSSecondaryGray"
                            : "text-CSDarkGray"
                        } ml-2`}
                    onClick={() => handleNextPage()}
                    disabled={currentPage === totalPages}
                >
                    <FiChevronRight size={20} />
                </button>
                <span className="text-CSPipeColor">|</span>
                <button
                    className={`px-3 py-2 ${currentPage === totalPages
                            ? "text-CSSecondaryGray"
                            : "text-CSDarkGray"
                        }`}
                    onClick={() => handleLastPage()}
                    disabled={currentPage === totalPages}
                >
                    <FiChevronsRight size={20} />
                </button>
            </div>
        ) : (
            // arrows without space
            <div className={containerClassName}>
                <button
                    className={`px-3 py-2 text-[14px] ${currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"
                        }`}
                    onClick={() => handleFirstPage()}
                    disabled={currentPage === 1}
                >
                    <FiChevronsLeft size={20} />
                </button>
                <span className="text-CSPipeColor">|</span>
                <button
                    className={`px-3 py-2 text-[14px] ${currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"
                        }`}
                    onClick={() => handlePrevPage()}
                    disabled={currentPage === 1}
                >
                    <FiChevronLeft size={20} />
                </button>
                <div className="flex">
                    {pageNumbers.map((pageNumber, index) => {
                        if (!space && index === 0) {
                            return (
                                <button
                                    key={pageNumber}
                                    className={`pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded-l-lg text-[14px] font-proxima ${currentPage === pageNumber
                                            ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray"
                                            : "text-CSDarkGray bg-CSDropDownBG border border-CSPipeColor"
                                        } ml-0`}
                                    onClick={() => handleClick(Number(pageNumber))}
                                    disabled={currentPage === pageNumber}
                                >
                                    {pageNumber}
                                </button>
                            );
                        } else if (index === pageNumbers.length - 1) {
                            return (
                                <button
                                    key={pageNumber}
                                    className={`pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded-r-lg text-[14px] font-proxima ${currentPage === pageNumber
                                            ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray"
                                            : "text-CSDarkGray bg-CSDropDownBG border-t border-r border-b border-CSPipeColor"
                                        } ml-0`}
                                    onClick={() => handleClick(Number(pageNumber))}
                                    disabled={currentPage === pageNumber}
                                >
                                    {pageNumber}
                                </button>
                            );
                        } else {
                            return (
                                <button
                                    key={pageNumber}
                                    className={`pt-[1px] pr-[9px] pb-[1px] pl-[9px] text-[14px] font-proxima ${currentPage === pageNumber
                                            ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray"
                                            : "text-CSDarkGray bg-CSDropDownBG border-t border-r border-b border-CSPipeColor"
                                        }`}
                                    onClick={() => handleClick(Number(pageNumber))}
                                    disabled={currentPage === pageNumber}
                                >
                                    {pageNumber}
                                </button>
                            );
                        }
                    })}
                </div>
                <button
                    className={`px-3 py-2 ${currentPage === totalPages
                            ? "text-CSSecondaryGray"
                            : "text-CSDarkGray"
                        } ml-0`}
                    onClick={() => handleNextPage()}
                    disabled={currentPage === totalPages}
                >
                    <FiChevronRight size={20} />
                </button>
                <span className="text-CSPipeColor">|</span>
                <button
                    className={`px-3 py-2 ${currentPage === totalPages
                            ? "text-CSSecondaryGray"
                            : "text-CSDarkGray"
                        }`}
                    onClick={() => handleLastPage()}
                    disabled={currentPage === totalPages}
                >
                    <FiChevronsRight size={20} />
                </button>
            </div>
        );
}


export default Pagination;