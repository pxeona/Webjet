import React from "react";
import styles from "./Filter.module.css";

import TextInput from "../../UI/TextInput/TextInput";
import CheckBox from "../../UI/CheckBox/CheckBox";

const filter = (props) => {
  let inputElement = null;
  switch (props.filter) {
    case "Hotel Name":
      inputElement = (
        <TextInput type={props.filter} filterHandler={props.filterChanged} />
      );
      break;
    case "Quality Rating":
      const ratingFilters = [...props.ratingFilters];
      inputElement = ratingFilters.map((ratingFilter, i) => {
        return (
          <CheckBox
            key={i}
            identifier={i}
            type={props.filter}
            filterHandler={props.filterChanged}
            ratingFilter={Object.keys(ratingFilter)[0]}
            checked={ratingFilter[Object.keys(ratingFilter)[0]]}
          />
        );
      });
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
