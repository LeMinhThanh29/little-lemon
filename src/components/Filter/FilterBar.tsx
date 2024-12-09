import classNames from "classnames/bind";
import React from "react";
import styles from "./scss/FilterBar.module.scss";
const cx = classNames.bind(styles);
const FilterBar = () => {
  return ( 
    <div className={cx("filterBar_container")}>
      <div className={cx("filterBar_row")}>
        <div className={cx("filterBar_header")}>
          <div className={cx("filterBar_header_items")}>Revertation</div>
          <div className={cx("filterBar_header_items")}>Food</div>
        </div>
        <div className={cx("filterBar_body")}>
          
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
