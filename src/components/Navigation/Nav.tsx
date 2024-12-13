import classNames from "classnames/bind";
import React from "react";
import styles from "./scss/Nav.module.scss";
import { logo, cart, dropdown, hamburger_menu } from "../../assets/icons";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { routers } from "../../routers/Router";
const cx = classNames.bind(styles);
const Nav = () => {
  return (
    <nav className={cx("navigation_container")}>
      <div className={cx("navigation_left")}>
        <ul>
          <li>
            <img src={hamburger_menu} alt="" />
          </li>
          <li>
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </li>
          {routers
            .filter((defaultFilter) => defaultFilter.layout?.type === "DEFAULT")
            .map((value, index) => (
              <li key={index}>
                <NavLink
                  to={value.path}
                  className={({ isActive }) =>
                    isActive ? cx("active") : cx("navigation_link")
                  }
                >
                  {value.name}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
      <div className={cx("navigation_right")}>
        <div className={cx("dropdown")}>
          <div className={cx("dropdown_title")}>
            <span>Account</span>
            <img src={dropdown} alt="" />
          </div>
          <div className={cx("dropdown_items")}>
            <p>Sign-In</p>
            <p>Sign-Up</p>
          </div>
        </div>
        <div className={cx("cicle")}>
          <img src={cart} alt="" />
        </div>
        <Button>Revertation</Button>
      </div>
    </nav>
  );
};

export default Nav;
