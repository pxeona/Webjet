import React, { Component } from "react";
import styles from "./Filters.module.css";
import Filter from "./Filter/Filter";

class Filters extends Component {
  state = {
    filterNames: ["Hotel Name", "Quality Rating"],
  };

  render() {
    const filters = this.state.filterNames.map((filter) => {
      return <Filter filter={filter} />;
    });
    return (
      <div className={styles.Filters}>
        <h4>Filter Results</h4>
        {filters}
      </div>
    );
  }
}

export default Filters;
