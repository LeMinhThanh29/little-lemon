import React from "react";
import { SelectModel } from "../../model/SelectModel";

const Select = (props: SelectModel) => {
  const { handleChange, id, list, name } = props;
  return (
    <select name={name} id={id} onChange={handleChange}>
      <option value="">Type</option>
      {list.map((category, index) => (
        <option value={category.value} key={index}>
          {category.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
