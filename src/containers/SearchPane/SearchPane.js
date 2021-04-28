import React, { Component } from "react";
import styles from "./SearchPane.module.css";

import Filters from "../../components/Filters/Filters";

class Search extends Component {
  render() {
    return (
      <div className={styles.Search}>
        <div className={styles.MainContent}>
          <Filters />
        </div>
      </div>
    );
  }
}

export default Search;
