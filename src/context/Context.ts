import React from "react";
import { dataTable, TableModel } from "../model/TableModel";
import {
  defaultInvoiceModel,
  invoiceDataDetail,
  InvoiceDetailModel,
  InvoiceModel,
  invoiceTable,
  InvoiceTableModel,
} from "../model/InvoiceModel";
export type TYPE_ACTION =
  | { type: "CHOOSE"; payload: TableModel }
  | { type: "RESERVE"; payload: InvoiceDetailModel }
  | { type: "CHECKOUT"; payload: InvoiceModel };
export interface ContextModel {
  initState: InitialState;
  dispatch: React.Dispatch<TYPE_ACTION>;
}

export interface InitialState {
  table: TableModel[];
  invoice: InvoiceTableModel;
  invoiceDetail: InvoiceDetailModel;
  checkout: InvoiceModel;
}
export const initStateData: InitialState = {
  table: dataTable,
  invoice: invoiceTable,
  invoiceDetail: invoiceDataDetail,
  checkout: defaultInvoiceModel,
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

    case "RESERVE":
      localStorage.setItem(
        action.payload.invoiceDetailId,
        JSON.stringify(action.payload)
      );
      return { ...state, invoiceDetail: action.payload };
    case "CHECKOUT":
      const dataContext = [...state.table];
      const table = action.payload.invoiceDetail.list_table.tables;
      console.log(state.invoiceDetail);

      return {
        ...state,
        checkout: action.payload,
        invoiceDetail: invoiceDataDetail,
        invoice: invoiceTable,
        table: updateTable(dataContext, table),
      };

    default:
      return state;
  }
};

const updateTable = (dataContext: TableModel[], table: TableModel[]) => {
  for (let tableOrigin = 0; tableOrigin < dataContext.length; tableOrigin++) {
    for (let tableTrue = 0; tableTrue < table.length; tableTrue++) {
      if (dataContext[tableOrigin].table_id === table[tableTrue].table_id) {
        dataContext[tableOrigin].table_status = "AVAILABLE";
      }
    }
  }
  return dataContext;
};
