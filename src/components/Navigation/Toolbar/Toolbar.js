import React from "react";
import Logo from "../../Logo/Logo";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

import styles from "./Toolbar.module.css";

const toolbar = () => (
  <header className={styles.Toolbar}>
    <HamburgerMenu />
    <div className={styles.Logo}>
      <Logo />
    </div>
  </header>
);

export default toolbar;
