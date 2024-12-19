import React, { useEffect, useRef, useState } from "react";
import styles from "./scss/Highlights.module.scss";
import classNames from "classnames/bind";
import { voucherData } from "../../../model/VoucherModel";
import SliderBar from "../../Slider/Slider";
import Voucher from "../../Voucher/Voucher";
import { foodDataPopular } from "../../../model/FoodModel";
import FoodCard from "../../Food/FoodCard";
import Category from "../../Category/Category";
import { categories } from "../../../model/SelectModel";
import FoodCardList from "../../Food/FoodCardList";
const cx = classNames.bind(styles);
const Highlights = () => {
  const refWidth = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const handleResize = () => {
    if (!refWidth.current) {
      return;
    }
    setContainerWidth(refWidth.current.clientWidth);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", handleResize);
  });

  return (
    <section className={cx("highlights_section_container")}>
      {/* Voucher Section */}
      <article
        className={cx("highlights_section_voucher_container")}
        ref={refWidth}
      >
        <SliderBar
          title="Voucher"
          CONTAINER_WIDTH={containerWidth}
          ITEMS={voucherData}
        >
          {Voucher}
        </SliderBar>
      </article>

      {/* Popular Menu Section */}
      <article
        className={cx("highlights_section_popularMenu_container")}
        ref={refWidth}
      >
        <SliderBar
          title="Popular Menu"
          CONTAINER_WIDTH={containerWidth}
          ITEMS={foodDataPopular}
        >
          {FoodCard}
        </SliderBar>
      </article>

      {/* Categories Section */}
      <article
        className={cx("highlights_section_categories_container")}
        ref={refWidth}
      >
        <SliderBar
          title="Our Regular Menu Pack"
          CONTAINER_WIDTH={containerWidth}
          ITEMS={categories}
        >
          {Category}
        </SliderBar>
      </article>

      {/* Food List Section */}
      <article
        className={cx("highlights_section_foodList_container")}
        ref={refWidth}
      >
        <FoodCardList />
      </article>
    </section>
  );
};

export default Highlights;
