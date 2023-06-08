import React from 'react';
import styles from './styles.scss';
import './bootstrap.scss';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: null,
    };
    this.limit = this.props.limit;
    this.total = this.props.total;
    this.prevLimit = null;
    this.initial = 1;
    this.last = null;
  }

  handleClick = (i, buttonValue) => {
    if (i === 'next') {
      const { activeButton } = this.state;
      const { total } = this.props;

      if (activeButton === null) {
        this.setState({ activeButton: 1 });
      }
      else if (activeButton <= total) {
        if (this.last == activeButton) {
          if (activeButton !== this.total) {
            this.prevLimit = this.limit
            this.initial = +activeButton + 1
          }
        }
        this.setState((prevState) => ({ activeButton: +prevState.activeButton + 1 }));
      }
    }

    else if (i === 'prev') {
      const { activeButton } = this.state;
      if (activeButton === this.total) {
        this.initial = this.total - this.limit + 1
      }
      if (activeButton > 1) {
        this.setState((prevState) => ({ activeButton: prevState.activeButton - 1 }));
        if (activeButton <= this.initial) {
          this.initial = activeButton - this.limit;
        }
      }
    }

    else if (i === '>>' || i === "last") {
      this.initial = this.total - this.limit + 1
      this.setState((prevState) => ({ activeButton: this.total }));
    }

    else if (i === '<<' || i === "first") {
      this.initial = 1
      this.setState((prevState) => ({ activeButton: 1 }));
    }

    else {
      this.setState({ activeButton: +buttonValue });
    }
  };

  renderButtons() {
    const { activeButton } = this.state;
    const buttons = [];
    const { grid, withSpace } = this.props;
    let temp;
    let flag = false;
    let applyBorder = false;

    if ((grid && !withSpace) || (!grid && !withSpace)) {
      applyBorder = true;
    }

    if (this.initial >= 1) {
      temp = this.initial;
    } else {
      temp = 1;
    }

    for (let i = 1; i <= this.limit; i++) {
      if (temp !== this.total) {
        if (temp <= this.total) {
          const isFirstButton = temp === 1;
          const firstButton = isFirstButton && !withSpace;

          const btnClassNames = [
            styles.btnStyle,
            activeButton === temp ? styles.activeBtn : '',
            grid ? styles.gridStyle : '',
            withSpace ? styles.withSpace : '',
            firstButton ? styles.firstButton : '',
          ].join(' ');

          buttons.push(
            <button
              className={btnClassNames}
              key={temp}
              value={temp}
              onClick={(e) => this.handleClick(temp, e.target.value)}
            >
              {temp}
            </button>
          );

          if (temp === this.total - 1) {
            flag = true;
          }
        }
      }
      if (i === this.limit) {
        this.last = temp;
      }
      temp++;
    }

    if (!flag) {
      if (this.total > this.limit) {
        if (this.initial !== this.total - this.limit + 1) {
          buttons.push(
            <button
              className={`${styles.btnStyle} ${grid ? styles.gridStyle : ''} ${withSpace ? styles.withSpace : ''}`}
              key="ellipsis"
              disabled
            >
              ...
            </button>
          );
        }
      }
    }

    buttons.push(
      <button
        className={`${activeButton === this.total ? styles.activeBtn : ''} ${styles.btnStyle} ${grid ? styles.gridStyle : ''
          } ${withSpace ? styles.withSpace : ''} ${applyBorder === true ? styles.lastButton : ''}`}
        key={this.total}
        value={this.total}
        onClick={(e) => this.handleClick(this.total, e.target.value)}
      >
        {this.total}
      </button>
    );

    return buttons;
  }

  render() {
    const { next, last, arrows, className } = this.props;
    const { activeButton } = this.state;

    return (
      <div className={`${className? className: ''}`}>
        {last ? (
          <button
            className={`${styles.btnStyle} ${activeButton === 'first' ? styles.activeBtn : ''} `}
            onClick={() => this.handleClick('first')}
          >
            First
          </button>
        ) : arrows && (
          <button
            className={`${styles.btnStyle} ${activeButton === '<<' ? styles.activeBtn : ''}`}
            onClick={() => this.handleClick('<<')}
          >
            &lt;&lt;
          </button>
        )}

        {next ? (
          <button
            className={`${styles.btnStyle} ${activeButton === 'prev' ? styles.activeBtn : ''}`}
            onClick={() => this.handleClick('prev')}
          >
            Prev
          </button>
        ) : arrows &&  (
          <button
            className={`${styles.btnStyle} ${activeButton === 'prev' ? styles.activeBtn : ''}`}
            onClick={() => this.handleClick('prev')}
          >
            &lt;
          </button>
        )}

        {this.renderButtons()}

        {next ? (
          <button
            className={`${styles.btnStyle} ${activeButton === 'next' ? styles.activeBtn : ''}`}
            onClick={() => this.handleClick('next')}
          >
            Next
          </button>
        ) : arrows &&  (
          <button
            className={`${styles.btnStyle} ${activeButton === 'next' ? styles.activeBtn : ''}`}
            onClick={() => this.handleClick('next')}
          >
            &gt;
          </button>
        )}

        {last ? (
          <button
            className={`${styles.btnStyle} ${activeButton === 'last' ? styles.activeBtn : ''} `}
            onClick={() => this.handleClick('last')}
          >
            Last
          </button>
        ) : arrows &&  (
          <button
            className={`${styles.btnStyle} ${activeButton === '>>' ? styles.activeBtn : ''}`}
            onClick={() => this.handleClick('>>')}
          >
            &gt;&gt;
          </button>
        )}
      </div>
    );
  }
}

export default Pagination;
