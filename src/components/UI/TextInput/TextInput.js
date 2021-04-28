import React, { Component } from "react";

import styles from "./TextInput.module.css";

class TextInput extends Component {
  state = {
    inputName: "",
  };

  nameChangedHandler = (event) => {
    this.setState({
      inputName: event.target.value,
    });
  };

  render() {
    return (
      <div className={styles.TextBlock}>
        <input
          value={this.state.inputName}
          className={styles.TextInput}
          placeholder="Enter Hotel Name"
          onChange={this.nameChangedHandler}
        />
        <button
          className={styles.Button}
          onClick={(event) =>
            this.props.filterHandler(
              event,
              this.props.type,
              this.state.inputName,
              null
            )
          }
        >
          Go
        </button>
      </div>
    );
  }
}

export default TextInput;
