import React from "react";
import MaskedInput from "react-text-mask";
import styles from './styles.css';

export default class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
    };
  }

  handleChange(event) {
    this.setState({ phoneNumber: event.target.value });
  }

  render() {
    const { type, value, className } = this.props
    if (value) {
      var array = value.split("");
    }

    return (
      <>
        <h1>Input Mask</h1>

        {type === "credit" && <MaskedInput className={`${styles.my_input} ${className}`}
          mask={[/[1-9]/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/,]} placeholder={`xxxx xxxx xxxx 1234`} />}

        {type === "phone" && <MaskedInput className={`${styles.my_input} ${className}`} mask={[/[1-9]/, /\d/, /\d/, /\d/, /\d/,  ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/]} placeholder="9874 563 214" />}

        {type === "time" && <MaskedInput className={`${styles.my_input} ${className}`} mask={[/[1-9]/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/]} placeholder={`15:58:25`} />}

        {type === "date" && <MaskedInput className={`${styles.my_input} ${className}`} mask={[/[1-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/]} />}

        {type === "delimiter" && <MaskedInput className={`${styles.my_input} ${className}`} mask={[/\d/, /\d/, /\d/, '·', /\d/, /\d/, /\d/, '·', /\d/, /\d/, /\d/]} placeholder={`Delimiter: '·'`}/>}

        {type === "customDelimeter" && <MaskedInput className={`${styles.my_input} ${className}`} mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]} />}

        {type === "prefix" && (
          <MaskedInput
            className={`${styles.my_input} ${className}`}
            mask={[
              ...array.slice(0, array.length),
              ' ', /[A-Za-z]/, /[A-Za-z]/, /[A-Za-z]/, // Include alphabetic characters
              ' ', /\d/, /\d/, /\d/,
              ' ', /\d/, /\d/, /\d/,
              ' ', /\d/, /\d/, /\d/, /\d/
            ]}
            placeholder={`${array.slice(0, array.length).join('')} XXX XXX XXXX`}
          />
        )}
      </>
    );
  }
}