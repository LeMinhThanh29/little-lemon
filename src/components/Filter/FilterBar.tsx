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
          {switchBox && true ? (
            <div className={cx("filterBar_body_row_food")}>
              <div className={cx("filterBar_items")}>
                <img src={findFood} alt="" />
                <Select
                  id="filterBar_items_type_food"
                  name="filterBar_items_type_food"
                  list={categoryItems}
                  handleChange={handleSelectTypeFood}
                />
              </div>
              <div className={cx("filterBar_items")}>
                <img src={inputsearchFood} alt="" />
                <input
                  type="text"
                  name="search_food"
                  id="search_food"
                  placeholder="Search for food..."
                />
              </div>
              <div className={cx("filterBar_items_button")}>
                <img src={find} alt="" />
                Search
              </div>
            </div>
          ) : (
            <div className={cx("filterBar_body_row")}>
              <div className={cx("filterBar_items")}>
                <DateTimePicker
                  icon={date}
                  type="date"
                  handleChange={handleDateChange}
                  data={selectedDate}
                  id="date"
                  name="date"
                />
              </div>
              <div className={cx("filterBar_items")}>
                <DateTimePicker
                  icon={time}
                  type="time"
                  handleChange={handleTimeChange}
                  data={selectedTime}
                  id="time"
                  name="time"
                />
              </div>
              <div className={cx("filterBar_items")}>
                <img src={quality} alt="" />
                <input
                  type="number"
                  name="member_quanlity"
                  id="member_quanlity"
                  placeholder="Enter Quantity "
                />
              </div>
              <div className={cx("filterBar_items_button")}>
                <img src={find} alt="" />
                Search
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
