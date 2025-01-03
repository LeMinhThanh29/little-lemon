import React, { useRef } from "react";
import styles from "./scss/DateTimePicker.module.scss";
import classNames from "classnames/bind";
type DATE_TIME = "date" | "time";
interface DateTimeProps {
  icon?: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  type: DATE_TIME;
  data: string | null;
  name: string;
  id: string;
}
const cx = classNames.bind(styles);
const DateTimePicker = (props: DateTimeProps) => {
  const { handleChange, type, data, icon, name, id } = props;
  const ref = useRef<HTMLInputElement | null>(null);

  const handleLabelClick = (event: React.MouseEvent) => {
    if (!ref.current) {
      return;
    }
    ref.current.showPicker(); // dùng để show hộp picker của input
  };
  return (
    <>
      <label
        className={cx("placeholder")}
        htmlFor={id}
        onClick={(e) => handleLabelClick(e)}
      >
        <img src={icon} alt="" />
        <p className={cx("filter_name")}>{data || `Select ${type === "date" ? "Date" : "Time"}`}</p>
      </label>
      <input
        ref={ref}
        type={type}
        name={name}
        id={id}
        value={data || ""} // Sử dụng value thay vì defaultValue
        onChange={handleChange}
      />
    </>
  );
};

export default DateTimePicker;
