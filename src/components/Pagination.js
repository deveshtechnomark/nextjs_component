import React from "react";
import "../styles/styles.css";

// icons import
import { FiChevronsLeft } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  handleClick(pageNumber) {
    this.setState({ currentPage: pageNumber });
    this.props.onChangePage(pageNumber);
  }

  handleFirstPage() {
    if (this.state.currentPage !== 1) {
      this.handleClick(1);
    }
  }

  handlePrevPage() {
    if (this.state.currentPage > 1) {
      this.handleClick(this.state.currentPage - 1);
    }
  }

  handleNextPage() {
    if (this.state.currentPage < this.props.totalPages) {
      this.handleClick(this.state.currentPage + 1);
    }
  }

  handleLastPage() {
    if (this.state.currentPage !== this.props.totalPages) {
      this.handleClick(this.props.totalPages);
    }
  }

  render() {
    const { currentPage } = this.state;
    const { totalPages, space, variant } = this.props;

    let pageNumbers = [];

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

    const containerClassName = `flex items-center justify-center mt-4}`;

    // for prop variant = "buttons"
    return variant === "buttons" ? (
      // for "space" prop
      space ? (
        <div className={containerClassName}>
          <button
            className={`px-3 py-2 rounded text-[14px] ${
              currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"
            }`}
            onClick={() => this.handleFirstPage()}
            disabled={currentPage === 1}
          >
            First
          </button>
          <span className="text-CSPipeColor">|</span>
          <button
            className={`px-3 py-2 rounded text-[14px] ${
              currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"
            }`}
            onClick={() => this.handlePrevPage()}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <div className="flex">
            {pageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                className={`pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded text-[14px] ${
                  currentPage === pageNumber
                    ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray"
                    : "text-CSDarkGray bg-CSDropDownBG border border-CSPipeColor"
                } ml-2`}
                onClick={() => this.handleClick(pageNumber)}
                disabled={currentPage === pageNumber}
              >
                {pageNumber}
              </button>
            ))}
          </div>
          <button
            className={`px-3 py-2 rounded ${
              currentPage === totalPages
                ? "text-CSSecondaryGray"
                : "text-CSDarkGray"
            } ml-2`}
            onClick={() => this.handleNextPage()}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
          <span className="text-CSPipeColor">|</span>
          <button
            className={`px-3 py-2 rounded ${
              currentPage === totalPages
                ? "text-CSSecondaryGray"
                : "text-CSDarkGray"
            }`}
            onClick={() => this.handleLastPage()}
            disabled={currentPage === totalPages}
          >
            Last
          </button>
        </div>
      ) : (
        // buttons without space
        <div className={containerClassName}>
          <button
            className={`px-3 py-2 text-[14px] ${
              currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"
            }`}
            onClick={() => this.handleFirstPage()}
            disabled={currentPage === 1}
          >
            First
          </button>
          <span className="text-CSPipeColor">|</span>
          <button
            className={`px-3 py-2 text-[14px] ${
              currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"
            }`}
            onClick={() => this.handlePrevPage()}
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
                    className={`pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded-l-lg text-[14px] ${
                      currentPage === pageNumber
                        ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray"
                        : "text-CSDarkGray bg-CSDropDownBG border border-CSPipeColor"
                    } ml-0`}
                    onClick={() => this.handleClick(pageNumber)}
                    disabled={currentPage === pageNumber}
                  >
                    {pageNumber}
                  </button>
                );
              } else if (index === pageNumbers.length - 1) {
                return (
                  <button
                    key={pageNumber}
                    className={`pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded-r-lg text-[14px] ${
                      currentPage === pageNumber
                        ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray"
                        : "text-CSDarkGray bg-CSDropDownBG border-t border-r border-b border-CSPipeColor"
                    } ml-0`}
                    onClick={() => this.handleClick(pageNumber)}
                    disabled={currentPage === pageNumber}
                  >
                    {pageNumber}
                  </button>
                );
              } else {
                return (
                  <button
                    key={pageNumber}
                    className={`pt-[1px] pr-[9px] pb-[1px] pl-[9px] text-[14px] ${
                      currentPage === pageNumber
                        ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray"
                        : "text-CSDarkGray bg-CSDropDownBG border-t border-r border-b border-CSPipeColor"
                    }`}
                    onClick={() => this.handleClick(pageNumber)}
                    disabled={currentPage === pageNumber}
                  >
                    {pageNumber}
                  </button>
                );
              }
            })}
          </div>
          <button
            className={`px-3 py-2 ${
              currentPage === totalPages
                ? "text-CSSecondaryGray"
                : "text-CSDarkGray"
            } ml-0`}
            onClick={() => this.handleNextPage()}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
          <span className="text-CSPipeColor">|</span>
          <button
            className={`px-3 py-2 ${
              currentPage === totalPages
                ? "text-CSSecondaryGray"
                : "text-CSDarkGray"
            }`}
            onClick={() => this.handleLastPage()}
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
          className={`px-3 py-2 text-[14px] ${
            currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"
          }`}
          onClick={() => this.handleFirstPage()}
          disabled={currentPage === 1}
        >
          <FiChevronsLeft size={20} />
        </button>
        <span className="text-CSPipeColor">|</span>
        <button
          className={`px-3 py-2 text-[14px] ${
            currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"
          }`}
          onClick={() => this.handlePrevPage()}
          disabled={currentPage === 1}
        >
          <FiChevronLeft size={20} />
        </button>
        <div className="flex">
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded text-[14px] ${
                currentPage === pageNumber
                  ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray"
                  : "text-CSDarkGray"
              } ml-2`}
              onClick={() => this.handleClick(pageNumber)}
              disabled={currentPage === pageNumber}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <button
          className={`px-3 py-2 ${
            currentPage === totalPages
              ? "text-CSSecondaryGray"
              : "text-CSDarkGray"
          } ml-2`}
          onClick={() => this.handleNextPage()}
          disabled={currentPage === totalPages}
        >
          <FiChevronRight size={20} />
        </button>
        <span className="text-CSPipeColor">|</span>
        <button
          className={`px-3 py-2 ${
            currentPage === totalPages
              ? "text-CSSecondaryGray"
              : "text-CSDarkGray"
          }`}
          onClick={() => this.handleLastPage()}
          disabled={currentPage === totalPages}
        >
          <FiChevronsRight size={20} />
        </button>
      </div>
    ) : (
      // arrows without space
      <div className={containerClassName}>
        <button
          className={`px-3 py-2 text-[14px] ${
            currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"
          }`}
          onClick={() => this.handleFirstPage()}
          disabled={currentPage === 1}
        >
          <FiChevronsLeft size={20} />
        </button>
        <span className="text-CSPipeColor">|</span>
        <button
          className={`px-3 py-2 text-[14px] ${
            currentPage === 1 ? "text-CSSecondaryGray" : "text-CSDarkGray"
          }`}
          onClick={() => this.handlePrevPage()}
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
                  className={`pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded-l-lg text-[14px] ${
                    currentPage === pageNumber
                      ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray"
                      : "text-CSDarkGray bg-CSDropDownBG border border-CSPipeColor"
                  } ml-0`}
                  onClick={() => this.handleClick(pageNumber)}
                  disabled={currentPage === pageNumber}
                >
                  {pageNumber}
                </button>
              );
            } else if (index === pageNumbers.length - 1) {
              return (
                <button
                  key={pageNumber}
                  className={`pt-[1px] pr-[9px] pb-[1px] pl-[9px] rounded-r-lg text-[14px] ${
                    currentPage === pageNumber
                      ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray"
                      : "text-CSDarkGray bg-CSDropDownBG border-t border-r border-b border-CSPipeColor"
                  } ml-0`}
                  onClick={() => this.handleClick(pageNumber)}
                  disabled={currentPage === pageNumber}
                >
                  {pageNumber}
                </button>
              );
            } else {
              return (
                <button
                  key={pageNumber}
                  className={`pt-[1px] pr-[9px] pb-[1px] pl-[9px] text-[14px] ${
                    currentPage === pageNumber
                      ? "bg-CSlightGreen border border-CSgreen text-CSDarkGray"
                      : "text-CSDarkGray bg-CSDropDownBG border-t border-r border-b border-CSPipeColor"
                  }`}
                  onClick={() => this.handleClick(pageNumber)}
                  disabled={currentPage === pageNumber}
                >
                  {pageNumber}
                </button>
              );
            }
          })}
        </div>
        <button
          className={`px-3 py-2 ${
            currentPage === totalPages
              ? "text-CSSecondaryGray"
              : "text-CSDarkGray"
          } ml-0`}
          onClick={() => this.handleNextPage()}
          disabled={currentPage === totalPages}
        >
          <FiChevronRight size={20} />
        </button>
        <span className="text-CSPipeColor">|</span>
        <button
          className={`px-3 py-2 ${
            currentPage === totalPages
              ? "text-CSSecondaryGray"
              : "text-CSDarkGray"
          }`}
          onClick={() => this.handleLastPage()}
          disabled={currentPage === totalPages}
        >
          <FiChevronsRight size={20} />
        </button>
      </div>
    );
  }
}

export default Pagination ;
