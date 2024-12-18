import React, { useEffect, useRef, useState } from "react";
import styles from "./scss/Hero.module.scss";
import classNames from "classnames/bind";
import {
  Mario_and_Adrian,
  restauranfood,
  restaurant,
} from "../../../assets/image";
import FilterBar from "../../Filter/FilterBar";
import { restaurantData } from "../../../model/RestaurantCardModel";
import SliderBar from "../../Slider/Slider";
import RestaurantCard from "../../RestaurantCard/RestaurantCard";
const cx = classNames.bind(styles);
const CARD_WIDTH: number = 230;
const Hero = () => {
  const refWidth = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (refWidth.current) {
        setContainerWidth(refWidth.current.clientWidth);
      }
    });
    return window.removeEventListener("resize", () => {
      if (refWidth.current) {
        setContainerWidth(refWidth.current.clientWidth);
      }
    });
  }, []);

  return (
    <section className={cx("hero_section_container")}>
      <div className={cx("hero_section_row")}>
        <div className={cx("hero_section_left")}>
          <div className={cx("hero_section_left_row")}>
            <div className={cx("hero_section_left_content")}>
              <h1>
                Little <span>Lemon</span>
              </h1>
              <span className={cx("current_branch")}>Chicago</span>
              <p>
                Little Lemon is a Mediterranean-inspired bar and small plates
                restaurant focusing on fresh produce and big flavours, offering
                bespoke cocktails and a premium wine selection.
              </p>
            </div>
            <div className={cx("hero_section_left_search")}>
              <h1>Easily search for Tables or Food with our tool.</h1>
              <FilterBar />
            </div>
            <div
              className={cx("hero_section_left_slider_restaurant")}
              ref={refWidth}
            >
              <div>
                <SliderBar
                  title="Little Lemon's Branches"
                  CARD_WIDTH={CARD_WIDTH}
                  CONTAINER_WIDTH={containerWidth}
                  ITEMS={restaurantData}
                >
                  {RestaurantCard}
                </SliderBar>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("hero_section_right")}>
          <div className={cx("image_container")}>
            <img src={restauranfood} alt="" />
            <img src={Mario_and_Adrian} alt="" />
            <img src={restaurant} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
