import React from "react";
import styles from "./scss/Voucher.module.scss";
import classNames from "classnames/bind";
import { VoucherModel } from "../../model/VoucherModel";
import { tear_ticket } from "../../assets/icons";
import { formattedDate } from "../../utils/DateFormatter";
const cx = classNames.bind(styles);
const Voucher = (props: VoucherModel) => {
  const {
    voucherId,
    typeVoucher,
    restaurantName,
    restaurantAddress,
    isUsed,
    endDate,
    startDate,
  } = props;

  return (
    <div className={cx("voucher_card_container")}>
      <div className={cx("voucher_card_row")}>
        <div className={cx("voucher_card_left")}>
          <div className={cx("voucher_card_ticket")}>
            <p>Voucher Ticket</p>
          </div>
          <div className={cx("voucher_card_box_ticket_icon")}>
            <img src={typeVoucher.icon} alt="" />
          </div>
        </div>
        <div className={cx("voucher_card_right")}>
          <div className={cx("voucher_card_right_body")}>
            <div className={cx("voucher_card_right_ticket_header")}>
              <h1>{restaurantName}</h1>
              <p>{restaurantAddress}</p>
            </div>
            <div className={cx("voucher_card_right_ticket_body")}>
              <h1>{typeVoucher.discount}%</h1>
            </div>
            <div className={cx("voucher_card_right_ticket_footer")}>
              <div className={cx("voucher_card_right_ticket_voucherTerms")}>
                <p>{typeVoucher.voucherTerms}</p>
                <a href="#">see more</a>
              </div>
              <p>
                Available from <strong>{formattedDate(startDate)}</strong>{" "}
                through
                <strong> {formattedDate(endDate)}</strong>.
              </p>
            </div>
          </div>
          <div className={cx("voucher_card_ticket_claims")}>
            <img src={tear_ticket} alt="" />
          </div>
        </div>
      </div>
      <div className={cx("voucher_card_box_container")}>
        <div className={cx("voucher_card_box_top")}></div>
        <div className={cx("voucher_card_box_bottom")}></div>
      </div>
    </div>
  );
};

export default Voucher;
