import React, { Component } from "react";
import styles from "./Filters.module.css";

class Filters extends Component {
  state = {
    filterNames: ["Hotel Name", "Quality Rating"],
  };

  render() {
    return (
      <div className={styles.Filters}>
        <h3>Filter Results</h3>
      </div>
    );
  }
}

export default Filters;
