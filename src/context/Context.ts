import React from "react";
import { dataTable, TableModel } from "../model/TableModel";
import { invoice, InvoiceModel } from "../model/InvoiceModel";
export type TYPE_ACTION = { type: "CHOOSE"; payload: TableModel };
export interface ContextModel {
  initState: InitialState;
  dispatch: React.Dispatch<TYPE_ACTION>;
}

export interface InitialState {
  table: TableModel[];
  invoice: InvoiceModel;
}
export const initStateData: InitialState = {
  table: dataTable,
  invoice: invoice,
};

export const reducer = (state: InitialState, action: TYPE_ACTION) => {
  switch (action.type) {
    case "CHOOSE":
      const tableChoose: TableModel[] = state.table.map((table) =>
        table.table_id === action.payload.table_id
          ? {
              ...table,
              table_status:
                table.table_status === "SELECTED" ? "AVAILABLE" : "SELECTED",
            }
          : table
      );
      const invoiceAdd = state.invoice.tables.filter(
        (value) => value.table_status === "SELECTED"
      );
      const new_invoiceAdd = [...invoiceAdd, action.payload];

      return {
        ...state,
        table: tableChoose,
        invoice: { ...state.invoice, tables: new_invoiceAdd },
      };

    default:
      return state;
  }
};
