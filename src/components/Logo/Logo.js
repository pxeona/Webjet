import React from "react";
import webjetLogo from "../../assets/images/Webjet_com_au_red_rgb.jpg";

import styles from "./Logo.module.css";

const logo = () => (
  <img className={styles.LogoImage} src={webjetLogo} alt="Webjet"></img>
);

export default logo;
