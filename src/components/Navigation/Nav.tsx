import classNames from "classnames/bind";
import React, { useState } from "react";
import styles from "./scss/Nav.module.scss";
import { logo, cart, dropdown } from "../../assets/icons";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { routers } from "../../routers/Router";
const cx = classNames.bind(styles);
const Nav = () => {
  const [visible, setVisible] = useState(false);
  const handleVisibleMenu = () => {
    setVisible((prevVisible) => !prevVisible);
  };
  return (
    <nav className={cx("navigation_container")}>
      <div className={cx("navigation_left")}>
        <ul className={cx("navigation_left_link_nav")}>
          <li onClick={handleVisibleMenu}>
            <div className={cx("hambuger_icon", { visible: visible })}>
              <div className={cx("hambuger_icon_item")}></div>
              <div className={cx("hambuger_icon_item")}></div>
              <div className={cx("hambuger_icon_item")}></div>
            </div>
          </li>
          <li>
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </li>
          {routers
            .filter(
              (defaultFilter) =>
                defaultFilter.layout?.type === "DEFAULT" &&
                defaultFilter.status === true
            )
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
        <div className={cx("hambuger_nav", { visible: visible })}>
          <ul className={cx("hambuger_nav_link")}>
            {routers
              .filter(
                (defaultFilter) =>
                  defaultFilter.layout?.type === "DEFAULT" &&
                  defaultFilter.status === true
              )
              .map((value, index) => (
                <li key={index}>
                  <NavLink
                    to={value.path}
                    className={({ isActive }) =>
                      isActive ? cx("active") : cx("navigation_link")
                    }
                    onClick={() => setVisible(false)}
                  >
                    {value.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
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
        <Button>
          <NavLink to="/reservation">Reservation</NavLink>
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
