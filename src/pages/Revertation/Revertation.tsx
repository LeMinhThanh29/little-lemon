import React from "react";
import Banner from "../../components/Banner/Banner";
import { restaurant_revertation } from "../../assets/image";
import classNames from "classnames/bind";
import styles from "./scss/Revertation.module.scss";
import { useContextApi } from "../../context/AppContext";
import { TableModel, TableType } from "../../model/TableModel";
import { MINI, MEDIUM, LARGE, VIP, Checkout, door } from "../../assets/icons";

const cx = classNames.bind(styles);

const Revertation = () => {
  const context = useContextApi();
  const listType: TableType[] = ["MINI", "MEDIUM", "LARGE", "VIP"];
  const tableIcons = {
    MINI: MINI,
    MEDIUM: MEDIUM,
    LARGE: LARGE,
    VIP: VIP,
  };
  const handleCheck = (table: TableModel) => {
    if (table.table_status === "RESERVED") {
      alert("Table is RESERVED");
      return;
    }
    context?.dispatch({ type: "CHOOSE", payload: table });
  };
  console.log(context?.initState.invoice);

  return (
    <div className={cx("revertation_container")}>
      <div className={cx("revertation_row")}>
        <div className={cx("revertation_banner")}>
          <Banner
            banner_background={restaurant_revertation}
            banner_description="Little Lemon is returning to its roots with authentic Mediterranean flavors and timeless recipes. Enjoy classics like Lemon Herb Grilled Chicken and Homemade Hummus Platter, made with the freshest ingredients. Rediscover the warm hospitality and cozy atmosphere you’ve always loved. Welcome back to Little Lemon!"
            banner_header="Revertation"
          />
        </div>
        <div className={cx("revertation_body")}>
          <div className={cx("revertation_left")}>
            <p>Click on available seats to reserve your seat </p>
            <div className={cx("revertation_left_map")}>
              <div className={cx("revertation_left_map_orther")}>
                <div className={cx("revertation_left_map_checkout_bar")}>
                  <img src={door} alt="" />
                </div>
                <div className={cx("revertation_left_map_checkout")}>
                  <img src={Checkout} alt="" />
                </div>
              </div>
              <div className={cx("revertation_left_map_layout")}>
                {listType.map((type, index) => {
                  const filteredTables =
                    context?.initState.table?.filter(
                      (table) => table.table_type.type_name === type
                    ) || [];

                  return (
                    <div
                      key={index}
                      className={cx("revertation_left_map_group")}
                    >
                      <div className={cx("revertation_left_map_group_items")}>
                        {filteredTables.map((table, indexTable) => (
                          <div
                            key={indexTable}
                            onClick={() => handleCheck(table)}
                            className={cx("revertation_left_items")}
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
          </div>
          <div className={cx("revertation_right")}>
            <section aria-label="Table Information">
              <h2>Table Details</h2>
              <ul>
                {context?.initState.invoice.tables.map((table, index) => (
                  <li key={index}>
                    <article>
                      <p>
                        <strong>ID:</strong> {table.table_id}
                      </p>
                      <p>
                        <strong>Table Number:</strong> {table.table_number}
                      </p>
                      <p>
                        <strong>Status:</strong> {table.table_status}
                      </p>
                      <p>
                        <strong>Type:</strong>{" "}
                        {table.table_type?.type_name || "N/A"}
                      </p>
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revertation;
