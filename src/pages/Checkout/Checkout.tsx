import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import styles from "./scss/Checkout.module.scss";
import {
  invoiceDataDetail,
  InvoiceDetailModel,
  InvoiceModel,
  InvoiceModelFrom,
} from "../../model/InvoiceModel";
import Banner from "../../components/Banner/Banner";
import { restaurant_reservation } from "../../assets/image";
import UserFormWithHOC from "../../components/Form/FromCheckOut";
import { useContextApi } from "../../context/AppContext";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { confirm } from "../../hook/useAlert";
import { location } from "../../assets/icons";
const cx = classNames.bind(styles);
const Checkout = () => {
  const context = useContextApi();
  const { invoiceDetailId } = useParams();
  const [invoiceData, setInvoiceData] = useState<InvoiceDetailModel | null>(
    null
  );

  const generateId = () => {
    const randomPart = Math.random().toString(36).substr(2, 6).toUpperCase();
    const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // YYYYMMDD
    return `IVD_CKOUT_${datePart}_${randomPart}`;
  };
  const handleFormSubmit = (data: InvoiceModelFrom) => {
    if (!context) {
      return;
    }
    const { email, fullname, note, occasion, phone } = data;

    const dataSubmit: InvoiceModel = {
      email: email,
      fullname: fullname,
      invoiceId: generateId(),
      note: note,
      occasion: occasion,
      phone: phone,
      invoiceDetail: invoiceData ?? invoiceDataDetail,
    };

    confirm({
      icon: "question",
      text: "Are you sure you want to confirm this reservation?",
      title: "Confirm Reservation",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Confirmed!",
          "Your reservation has been confirmed.",
          "success"
        );
        context.dispatch({ type: "CHECKOUT", payload: dataSubmit });
        localStorage.removeItem(`${invoiceDetailId}`);
      }
    });
  };

  useEffect(() => {
    if (invoiceDetailId) {
      const storedData = localStorage.getItem(invoiceDetailId);
      if (storedData) {
        // Ép kiểu về đối tượng JSON
        setInvoiceData(JSON.parse(storedData));
      }
    }
  }, [invoiceDetailId]);

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
            <h1>Reservation Confirmation ⌨</h1>
            <UserFormWithHOC onSubmit={handleFormSubmit} />
          </article>
          {!invoiceData ? (
            <aside className={cx("checkout_aside")}></aside>
          ) : (
            <aside className={cx("checkout_aside")}>
              <div className={cx("checkout_container")}>
                <div className={cx("checkout_container_header")}>
                  <div className={cx("checkout_container_header_restaurant")}>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div
                    className={cx("checkout_container_header_restaurant_infor")}
                  >
                    <h3>Little Lemon</h3>
                    <span>
                      <img src={location} alt="" />
                      2036 2ND AVE, NEW YORK, NY 10029
                    </span>
                  </div>
                </div>
                <div className={cx("checkout_container_date_time")}>
                  <div className={cx("checkout_container_date")}>
                    <span>Date of checkout</span>
                    <p>{invoiceData.date}</p>
                  </div>
                  <div className={cx("checkout_container_time")}>
                    <span>Time of Reservation</span>
                    <p>{invoiceData.time}</p>
                  </div>
                </div>

                <div className={cx("checkout_container_seats")}>
                  <div className={cx("checkout_container_table_choose")}>
                    <div
                      className={cx("checkout_container_table_choose_items")}
                    >
                      <h3>Selected Table</h3>
                      <ul
                        className={cx(
                          "checkout_container_table_choose_items_list"
                        )}
                      >
                        {invoiceData.list_table.tables.map((value, index) => (
                          <li
                            key={index}
                            className={cx(
                              `checkout_container_table_choose_items_list_items_${value.table_type.type_name}`
                            )}
                          >
                            <p>{value.table_number}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={cx("checkout_container_table_breakpoint")}>
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
                <div className={cx("checkout_container_total")}>
                  <div className={cx("checkout_container_total_title")}>
                    <h3>Total Price</h3>
                    <span>(Including All Taxes)</span>
                  </div>

                  <p>${invoiceData.total}</p>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
};

export default Checkout;
