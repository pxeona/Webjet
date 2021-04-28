import React from "react";
import styles from "./Filter.module.css";

import TextInput from "../../UI/TextInput/TextInput";
import CheckBox from "../../UI/CheckBox/CheckBox";

const filter = (props) => {
  let inputElement = null;
  switch (props.filter) {
    case "Hotel Name":
      inputElement = <TextInput type={props.filter} />;
      break;
    case "Quality Rating":
      inputElement = <CheckBox type={props.filter} />;
      break;
    default:
      return;
  }
  return (
    <div className={styles.Filter}>
      <h5 className={styles.Heading}>{props.filter}</h5>
      {inputElement}
    </div>
  );
};

export default filter;
