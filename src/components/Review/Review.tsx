import React, { useEffect } from "react";
import styles from "./scss/Review.module.scss";
import classNames from "classnames/bind";
import { ReviewModel, reviews } from "../../model/ReviewModel";
import { formattedDate } from "../../utils/DateFormatter";
const cx = classNames.bind(styles);

const Review = (props: ReviewModel) => {
  const {
    review_content,
    review_date,
    review_id,
    review_name,
    review_star,
    review_user_image,
  } = props;

  const starRating = (): string[] => {
    let starElement: string[] = [];
    for (let index = 0; index < review_star; index++) {
      starElement = [...starElement, "⭐"];
    }
    return starElement;
  };
  return (
    <div className={cx("review_card_container")}>
      <div className={cx("review_card_row")}>
        <div className={cx("review_card_rating")}>
          <p>Rating: {starRating()}</p>
        </div>
        <div className={cx("review_card_user_info")}>
          <div className={cx("review_card_user_avatar")}>
            <img src={review_user_image} alt="" />
          </div>
          <div className={cx("review_card_user_content")}>
            <p>{review_name}</p>
            <span>{formattedDate(review_date)}</span>
          </div>
        </div>
        <div className={cx("review_card_user_review")}>
          <p>{review_content}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
