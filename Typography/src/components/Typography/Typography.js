import React from "react";

export default class Typography extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      style,
      className,
      type,
      children,
    } = this.props;

    let styles = '';
    switch (type) {
      case "h1":
        styles = "text-[32px] font-normal md:text-[40px]" ;
        break;
      case "h2":
        styles = "text-black  text-[28px] font-normal md:text-[32px] ";
        break;
      case "h3":
        styles = "text-black text-[24px] font-normal md:text-[28px]";
        break;
      case "h4":
        styles = "text-black text-[20px] font-normal md:text-[24px] ";
        break;
      case "h5":
        styles = "text-black text-[16px]  font-normal md:text-[20px]";
        break;
      case "h6":
        styles = "text-black text-[14px] font-normal md:text-[16px]";
        break;
      case "title":
        styles = "text-black text-[16px] font-medium md:text-[20px]";
        break;
      case "sub-title":
        styles = "text-black text-[16px] font-medium md:text-[16px] ";
        break;
      case "table-title":
        styles = "text-black text-[14px] font-bold md:text-[16px]";
        break;
      case "label":
        styles = "text-black text-[12px] font-normal md:text-[14px]";
        break;
      case "body":
        styles = "text-black text-[14px] font-normal md:text-[16px]";
        break;
      case "button":
        styles = "text-black text-[16px] font-normal md:text-[16px]";
        break;
      case "caption":
        styles = "text-black text-[10px] font-normal md:text-[10px]";
        break;
      case "badge":
        styles = "text-black text-[10px] font-normal md:text-[10px]";
        break;
      case "tool-tip":
        styles = "text-black text-[16px] font-normal md:text-[14px]";
        break;
      default:
        styles = "text-black text-[14px] font-normal md:text-[16px]";
        break;
    }

    const combinedClassName = `${styles} ${className}`;
    return (
      <div className="mx-auto p-0 box-border">
        <span
          {...this.props}
          style={style}
          type={type}
          className={combinedClassName}
        >
          {children}
        </span>
      </div>
    );
  }
}
