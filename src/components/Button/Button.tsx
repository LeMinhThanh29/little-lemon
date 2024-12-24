import classNames from "classnames/bind";
import React, { ReactNode } from "react";
import styles from "./scss/Button.module.scss";
interface ButtonProps {
  children: ReactNode;
  action?: () => void;
}

const cx = classNames.bind(styles);
const Button = (props: ButtonProps) => {
  const { children, action } = props;
  return (
    <button className={cx("button_container")} onClick={action}>
      {children}
    </button>
  );
};

export default Button;
