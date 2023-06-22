import React, { CSSProperties, ReactNode } from "react";
import "./Typography.css"

interface TypographyProps {
  style?: CSSProperties;
  className?: string;
  type?: string;
  children?: ReactNode;
}

interface ElementProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const elementMap: { [key: string]: React.ComponentType<ElementProps> } = {
  h1: ({ children, style, className }) => <h1 style={style} className={className}>{children}</h1>,
  h2: ({ children, style, className }) => <h2 style={style} className={className}>{children}</h2>,
  h3: ({ children, style, className }) => <h3 style={style} className={className}>{children}</h3>,
  h4: ({ children, style, className }) => <h4 style={style} className={className}>{children}</h4>,
  h5: ({ children, style, className }) => <h5 style={style} className={className}>{children}</h5>,
  h6: ({ children, style, className }) => <h6 style={style} className={className}>{children}</h6>,
  title: ({ children, style, className }) => <title style={style} className={className}>{children}</title>,
  "table-title": ({ children, style, className }) => (
    <table><caption style={style} className={className}>{children}</caption></table>
  ),
  label: ({ children, style, className }) => <label style={style} className={className}>{children}</label>,
  body: ({ children, style, className }) => <p style={style} className={className}>{children}</p>,
  button: ({ children, style, className }) => <button style={style} className={className}>{children}</button>,
  caption: ({ children, style, className }) => <table><caption style={style} className={className}>{children}</caption></table>
};

export default class Typography extends React.Component<TypographyProps> {
  render() {
    const { style, className, type, children } = this.props;

    const Element = elementMap[type] || "span";
    let styles = "";

    switch (type) {
      case "h1":
        styles = "text-[32px] font-normal md:text-[40px]";
        break;
      case "h2":
        styles = "text-black text-[28px] font-normal md:text-[32px]";
        break;
      case "h3":
        styles = "text-black text-[24px] font-normal md:text-[28px]";
        break;
      case "h4":
        styles = "text-black text-[20px] font-normal md:text-[24px]";
        break;
      case "h5":
        styles = "text-black text-[16px] font-normal md:text-[20px]";
        break;
      case "h6":
        styles = "text-black text-[14px] font-normal md:text-[16px]";
        break;
      case "title":
        styles = "text-black text-[16px] font-medium md:text-[20px]";
        break;
      case "sub-title":
        styles = "text-black text-[16px] font-medium md:text-[16px]";
        break;
      case "table-title":
        styles = "text-black text-[14px] width-max-content font-bold md:text-[16px]";
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
        styles = "text-black text-[10px] width-max-content font-normal md:text-[10px]";
        break;
      case "badge":
        styles = "text-black text-[10px] font-normal md:text-[10px]";
        break;
      case "tool-tip":
        styles = "text-black text-[16px] font-normal md:text-[14px] ";
        break;
      default:
        styles = "text-black text-[14px]  font-normal md:text-[16px]";
        break;
    }

    const combinedClassName = `${className} ${styles}`;

    return (
      <Element style={style} className={`Typography ${combinedClassName}`}>
        {children}
      </Element>
    );
  }
}
