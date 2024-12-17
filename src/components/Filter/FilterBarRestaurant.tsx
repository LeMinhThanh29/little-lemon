import classNames from "classnames/bind";
import React, { useState } from "react";
import DateTimePicker from "../DateTimePicker/DateTimePicker";
import { date, find, quality, time } from "../../assets/icons";
import styles from "./scss/FilterBarRestaurant.module.scss";
const cx = classNames.bind(styles);
const FilterBarRestaurant = () => {
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

  return (
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
        <p> Search</p>
      </div>
    </div>
  );
};

export default FilterBarRestaurant;
