import classNames from "classnames/bind";
import React, { useState } from "react";
import styles from "./scss/FilterBar.module.scss";
import { categoryItems } from "../../data/category";
import FilterBarFood from "./FilterBarFood";
import FilterBarRestaurant from "./FilterBarRestaurant";

const cx = classNames.bind(styles);
const FilterBar = () => {
  // State
  const [switchBox, setSwitchBox] = useState<boolean>(false);
  const [statusLabel, setStatusLabel] = useState<boolean[]>([true, false]);

  const handleStatusClick = (status: boolean) => {
    setSwitchBox(status);
    const statusChange = [...statusLabel];
    statusChange[0] = !status; // tắt trạng thái hiện tại
    statusChange[1] = status; // cập nhật trạng thái mới
    setStatusLabel(statusChange);
  };

  const handleSelectTypeFood = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    console.log("");
  };

  return (
    <div className={cx("filterBar_container")}>
      <div className={cx("filterBar_row")}>
        <div className={cx("filterBar_header")}>
          <div
            className={cx("filterBar_header_items", {
              switchStatus: statusLabel[0],
            })}
            onClick={() => handleStatusClick(false)}
          >
            Reservation
          </div>
          <div
            className={cx("filterBar_header_items", {
              switchStatus: statusLabel[1],
            })}
            onClick={() => handleStatusClick(true)}
          >
            Food
          </div>
          <div
            className={cx("filterBar_header_switch_box", {
              switchActive: switchBox,
            })}
          ></div>
        </div>
        <div className={cx("filterBar_body")}>
          {switchBox ? (
            <FilterBarFood
              items={categoryItems}
              handleAction={handleSelectTypeFood}
            />
          ) : (
            <FilterBarRestaurant />
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
