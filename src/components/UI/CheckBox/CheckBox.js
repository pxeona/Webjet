import React, { Component } from "react";

import styles from "./CheckBox.module.css";

class Checkbox extends Component {
  render() {
    let label = null;
    switch (this.props.ratingFilter) {
      case "All":
        label = <label className={styles.Label}>All</label>;
        break;
      case "Unrated":
        label = <label className={styles.Label}>Unrated</label>;
        break;
      default:
        label = [...Array(parseInt(this.props.ratingFilter))].map((_, i) => {
          return <div className={styles.Diamond} key={i}></div>;
        });
        label = <div className={styles.Diamonds}>{label}</div>;
    }
    return (
      <div className={styles.Ratings}>
        <div className={styles.Rating}>
          <input type="checkbox" className={styles.CheckBox}></input>
          {label}
        </div>
      </div>
    );
  }
}

export default Checkbox;
