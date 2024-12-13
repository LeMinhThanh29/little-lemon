import classNames from "classnames/bind";
import React, { ReactNode } from "react";
import styles from "./scss/Button.module.scss";
interface ButtonProps {
  children: ReactNode;
}

const cx = classNames.bind(styles);
const Button = (props: ButtonProps) => {
  const { children } = props;
  return <button className={cx("button_container")}>{children}</button>;
};

export default Button;
