import { TableModel } from "./TableModel";

export interface InvoiceDetailModel {
  invoiceDetailId: string;
  date: string;
  time: string;
  list_table: InvoiceTableModel;
  total: number;
}
export interface InvoiceModel {
  invoiceId: string;
  fullname: string;
  phone: number;
  email: string;
  note: string;
  payment_card: number;
  invoiceDetail: InvoiceDetailModel;
}

export interface InvoiceTableModel {
  tables: TableModel[];
}

export const invoiceTable: InvoiceTableModel = {
  tables: [],
};

export const invoiceDataDetail: InvoiceDetailModel = {
  invoiceDetailId: "",
  date: "",
  time: "",
  list_table: {
    tables: [],
  },
  total: 0,
};
