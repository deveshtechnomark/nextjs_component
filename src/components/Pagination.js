import React from 'react';
import '../styles/styles.css'

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
    const { totalPages } = this.props;

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <div className="flex items-center justify-center mt-4">
        <button
          className={`px-3 py-2 rounded  text-[16px] ${
            currentPage === 1 ? 'text-CSSecondaryGray' : 'text-CSDarkGray'
          }`}
          onClick={() => this.handleFirstPage()}
          disabled={currentPage === 1}
        >
          First
        </button>
        <span className='text-CSPipeColor'>|</span>
        <button
          className={`px-3 py-2 rounded text-[16px] ${
            currentPage === 1 ? 'text-CSSecondaryGray' : 'text-CSDarkGray'
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
              className={`px-3 py-2 rounded text-[16px] ${
                currentPage === pageNumber ? 'bg-CSlightGreen border border-CSgreen text-CSDarkGray' : 'text-CSDarkGray bg-CSDropDownBG border border-CSPipeColor'
              } ml-2`}
              onClick={() => this.handleClick(pageNumber)}
              disabled={currentPage === pageNumber}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <button
          className={`px-4 py-2 rounded ${
            currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'
          } ml-2`}
          onClick={() => this.handleNextPage()}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        <button
          className={`px-4 py-2 rounded ${
            currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'
          } ml-2`}
          onClick={() => this.handleLastPage()}
          disabled={currentPage === totalPages}
        >
          Last
        </button>
      </div>
    );
  }
}

export default Pagination;
