import React, { ElementType, ReactNode } from "react";
import withSlider, { SliderProps } from "./withSlider";
import classNames from "classnames/bind";
import styles from "./scss/Slider.module.scss";
import { next, previous } from "../../assets/icons";
const cx = classNames.bind(styles);
const Slider = <T,>({
  ITEMS,
  action,
  listRef,
  children,
  title,
}: SliderProps<T>) => {
  return (
    <div className={cx("slider_list_container")}>
      <div className={cx("slider_list_header")}>
        <h1>{title}</h1>
        <div className={cx("slider_list_action")}>
          <button onClick={() => action("LEFT")}>
            <img src={previous} alt="" />
          </button>
          <button onClick={() => action("RIGHT")}>
            <img src={next} alt="" />
          </button>
        </div>
      </div>
      <div className={cx("slider_list_wrapper")}>
        <div className={cx("slider_list_row")} ref={listRef}>
          {ITEMS.map((value, index) => {
            const ChildComponent = children; // Gán children vào một biến
            return <ChildComponent {...value} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
const SliderBar = withSlider(Slider);
export default SliderBar;
