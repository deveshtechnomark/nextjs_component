import React from 'react';
import styles from "../scss/styles.module.scss";
import "../bootstrap/bootstrap-custom.css";

// import Typography  from 'typography';

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { className, label, id, invalid, intermediate, checked, disabled, name, onChange } = this.props;
        return (
            <>
                <input
                    className={`${className} ${styles.checkBox} ${invalid && styles.checkBoxInvalid} `}
                    type="checkbox"
                    id={id}
                    name={name}
                    checked={checked}
                    disabled={disabled}
                    onChange={onChange}
                />
                <label className={`${styles.label}`} htmlFor={id}>
                    <span
                        className={`${styles.checkBoxDiv} ${intermediate && styles.intermediate
                            }`}
                    >
                    </span>
                    {label}
                    {/* <Typography type="h6">{label}</Typography> */}
                </label>
            </>
        );
    }
}

export { CheckBox };
