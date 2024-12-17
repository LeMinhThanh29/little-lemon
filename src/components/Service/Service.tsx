import React from "react";

import styles from "./scss/Service.module.scss";
import classNames from "classnames/bind";
import { ServiceProps } from "../../model/ServiceModel";
const cx = classNames.bind(styles);

const Service = (props: ServiceProps) => {
  const { image, service_name } = props;
  return (
    <div className={cx("service_box")}>
      <div className={cx("service_box_icon")}>
        <img src={image} alt="" />
      </div>
      <p>{service_name}</p>
    </div>
  );
};

export default Service;
