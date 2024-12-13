import React from "react";
import {
  Burger,
  Breakfast,
  Fries,
  Salad,
  Steak,
  Sandwich,
  Pizza,
  Coffee,
  ColaCan,
  Fish,
  Snacks,
  Wine,
} from "../assets/icons";

export const categories: CategoryProps[] = [
  {
    category_name: "Burger",
    category_image: Burger,
  },
  {
    category_name: "Breakfast",
    category_image: Breakfast,
  },
  {
    category_name: "Fries",
    category_image: Fries,
  },
  {
    category_name: "Salad",
    category_image: Salad,
  },
  {
    category_name: "Steak",
    category_image: Steak,
  },
  {
    category_name: "Sandwich",
    category_image: Sandwich,
  },
  {
    category_name: "Pizza",
    category_image: Pizza,
  },
  {
    category_name: "Coffee",
    category_image: Coffee,
  },
  {
    category_name: "Cola Can",
    category_image: ColaCan,
  },
  {
    category_name: "Fish",
    category_image: Fish,
  },
  {
    category_name: "Snacks",
    category_image: Snacks,
  },
  {
    category_name: "Wine",
    category_image: Wine,
  },
];

export interface SelectModelValue {
  value: string | number | readonly string[] | undefined;
  label: string;
}
export interface CategoryProps {
  category_name: string;
  category_image: string;
}
export interface SelectModel {
  list: SelectModelValue[];
  name: string;
  id: string;
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
}
