import React from "react";
import styles from "./scss/Highlights.module.scss";
import classNames from "classnames/bind";
import { voucherData } from "../../../Model/VoucherModel";
import SliderBar from "../../Slider/Slider";
import Voucher from "../../Voucher/Voucher";
import { foodData } from "../../../Model/FoodModel";
import FoodCard from "../../Food/FoodCard";

const cx = classNames.bind(styles);
const Highlights = () => {
  return (
    <section className={cx("highlights_section_container")}>
      <SliderBar
        title="Voucher"
        CARD_WIDTH={500}
        CONTAINER_WIDTH={1440}
        ITEMS={voucherData}
      >
        {Voucher}
      </SliderBar>

      <SliderBar
        title="Popular Menu"
        CARD_WIDTH={320}
        CONTAINER_WIDTH={1440}
        ITEMS={foodData}
      >
        {FoodCard}
      </SliderBar>
    </section>
  );
};

export default Highlights;
