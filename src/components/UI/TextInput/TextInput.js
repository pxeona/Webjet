import React, { Component } from "react";

import styles from "./TextInput.module.css";

class TextInput extends Component {
  state = {
    inputName: "",
  };

  render() {
    return (
      <div className={styles.TextBlock}>
        <input className={styles.TextInput} placeholder="Enter Hotel Name" />
        <button className={styles.Button}>Go</button>
      </div>
    );
  }
}

export default TextInput;
