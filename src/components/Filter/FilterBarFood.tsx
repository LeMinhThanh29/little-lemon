import React from "react";
import styles from "./scss/FilterBarFood.module.scss";
import classNames from "classnames/bind";
import Select from "../Select/Select";
import { find, findFood, inputsearchFood } from "../../assets/icons";
import { SelectModelValue } from "../../model/SelectModel";

interface FilterBarFoodPros {
  items: SelectModelValue[];
  handleAction: React.ChangeEventHandler<HTMLSelectElement>;
}
const cx = classNames.bind(styles);
const FilterBarFood = (props: FilterBarFoodPros) => {
  const { items, handleAction } = props;
  return (
    <div className={cx("filterBar_body_row_food")}>
      <div className={cx("filterBar_items")}>
        <img src={findFood} alt="" />
        <Select
          id="filterBar_items_type_food"
          name="filterBar_items_type_food"
          list={items}
          handleChange={handleAction}
        />
      </div>
      <div className={cx("filterBar_items")}>
        <img src={inputsearchFood} alt="" />
        <input
          type="text"
          name="search_food"
          id="search_food"
          placeholder="Search for food..."
        />
      </div>
      <div className={cx("filterBar_items_button")}>
        <img src={find} alt="" />
        Search
      </div>
    </div>
  );
};

export default FilterBarFood;
