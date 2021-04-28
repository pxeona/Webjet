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
        //For all the numerical ratings, diamonds corresponding to the rating is displayed
        label = [...Array(parseInt(this.props.ratingFilter))].map((_, i) => {
          return <div className={styles.Diamond} key={i}></div>;
        });
        label = <div className={styles.Diamonds}>{label}</div>;
    }
    return (
      <div className={styles.Ratings}>
        <div className={styles.Rating}>
          <input
            type="checkbox"
            className={styles.CheckBox}
            onClick={(event) =>
              this.props.filterHandler(
                event,
                this.props.type,
                null,
                this.props.identifier
              )
            }
            checked={this.props.checked}
            readOnly
          ></input>
          {label}
        </div>
      </div>
    );
  }
}

export default Checkbox;
