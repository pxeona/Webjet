import React from "react";
import advertisement from "../../assets/images/advertisement.png";

import styles from "./Ad.module.css";

const ad = () => (
  <div className={styles.Ad}>
    <img src={advertisement} alt="Ad"></img>
  </div>
);

export default ad;
