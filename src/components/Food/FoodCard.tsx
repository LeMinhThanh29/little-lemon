import React from "react";
import styles from "./scss/FoodCard.module.scss";
import classNames from "classnames/bind";
import { FoodProps } from "../../Model/FoodModel";
const cx = classNames.bind(styles);
const FoodCard = (props: FoodProps) => {
  const { food_description, food_id, food_image, food_name, food_price } =
    props;
  return (
    <div className={cx("food_card_container")}>
      <div className={cx("food_card_row")}>
        <div className={cx("food_card_header")}>
          <img src={food_image} alt="" />
        </div>
        <div className={cx("food_card_body")}>
          <div className={cx("food_card_body_content")}>
            <p>{food_name}</p>
            <p>${food_price}</p>
          </div>
          <div className={cx("food_card_body_infomation")}>
            <p>{food_description}</p>
          </div>
          <div className={cx("food_card_body_delivery")}>
            <p>Delivery</p>
            <img src="" alt="" />
          </div>
        </div>
        <div className={cx("food_card_footer")}>
          <button>See More Info</button>
          <button>
            <img src="" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
