import React from "react";
import { UseFormReturn } from "react-hook-form";
import classNames from "classnames/bind";
import styles from "./scss/From.module.scss";
import { InvoiceModelFrom, occasion } from "../../model/InvoiceModel";
import withFrom from "./withFrom";
const cx = classNames.bind(styles);
interface FromCheckOutProps {
  form: UseFormReturn<InvoiceModelFrom>;
  errors: any;
}
const FromCheckOut = (props: FromCheckOutProps) => {
  const {
    errors,
    form: { register },
  } = props;
  return (
    <>
      <div className={cx("form_col")}>
        <label htmlFor="fullname">Full Name:</label>
        <input
          type="text"
          id="fullname"
          placeholder="Please enter Full Name"
          className={cx({ "input-error": errors.fullname })}
          {...register("fullname", {
            required: "Full name is required",
          })}
        />
        {errors.fullname && <span>{errors.fullname.message}</span>}
      </div>

      <div className={cx("form_col")}>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          placeholder="Please enter Phone"
          className={cx({ "input-error": errors.phone })}
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^(03|05|07|08|09)[0-9]{8}$/, // Regex cho số điện thoại Việt Nam
              message: "Invalid phone number format",
            },
            minLength: {
              value: 10,
              message: "Phone number must be at least 10 digits",
            },
            maxLength: {
              value: 11,
              message: "Phone number must be at most 11 digits",
            }
          })}
        />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>

      <div className={cx("form_col")}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Please enter Email"
          className={cx({ "input-error": errors.email })}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div className={cx("form_col")}>
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          className={cx({ "input-error": errors.occasion })}
          {...register("occasion", {
            required: "Occasion is required",
          })}
        >
          <option value="">Select Occasion</option>
          {occasion.map((value, index) => (
            <option value={value} key={index}>
              {value}
            </option>
          ))}
        </select>
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div className={cx("form_col")}>
        <label htmlFor="note">Note:</label>
        <textarea
          id="note"
            placeholder="Please enter Note"
          className={cx({ "input-error": errors.note })}
          {...register("note")}
          aria-describedby="note-description"
        />
        <p id="note-description">Please provide any additional notes.</p>
      </div>
      <button type="submit">Submit</button>
    </>
  );
};
const UserFormWithHOC = withFrom<InvoiceModelFrom>(FromCheckOut);
export default UserFormWithHOC;
