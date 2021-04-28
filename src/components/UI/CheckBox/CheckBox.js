import React, { Component } from "react";

import styles from "./CheckBox.module.css";

class Checkbox extends Component {
  render() {
    return (
      <div className={styles.Ratings}>
        <div className={styles.Rating}>
          <input type="checkbox" className={styles.CheckBox}></input>
          <div className={styles.Diamond}></div>
        </div>
      </div>
    );
  }
}

export default Checkbox;
