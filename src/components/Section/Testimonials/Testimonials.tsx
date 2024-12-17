import React from "react";
import styles from "./scss/Testimonials.module.scss";
import classNames from "classnames/bind";
import Review from "../../Review/Review";
import { reviews } from "../../../model/ReviewModel";
const cx = classNames.bind(styles);
const Testimonials = () => {
  const top3Review = () => {
    return reviews
      .filter((value_Filter) => value_Filter.review_star === 5)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  };
  return (
    <section className={cx("testimonials_container")}>
      <h1>Testimonials</h1>
      <div className={cx("testimonials_row")}>
        {top3Review().map((value, index) => (
          <Review {...value} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
