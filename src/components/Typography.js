import React from 'react';
import Styles from "./scss/typography.scss"


export default class Typography extends React.Component {

    render() {
        const { style, className, type, children } = this.props;
    
        const typeToStyleMap = {
          h1: Styles.h1Style,
          h2: Styles.h2Style,
          h3: Styles.h3Style,
          h4: Styles.h4Style,
          h5: Styles.h5Style,
          h6: Styles.h6Style,
          title: Styles.titleStyle,
          "sub-title": Styles.sub_titleStyle,
          "table-title": Styles.table_titleStyle,
          lable: Styles.labelStyle,
          body: Styles.bodyStyle,
          button: Styles.buttonStyle,
          badge: Styles.badgeStyle,
          "tool-tip": Styles.tool_tipStyle,
        };
    
        const selectedStyle = typeToStyleMap[type] || Styles.bodyStyle;
    
        return (
          <div className={Styles.alvish}>
            <span
              {...this.props}
              style={{ ...style }}
              className={`${className} ${selectedStyle}`}
              type={type}
            >
              {children}
            </span>
          </div>
        );
      }
}

 
