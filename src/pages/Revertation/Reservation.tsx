import React, { useMemo, useRef, useState } from "react";
import Banner from "../../components/Banner/Banner";
import { restaurant_reservation } from "../../assets/image";
import classNames from "classnames/bind";
import styles from "./scss/Reservation.module.scss";
import { useContextApi } from "../../context/AppContext";
import { TableModel, TableStatus, TableType } from "../../model/TableModel";
import { MINI, MEDIUM, LARGE, VIP, Checkout, door } from "../../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { formattedDate } from "../../utils/DateFormatter";
import { InvoiceDetailModel } from "../../model/InvoiceModel";
import { errorAlert } from "../../hook/useAlert";

const cx = classNames.bind(styles);

const Reservation = () => {
  const context = useContextApi();
  const navigate = useNavigate();
  const dateRef = useRef<HTMLInputElement | null>(null);
  const [dateState, setDateState] = useState<string>("");
  const timeRef = useRef<HTMLInputElement | null>(null);
  const [timeState, setTimeState] = useState<string>("");
  const listType: TableType[] = ["MINI", "MEDIUM", "LARGE", "VIP"];
  const statusTable: TableStatus[] = ["AVAILABLE", "SELECTED", "RESERVED"];
  const tableIcons = {
    MINI: MINI,
    MEDIUM: MEDIUM,
    LARGE: LARGE,
    VIP: VIP,
  };
  const handleCheck = (table: TableModel) => {
    if (table.table_status === "RESERVED") {
      errorAlert({
        title: "Table Reservation Unavailable",
        text: "The selected table is currently reserved. Please choose another table or try again later. We apologize for the inconvenience.",
        icon: "error",
      });
      return;
    }
    context?.dispatch({ type: "CHOOSE", payload: table });
  };
  const sumTotal = useMemo(() => {
    return (
      context?.initState.invoice.tables?.reduce(
        (previous, currentValue) =>
          previous + (currentValue.table_type?.type_table_price || 0),
        0
      ) || 0
    );
  }, [context?.initState.invoice.tables]);

  const selectDate = () => {
    if (!dateRef.current) {
      return;
    }
    dateRef.current.showPicker();
  };
  const selectTime = () => {
    if (!dateState) {
      errorAlert({
        title: "Date Selection Required",
        text: "Please select a date before proceeding.",
        icon: "warning",
      });
      return;
    }
    if (!timeRef.current) {
      return;
    }
    timeRef.current.showPicker();
  };
  const formatTime = () => {
    if (dateState) {
      const dateTime = `${dateState}T${timeState}`;
      return new Intl.DateTimeFormat("default", {
        hour12: true,
        hour: "numeric",
        minute: "numeric",
      }).format(new Date(dateTime));
    }
    return;
  };
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateState(event.target.value);
  };
  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeState(event.target.value);
  };
  const generateId = () => {
    const randomPart = Math.random().toString(36).substr(2, 6).toUpperCase();
    const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // YYYYMMDD
    return `IVD_${datePart}_${randomPart}`;
  };

  const handleSubmitReserve = () => {
    if (!context) {
      return;
    }
    if (context.initState.invoice.tables.length < 1) {
      errorAlert({
        title: "No Table Selected",
        text: "Please select at least one table to proceed.",
        icon: "warning",
      });
      return;
    }
    if (!dateState || !timeState) {
      errorAlert({
        title: "Date and Time Required",
        text: "Please select both a date and a time to proceed.",
        icon: "warning",
      });
      return;
    }
    const list: TableModel[] = context.initState.invoice.tables;
    const data: InvoiceDetailModel = {
      invoiceDetailId: generateId(),
      date: dateState,
      time: timeState,
      total: sumTotal,
      list_table: {
        tables: list,
      },
    };
    context.dispatch({ type: "RESERVE", payload: data });
    navigate(`/checkout/${data.invoiceDetailId}`);
  };

  return (
    <div className={cx("reservation_container")}>
      <div className={cx("reservation_row")}>
        <div className={cx("reservation_banner")}>
          <Banner
            banner_background={restaurant_reservation}
            banner_description="Little Lemon is returning to its roots with authentic Mediterranean flavors and timeless recipes. Enjoy classics like Lemon Herb Grilled Chicken and Homemade Hummus Platter, made with the freshest ingredients. Rediscover the warm hospitality and cozy atmosphere you’ve always loved. Welcome back to Little Lemon!"
            banner_header="Reservation"
          />
        </div>
        <div className={cx("reservation_body")}>
          <div className={cx("reservation_left")}>
            <p>Click on available seats to reserve your seat </p>
            <div className={cx("reservation_left_map")}>
              <div className={cx("reservation_left_map_orther")}>
                <div className={cx("reservation_left_map_checkout_bar")}>
                  <img src={door} alt="" />
                </div>
                <div className={cx("reservation_left_map_checkout")}>
                  <img src={Checkout} alt="" />
                </div>
              </div>
              <div className={cx("reservation_left_map_layout")}>
                {listType.map((type, index) => {
                  const filteredTables =
                    context?.initState.table?.filter(
                      (table) => table.table_type.type_name === type
                    ) || [];

                  return (
                    <div
                      key={index}
                      className={cx("reservation_left_map_group")}
                    >
                      <div className={cx("reservation_left_map_group_items")}>
                        {filteredTables.map((table, indexTable) => (
                          <div
                            key={indexTable}
                            onClick={() => handleCheck(table)}
                            className={cx("reservation_left_items")}
                          >
                            <img
                              src={tableIcons[type]}
                              className={cx(`${table.table_status}`)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={cx("reservation_left_map_details")}>
              <ul className={cx("reservation_left_map_details_list")}>
                {statusTable.map((value, index) => (
                  <li key={index}>
                    <img src={MEDIUM} alt="" />
                    <p>{value}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={cx("reservation_right")}>
            <div className={cx("reservation_invioce")}>
              <div className={cx("reservation_invioce_header")}>
                <h3>Your Reservation</h3>
                <div className={cx("reservation_invioce_header_branch")}>
                  <span>Little Lemon Chicago</span>
                  <Link to="/">Change Restaurant</Link>
                </div>
              </div>
              <div className={cx("reservation_invoice_date_time")}>
                <div className={cx("reservation_invoice_date")}>
                  <span>Date of Reservation</span>
                  <div className={cx("reservation_invoice_date_select")}>
                    <label htmlFor="reservation_date" onClick={selectDate}>
                      {dateState
                        ? formattedDate(new Date(dateState))
                        : "Select Date of Reservation"}
                    </label>
                    <input
                      type="date"
                      value={dateState}
                      id="reservation_date"
                      ref={dateRef}
                      onChange={(e) => handleDateChange(e)}
                    />
                  </div>
                </div>
                <div className={cx("reservation_invoice_time")}>
                  <span>Time of Reservation</span>
                  <div className={cx("reservation_invoice_time_select")}>
                    <label htmlFor="reservation_time" onClick={selectTime}>
                      {timeState && dateState
                        ? formatTime()
                        : "Select Time of Reservation"}
                    </label>
                    <input
                      type="time"
                      value={timeState}
                      id="reservation_time"
                      ref={timeRef}
                      onChange={handleTimeChange}
                    />
                  </div>
                </div>
              </div>
              <div className={cx("reservation_invoice_seats")}>
                <div className={cx("reservation_invoice_table_choose")}>
                  <div className={cx("reservation_invoice_table_choose_items")}>
                    <h3>Selected Table</h3>
                    <ul
                      className={cx(
                        "reservation_invoice_table_choose_items_list"
                      )}
                    >
                      {context?.initState.invoice.tables.length === 0 ? (
                        <li className={cx("default_no_selected")}>
                          <p>No table selected</p>
                        </li>
                      ) : (
                        context?.initState.invoice.tables.map(
                          (value, index) => (
                            <li
                              key={index}
                              className={cx(
                                `reservation_invoice_table_choose_items_list_items_${value.table_type.type_name}`
                              )}
                            >
                              <p>{value.table_number}</p>
                            </li>
                          )
                        )
                      )}
                    </ul>
                  </div>
                  <div className={cx("reservation_invoice_table_breakpoint")}>
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
              <div className={cx("reservation_invoice_total")}>
                <div className={cx("reservation_invoice_total_title")}>
                  <h3>Total Price</h3>
                  <span>(Including All Taxes)</span>
                </div>
                <p>${sumTotal}</p>
              </div>
              <div className={cx("reservation_invoice_action")}>
                <Button action={handleSubmitReserve}>
                  PROCESSED TO CHECKOUT
                </Button>
                <span>
                  Please select at least one table to proceed to checkout page
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("reservation_orther")}></div>
      </div>
    </div>
  );
};

export default Reservation;
