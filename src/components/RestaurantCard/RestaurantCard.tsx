import classNames from "classnames/bind";
import React from "react";
import styles from "./scss/RestaurantCard.module.scss";
import { RestaurantCardProps } from "../../model/RestaurantCardModel";
import {
  heartIcon,
  no_react_heartIcon,
  no_react_saveIcon,
  saveIcon,
} from "../../assets/icons";

const cx = classNames.bind(styles);
const RestaurantCard = (props: RestaurantCardProps) => {
  const { id, name, image, address, like, feedbackQuanlity, rating, save } =
    props;
  return (
    <div className={cx("restaurant_card_container")}>
      <div className={cx("restaurant_card_header")}>
        <div className={cx("restaurant_card_header_content")}>
          <div className={cx("restaurant_react")}>
            <div className={cx("restaurant_save")}>
              <img src="" alt="" />
              {save ? (
                <img src={saveIcon} alt="" />
              ) : (
                <img src={no_react_saveIcon} alt="" />
              )}
            </div>
            <div className={cx("restaurant_like")}>
              {like ? (
                <img src={heartIcon} alt="" />
              ) : (
                <img src={no_react_heartIcon} alt="" />
              )}
            </div>
          </div>
          <img
            src={image}
            alt=""
            className={cx("restaurant_card_header_content_background")}
          />
        </div>
      </div>
      <div className={cx("restaurant_card_body")}>
        <div className={cx("restaurant_card_body_content")}>
          <h1 className={cx("title")}>{name}</h1>
          <p className={cx("address")}>{address}</p>
          <div className={cx("rating_feedback")}>
            <p className={cx("rating")}>Rating: {rating}⭐</p>
            <span className={cx("feedback")}> ({feedbackQuanlity}+) </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
