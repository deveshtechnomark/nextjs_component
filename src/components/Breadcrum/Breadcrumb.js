
import React from 'react';
import '../css/bootstrapCustom.css'

export default class Breadcrumb extends React.Component {
  render() {
    var { items, variant, className, style, itemStyle} = this.props;
    const fontSize = style && style.fontSize ? style.fontSize : 'inherit';
    const containerStyle = { fontSize, ...style };

    return (
      <nav  style={containerStyle} aria-label="Breadcrumb">
        <ol className="breadcrumb">
          {items.map(({ url, label }, index) => (
            <li key={index} className={(`${className}`)}>
              {index > 0  && (
                <span className='text-primary mx-2'  >
                  {!variant ? variant = "/" : variant}  
                </span>
              )}
              <a
                href={url}
                className={`text-decoration-none  ${index === items.length - 1 ? 'text-secondary' : 'text-primary'} `}
              >
                {label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    );
  }
}


