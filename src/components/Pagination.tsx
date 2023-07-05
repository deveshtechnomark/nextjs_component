import React, { useEffect, useState } from "react";
import ChevronsLeft from "./icons/ChevronsLeft";
import ChevronLeft from "./icons/ChevronLeft";

interface PaginationProps {
  totalPages: number;
  space: boolean | String;
  variant: any;
  onChangePage: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  const handleScreenSizeChange = () => {
    if (window.innerWidth <= 768) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  // for screen changing
  useEffect(() => {
    handleScreenSizeChange();
    window.addEventListener("resize", handleScreenSizeChange);
    return () => {
      window.removeEventListener("resize", handleScreenSizeChange);
    };
  }, []);

  const handleClick = (pageNumber: number | string) => {
    if (pageNumber === "...") {
      return;
    }
    setCurrentPage(Number(pageNumber));
    props.onChangePage(Number(pageNumber));
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
  const containerClassName = `flex items-center mt-4`;

  // Common style for normal (Next, Prev) buttons
  const buttonStyles = `${isSmallScreen ? "px-2" : "px-3"
    } py-2 text-[14px] font-proxima`;

  // Common style for arrow buttons
  const arrowButtonStyle = `${isSmallScreen ? "px-2" : "px-3"} py-2`;

  // common style for pages button in space variant
  const pagesSpaceStyle = `pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded text-[14px] font-proxima`;

  // Common Style for first page number in variant - without space
  const firstPageNumStyle = `pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded-l-lg text-[14px] font-proxima`;

  // Common style for last page number in variant - without space
  const lastPageNumStyle = `pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded-r-lg text-[14px] font-proxima`;

  // common Style for Middle page numbers for variant without space
  const middlePageNumStyle = `pt-[1px] pr-[9px] pb-[1px] pl-[9px] text-[14px] font-proxima`;

  // Styel for current page number
  const currentPageNumStyle = `bg-lightPrimary border border-primary text-darkCharcoal`;

  // Style for default Page Numbers with variant space
  const defaultPageNumSpaceStyle = `text-darkCharcoal bg-pureWhite border border-lightSilver`;

  // Style for default page numbers for variant without space
  const defaultPageNumStyle = `text-darkCharcoal bg-pureWhite border-t border-r border-b border-lightSilver`;

  // for prop variant = "buttons"
  return variant === "buttons" ? (
    // for "space" prop
    space ? (
      <div className={containerClassName}>
        <button
          className={`${buttonStyles} ${currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"
            }`}
          onClick={() => handleFirstPage()}
          disabled={currentPage === 1}
        >
          First
        </button>
        <span className="text-lightSilver">|</span>
        <button
          className={`${buttonStyles} ${currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"
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
              className={`${pagesSpaceStyle} ${currentPage === pageNumber
                  ? currentPageNumStyle
                  : defaultPageNumSpaceStyle
                } ${isSmallScreen ? "ml-1" : "ml-2"}`}
              onClick={() => handleClick(Number(pageNumber))}
              disabled={currentPage === pageNumber || pageNumber === "..."}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <button
          className={`${buttonStyles} ${currentPage === totalPages
              ? "text-slatyGrey"
              : "text-darkCharcoal"
            }`}
          onClick={() => handleNextPage()}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        <span className="text-lightSilver">|</span>
        <button
          className={`${buttonStyles} ${currentPage === totalPages
              ? "text-slatyGrey"
              : "text-darkCharcoal"
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
          className={`${buttonStyles} ${currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"
            }`}
          onClick={() => handleFirstPage()}
          disabled={currentPage === 1}
        >
          First
        </button>
        <span className="text-lightSilver">|</span>
        <button
          className={`${buttonStyles} ${currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"
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
                  className={`${firstPageNumStyle} ${currentPage === pageNumber
                      ? currentPageNumStyle
                      : defaultPageNumSpaceStyle
                    }`}
                  onClick={() => handleClick(Number(pageNumber))}
                  disabled={currentPage === pageNumber || pageNumber === "..."}
                >
                  {pageNumber}
                </button>
              );
            } else if (index === pageNumbers.length - 1) {
              return (
                <button
                  key={pageNumber}
                  className={`${lastPageNumStyle} ${currentPage === pageNumber
                      ? currentPageNumStyle
                      : defaultPageNumStyle
                    }`}
                  onClick={() => handleClick(Number(pageNumber))}
                  disabled={currentPage === pageNumber || pageNumber === "..."}
                >
                  {pageNumber}
                </button>
              );
            } else {
              return (
                <button
                  key={pageNumber}
                  className={`${middlePageNumStyle} ${currentPage === pageNumber
                      ? currentPageNumStyle
                      : defaultPageNumStyle
                    }`}
                  onClick={() => handleClick(Number(pageNumber))}
                  disabled={currentPage === pageNumber || pageNumber === "..."}
                >
                  {pageNumber}
                </button>
              );
            }
          })}
        </div>
        <button
          className={`${buttonStyles} ${currentPage === totalPages
              ? "text-slatyGrey"
              : "text-darkCharcoal"
            }`}
          onClick={() => handleNextPage()}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        <span className="text-lightSilver">|</span>
        <button
          className={`${buttonStyles} ${currentPage === totalPages
              ? "text-slatyGrey"
              : "text-darkCharcoal"
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
          className={`${arrowButtonStyle} ${currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"
            }`}
          onClick={() => handleFirstPage()}
          disabled={currentPage === 1}
        >
          {/* Left Icon */}
          <div className="text-[20px]">
            <ChevronsLeft />
          </div>

        </button>
        <span className="text-lightSilver">|</span>
        <button
          className={`${arrowButtonStyle} ${currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"
            }`}
          onClick={() => handlePrevPage()}
          disabled={currentPage === 1}
        >
          <div className="text-[20px]">
            <ChevronLeft />
          </div>

        </button>
        <div className="flex">
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`${pagesSpaceStyle} ${currentPage === pageNumber
                  ? currentPageNumStyle
                  : "text-darkCharcoal"
                } ${isSmallScreen ? "ml-1" : "ml-2"}`}
              onClick={() => handleClick(Number(pageNumber))}
              disabled={currentPage === pageNumber || pageNumber === "..."}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <button
          className={`${arrowButtonStyle} ${currentPage === totalPages
              ? "text-slatyGrey"
              : "text-darkCharcoal"
            } ${isSmallScreen ? "ml-1" : "ml-2"}`}
          onClick={() => handleNextPage()}
          disabled={currentPage === totalPages}
        >
          <div className="text-[20px] rotate-180">
            <ChevronLeft />
          </div>

        </button>
        <span className="text-lightSilver">|</span>
        <button
          className={`${arrowButtonStyle} ${currentPage === totalPages
              ? "text-slatyGrey"
              : "text-darkCharcoal"
            }`}
          onClick={() => handleLastPage()}
          disabled={currentPage === totalPages}
        >
          <div className="text-[20px] rotate-180">
            <ChevronsLeft />
          </div>
        </button>
      </div>
    ) : (
      // arrows without space
      <div className={containerClassName}>
        <button
          className={`${arrowButtonStyle} ${currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"
            }`}
          onClick={() => handleFirstPage()}
          disabled={currentPage === 1}
        >
          <div className="text-[20px]">
            <ChevronsLeft />
          </div>

        </button>
        <span className="text-lightSilver">|</span>
        <button
          className={`${arrowButtonStyle} ${currentPage === 1 ? "text-slatyGrey" : "text-darkCharcoal"
            }`}
          onClick={() => handlePrevPage()}
          disabled={currentPage === 1}
        >
          <div className="text-[20px]">
            <ChevronLeft />
          </div>
        </button>
        <div className="flex">
          {pageNumbers.map((pageNumber, index) => {
            if (!space && index === 0) {
              return (
                <button
                  key={pageNumber}
                  className={`${firstPageNumStyle} ${currentPage === pageNumber
                      ? currentPageNumStyle
                      : defaultPageNumSpaceStyle
                    }`}
                  onClick={() => handleClick(Number(pageNumber))}
                  disabled={currentPage === pageNumber || pageNumber === "..."}
                >
                  {pageNumber}
                </button>
              );
            } else if (index === pageNumbers.length - 1) {
              return (
                <button
                  key={pageNumber}
                  className={`${lastPageNumStyle} ${currentPage === pageNumber
                      ? currentPageNumStyle
                      : defaultPageNumStyle
                    }`}
                  onClick={() => handleClick(Number(pageNumber))}
                  disabled={currentPage === pageNumber || pageNumber === "..."}
                >
                  {pageNumber}
                </button>
              );
            } else {
              return (
                <button
                  key={pageNumber}
                  className={`${middlePageNumStyle} ${currentPage === pageNumber
                      ? currentPageNumStyle
                      : defaultPageNumStyle
                    }`}
                  onClick={() => handleClick(Number(pageNumber))}
                  disabled={currentPage === pageNumber || pageNumber === "..."}
                >
                  {pageNumber}
                </button>
              );
            }
          })}
        </div>
        <button
          className={`${arrowButtonStyle} ${currentPage === totalPages
              ? "text-slatyGrey"
              : "text-darkCharcoal"
            }`}
          onClick={() => handleNextPage()}
          disabled={currentPage === totalPages}
        >
          <div className="text-[20px] rotate-180">
            <ChevronLeft />
          </div>

        </button>
        <span className="text-lightSilver">|</span>
        <button
          className={`${arrowButtonStyle} ${currentPage === totalPages
              ? "text-slatyGrey"
              : "text-darkCharcoal"
            }`}
          onClick={() => handleLastPage()}
          disabled={currentPage === totalPages}
        >
          <div className="text-[20px] rotate-180">
            <ChevronsLeft />
          </div>

        </button>
      </div>
    );
};

export default Pagination;
