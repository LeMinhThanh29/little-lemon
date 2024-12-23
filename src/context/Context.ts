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
      let invoiceData = [...state.invoice.tables];
      const invoiceItem = state.invoice.tables.find(
        (value) => value.table_id === action.payload.table_id
      );

      if (!invoiceItem) {
        // Nếu chưa có, thêm vào `invoice.tables`
        invoiceData = [...invoiceData, action.payload];
      } else {
        // Nếu đã tồn tại, loại bỏ bàn khỏi `invoice.tables`
        invoiceData = invoiceData.filter(
          (value) => value.table_id !== action.payload.table_id
        );
      }

      return {
        ...state,
        table: tableChoose,
        invoice: { ...state.invoice, tables: invoiceData },
      };

    default:
      return state;
  }
};
