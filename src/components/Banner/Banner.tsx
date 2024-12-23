import classNames from "classnames/bind";
import React from "react";
import styles from "./scss/Banner.module.scss";
interface BannerProps {
  banner_background: string;
  banner_header: string;
  banner_description: string;
}
const cx = classNames.bind(styles);
const Banner = (props: BannerProps) => {
  const { banner_background, banner_description, banner_header } = props;

  return (
    <div className={cx("banner_container")}>
      <div
        className={cx("banner_row")}
        style={{ backgroundImage: `url(${banner_background})` }}
      >
        <div className={cx("banner_content")}>
          <div className={cx("banner_header")}>{banner_header}</div>
          <div className={cx("banner_description")}>{banner_description}</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
