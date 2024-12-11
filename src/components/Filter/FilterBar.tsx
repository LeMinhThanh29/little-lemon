import classNames from "classnames/bind";
import React, { useState } from "react";
import styles from "./scss/FilterBar.module.scss";
import {
  date,
  time,
  quality,
  find,
  findFood,
  inputsearchFood,
} from "../../assets/icons";
import DateTimePicker from "../DateTimePicker/DateTimePicker";
import Select from "../Select/Select";
import { categoryItems } from "../../Data/category";
import FilterBarFood from "./FilterBarFood";
import FilterBarRestaurant from "./FilterBarRestaurant";

const cx = classNames.bind(styles);
const FilterBar = () => {
  // State
  const [switchBox, setSwitchBox] = useState<boolean>(false);
  const [statusLabel, setStatusLabel] = useState<boolean[]>([true, false]);

  // Ref
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  //Function
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };

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
            Revertation
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
