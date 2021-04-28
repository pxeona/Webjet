import React from "react";
import styles from "./Filter.module.css";

const filter = (props) => {
  return (
    <div className={styles.Filter}>
      <h5 className={styles.Heading}>{props.filter}</h5>
    </div>
  );
};

export default filter;
