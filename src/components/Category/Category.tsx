import React from "react";
import styles from "./scss/Category.module.scss";
import classNames from "classnames/bind";
import { CategoryProps } from "../../model/SelectModel";
const cx = classNames.bind(styles);

const Category = (props: CategoryProps) => {
  const { category_image, category_name } = props;
  return (
    <div className={cx("category_card_container")}>
      <div className={cx("category_card_row")}>
        <div className={cx("category_card_box_background")}>
          <img src={category_image} alt="" />
        </div>
        <p>{category_name}</p>
      </div>
    </div>
  );
};

export default Category;
