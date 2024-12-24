import classNames from "classnames/bind";
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./scss/Checkout.module.scss";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import { InvoiceModel } from "../../model/InvoiceModel";
import Banner from "../../components/Banner/Banner";
import { restaurant_reservation } from "../../assets/image";
const cx = classNames.bind(styles);
const Checkout = () => {
  const { invoiceDetailId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvoiceModel>();

  const onSubmit = (data: InvoiceModel) => {
    console.log(data);
  };
  return (
    <section className={cx("checkout_container")}>
      <div className={cx("checkout_row")}>
        <div className={cx("checkout_banner")}>
          <Banner
            banner_background={restaurant_reservation}
            banner_description="Review your order details, including items, quantities, and prices. Choose your preferred shipping method, provide delivery information, and select a secure payment option. Don’t forget to apply any available discount codes. Once everything looks good, complete your purchase confidently and enjoy fast, reliable delivery to your address."
            banner_header="Checkout🍟🍔🌭"
          />
        </div>
        <div className={cx("checkout_body")}>
          <article className={cx("checkout_article")}>
            <h1>Reservation Confirmation</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={cx("form_col")}>
                <label htmlFor="fullname">Full Name:</label>
                <input
                  type="text"
                  id="fullname"
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
                  className={cx({ "input-error": errors.phone })}
                  {...register("phone", {
                    required: "Phone number is required",
                    valueAsNumber: true,
                    min: {
                      value: 1000000000,
                      message: "Phone number is too short",
                    },
                    max: {
                      value: 9999999999,
                      message: "Phone number is too long",
                    },
                  })}
                />
                {errors.phone && <span>{errors.phone.message}</span>}
              </div>

              <div className={cx("form_col")}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  className={cx({ "input-error": errors.email })}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && <span>{errors.email.message}</span>}
              </div>

              <div className={cx("form_col")}>
                <label htmlFor="note">Note:</label>
                <textarea
                  id="note"
                  className={cx({ "input-error": errors.note })}
                  {...register("note")}
                  aria-describedby="note-description"
                />
                <p id="note-description">
                  Please provide any additional notes.
                </p>
              </div>

              <button type="submit">Submit</button>
            </form>
          </article>
          <aside className={cx("checkout_aside")}>
            <div className={cx("checkout_checkout")}>
              <div className={cx("checkout_checkout_header")}>
                <h3>Your Reservation</h3>
                <span>Little Lemon Chicago</span>
              </div>
              <div className={cx("checkout_invoice_date_time")}>
                <div className={cx("checkout_invoice_date")}>
                  <span>Date of checkout</span>
                  <p>Select Date of Reservation</p>
                </div>
                <div className={cx("checkout_invoice_time")}>
                  <span>Time of Reservation</span>
                  <p> Select Time of Reservation</p>
                </div>
              </div>
              <div className={cx("checkout_invoice_seats")}>
                <div className={cx("checkout_invoice_table_choose")}>
                  <div className={cx("checkout_invoice_table_choose_items")}>
                    <h3>Selected Table</h3>
                    <ul
                      className={cx("checkout_invoice_table_choose_items_list")}
                    >
                      <li>
                        <p>a</p>
                      </li>
                    </ul>
                  </div>
                  <div className={cx("checkout_invoice_table_breakpoint")}>
                    <p>NON-REFUNDABLE</p>
                  </div>
                </div>
              </div>
              <div className={cx("reversation_fare_details")}>
                <h3>Fare Details</h3>
                <div className={cx("reversation_fare_details_body")}>
                  <p>Basic Fare:</p>
                  <ul className={cx("reversation_fare_details_list")}>
                    <li>$100-Mini</li>
                    <li>$150-Medium</li>
                    <li>$200-Large</li>
                    <li>$500-Vip</li>
                  </ul>
                </div>
              </div>
              <div className={cx("checkout_invoice_total")}>
                <div className={cx("checkout_invoice_total_title")}>
                  <h3>Total Price</h3>
                  <span>(Including All Taxes)</span>
                </div>
                <p>$sumTotal</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
