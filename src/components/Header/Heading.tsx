import React from "react";
import Nav from "../Navigation/Nav";
import styles from "./scss/Heading.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Heading = () => {
  return (
    <header className={cx("heading_container")}>
      <Nav />
    </header>
  );
};

export default Heading;
