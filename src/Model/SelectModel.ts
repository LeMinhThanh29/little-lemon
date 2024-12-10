import React from "react";

export interface SelectModelValue {
  value: string | number | readonly string[] | undefined;
  label: string;
}
export interface SelectModel {
  list: SelectModelValue[];
  name: string;
  id: string;
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
}
