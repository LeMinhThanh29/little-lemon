import React from "react";
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
  return (
    <section className={cx("highlights_section_container")}>
    {/* Voucher Section */}
    <article className={cx("highlights_section_voucher_container")}>
      <SliderBar
        title="Voucher"
        CARD_WIDTH={500}
        CONTAINER_WIDTH={1440}
        ITEMS={voucherData}
      >
        {Voucher}
      </SliderBar>
    </article>

    {/* Popular Menu Section */}
    <article className={cx("highlights_section_popularMenu_container")}>
      <SliderBar
        title="Popular Menu"
        CARD_WIDTH={280}
        CONTAINER_WIDTH={1440}
        ITEMS={foodDataPopular}
      >
        {FoodCard}
      </SliderBar>
    </article>

    {/* Categories Section */}
    <article className={cx("highlights_section_categories_container")}>
      <SliderBar
        title="Our Regular Menu Pack"
        CARD_WIDTH={120}
        CONTAINER_WIDTH={1440}
        ITEMS={categories}
      >
        {Category}
      </SliderBar>
    </article>

    {/* Food List Section */}
    <article className={cx("highlights_section_foodList_container")}>
      <FoodCardList />
    </article>
  </section>
  );
};

export default Highlights;
