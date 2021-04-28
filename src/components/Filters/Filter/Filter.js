import React from "react";
import styles from "./Filter.module.css";

import TextInput from "../../UI/TextInput/TextInput";
import CheckBox from "../../UI/CheckBox/CheckBox";

const filter = (props) => {
  return (
    <div className={styles.Filter}>
      <h5 className={styles.Heading}>{props.filter}</h5>
      <TextInput />
      <CheckBox />
    </div>
  );
};

export default filter;
