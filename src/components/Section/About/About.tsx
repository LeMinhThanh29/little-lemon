import React from "react";
import styles from "./scss/About.module.scss";
import classNames from "classnames/bind";
import { restaurant_about } from "../../../assets/image";
import Button from "../../Button/Button";
import {
  service_shipper,
  service_room,
  service_wedding,
  service_reserved,
  service_food,
  service_loyalty,
} from "../../../assets/icons";
import Service from "../../Service/Service";
import { serviceData } from "../../../model/ServiceModel";
const cx = classNames.bind(styles);

const About = () => {
  return (
    <section className={cx("about_container")}>
      <div className={cx("about_row")}>
        <div className={cx("about_left")}>
          <div className={cx("about_left_box_image")}>
            <img src={restaurant_about} alt="" />
          </div>
        </div>
        <div className={cx("about_right")}>
          <div className={cx("about_right_content")}>
            <div className={cx("about_right_header")}>
              <h1>We Are More Than Multiple Survice</h1>
            </div>
            <div className={cx("about_right_body")}>
              <p className={cx("about_right_body_slogan")}>
                This is a type of restaurant which typicall serves food and
                drinks, in addition to light refreshment such as baked good or
                snacks. The term comes from the rench word meaning food.
              </p>
              <div className={cx("about_right_list_service")}>
                <ul>
                  {serviceData.map((value) => (
                    <li key={value.id}>
                      <Service
                        id={value.id}
                        image={value.image}
                        service_name={value.service_name}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className={cx("about_right_action")}>
                <Button>About Us</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
