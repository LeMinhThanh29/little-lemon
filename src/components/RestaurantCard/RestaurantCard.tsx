import classNames from "classnames/bind";
import React from "react";
import styles from "./scss/RestaurantCard.module.scss";
import { RestaurantCardProps } from "../../Model/RestaurantCardModel";
const cx = classNames.bind(styles);
const RestaurantCard = (props: RestaurantCardProps) => {
  const { id, name, image, address, like, feedbackQuanlity, rating, save } =
    props;
  return (
    <div className={cx("restaurant_card_container")}>
      <div className={cx("restaurant_card_header")}>
        <div className={cx("restaurantCard_header_content")}>
          <div className={cx("restaurant_react")}>
            <div className={cx("restaurant_save")}>
              <img src="" alt="" />
              {save ? <img src="" alt="" /> : <img src="" alt="" />}
            </div>
            <div className={cx("restaurant_like")}>
              {like ? <img src="" alt="" /> : <img src="" alt="" />}
            </div>
          </div>
          <img src={image} alt="" />
        </div>
      </div>
      <div className={cx("restaurant_card_body")}>
        <div className={cx("restaurantCard_body_content")}>
          <h1 className={cx("title")}>{name}</h1>
          <p className={cx("address")}>{address}</p>
          <div className={cx("rating_feedback")}>
            <p className={cx("rating")}>{rating}</p>
            <span className={cx("feedback")}> `${feedbackQuanlity}` </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
