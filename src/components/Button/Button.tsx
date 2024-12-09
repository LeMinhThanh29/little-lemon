import classNames from "classnames/bind";
import React from "react";
import styles from "./scss/Button.module.scss";
interface ButtonProps {
  text: string;
}

const cx = classNames.bind(styles);
const Button = (props: ButtonProps) => {
  const { text } = props;
  return <button className={cx("button_container")}>{text}</button>;
};

export default Button;
