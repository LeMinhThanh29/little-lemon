import classNames from "classnames/bind";
import React from "react";
import styles from "./scss/Footer.module.scss";
import { lemon_voucher } from "../../assets/image";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx("footer_container")}>
      <div className={cx("footer_row")}>
        <div className={cx("footer_header")}>
          <img src={lemon_voucher} alt="" />
          <h1>Little Lemon Restaurant </h1>
        </div>
        <div className={cx("footer_body")}>
          <div className={cx("footer_left")}>
            <h1>Subscribe Our Newsletter</h1>
            <div className={cx("footer_left_body")}>
              <div className={cx("footer_left_contact")}>
                <input type="text" />
                <Button>Send</Button>
              </div>
              <ul className={cx("footer_left_list_social")}>
                <li>
                  <img src="" alt="" />
                </li>
                <li>
                  <img src="" alt="" />
                </li>
                <li>
                  <img src="" alt="" />
                </li>
                <li>
                  <img src="" alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className={cx("footer_right")}>
            <div className={cx("footer_right_link")}>
              <h3>Doormat Navigation</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/">Reservations</Link>
                </li>
                <li>
                  <Link to="/order_online">Order Online</Link>
                </li>
              </ul>
            </div>

            <div className={cx("footer_right_link")}>
              <h3>Contact</h3>
              <ul>
                <li>
                  <Link to="/">Address</Link>
                </li>
                <li>
                  <Link to="/">Phone Number</Link>
                </li>
                <li>
                  <Link to="/">Email</Link>
                </li>
              </ul>
            </div>
            <div className={cx("footer_right_link")}>
              <h3>Social Media Links</h3>
              <ul>
                <li>
                  <Link to="/">Facebook</Link>
                </li>
                <li>
                  <Link to="/">Twitter</Link>
                </li>
                <li>
                  <Link to="/">Instagram</Link>
                </li>
              </ul>
            </div>
            <div className={cx("footer_right_link")}>
              <h3>Account</h3>
              <ul>
                <li>
                  <Link to="/">Sign In</Link>
                </li>
                <li>
                  <Link to="/">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
