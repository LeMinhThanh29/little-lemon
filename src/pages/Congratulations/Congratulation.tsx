import classNames from "classnames/bind";
import React from "react";
import styles from "./scss/Congratulations.module.scss";
import { cup, congratulations } from "../../assets/image";
import { useContextApi } from "../../context/AppContext";
import Button from "../../components/Button/Button";
const cx = classNames.bind(styles);

const Congratulation = () => {
  const conxtext = useContextApi();
  return (
    <section className={cx("congratulations_section_container")}>
      <article className={cx("congratulations_aritcle_container")}>
        <div className={cx("congratulations_aritcle_container_header")}>
          <img src={congratulations} alt="" />
        </div>
        <div className={cx("congratulations_aritcle_container_title")}>
          <h1>
            Congratulations! <br />
            Your Reservation is Confirmed!
          </h1>
          <p>
            Check your order status in My Orders about next steps information.
          </p>

          <img src={cup} alt="" />
          <div className={cx("congratulations_aritcle_container_check")}>
            <Button>Track My Order</Button>
            <div className={cx("congratulations_aritcle_container_message")}>
              <p>Dear {conxtext?.initState.checkout.fullname},</p>

              <p>
                Congratulations! Your table reservation has been successfully
                placed. We are excited to welcome you to our restaurant and
                ensure you have a memorable dining experience. A QR code for
                your reservation has been sent to your email. When you arrive,
                please show the QR code to our staff to receive your table.
              </p>

              <p>
                If you have any special requests or need further assistance,
                feel free to reach out to us. Thank you for choosing us, and we
                look forward to serving you soon!
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Congratulation;
