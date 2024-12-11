import React, { memo } from "react";
import styles from "./scss/Slider.module.scss";
import classNames from "classnames/bind";
import { next, previous } from "../../assets/icons";
import withSlider, { SliderProps } from "./withSlider";
import { RestaurantCardProps } from "../../Model/RestaurantCardModel";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
const cx = classNames.bind(styles);
const Slider: React.FC<SliderProps<RestaurantCardProps>> = ({
  ITEMS,
  action,
  listRef,
}) => {
  return (
    <div className={cx("restaurant_list_container")}>
      <div className={cx("restaurant_list_header")}>
        <h1>Little Lemon's Branches</h1>
        <div className={cx("restaurant_list_action")}>
          <button onClick={() => action("LEFT")}>
            <img src={previous} alt="" />
          </button>
          <button onClick={() => action("RIGHT")}>
            {" "}
            <img src={next} alt="" />
          </button>
        </div>
      </div>
      <div className={cx("restaurant_list_wrapper")}>
        <div className={cx("restaurant_list_row")} ref={listRef}>
          {ITEMS.map((value, index) => (
            <RestaurantCard {...value} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
const SliderWrapped = withSlider(Slider);
export default memo(SliderWrapped);
