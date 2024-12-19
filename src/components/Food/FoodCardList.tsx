import React, { CSSProperties } from "react";
import styles from "./scss/FoodCardList.module.scss";
import classNames from "classnames/bind";
import { foodData, foodDataPopular } from "../../model/FoodModel";
import FoodCard from "./FoodCard";
import Button from "../Button/Button";
const cx = classNames.bind(styles);
const FoodCardList = () => {
  const styles: CSSProperties = {
    maxWidth: "unset",
  };
  return (
    <div className={cx("food_card_list_container")}>
      <div className={cx("food_card_list_row")}>
        <div className={cx("food_card_list_filter")}>Filter</div>
        <div className={cx("food_card_list_grid")}>
          {foodData.map((value, index) => (
            <FoodCard {...value} style={styles} key={index}  />
          ))}
        </div>
        <div className={cx("food_card_list_action")}>
          <Button>See More</Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCardList;
