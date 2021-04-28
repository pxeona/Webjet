import React from "react";
import styles from "./Filter.module.css";

import TextInput from "../../UI/TextInput/TextInput";

const filter = (props) => {
  return (
    <div className={styles.Filter}>
      <h5 className={styles.Heading}>{props.filter}</h5>
      <TextInput />
    </div>
  );
};

export default filter;
