import { TableModel } from "./TableModel";
type Occasion =
  | "Birthday table"
  | "Buffet table"
  | "Cake table"
  | "Decorated table"
  | "Reception table"
  | "Dining table";

export const occasion: Occasion[] = [
  "Birthday table",
  "Buffet table",
  "Cake table",
  "Decorated table",
  "Reception table",
  "Dining table",
];
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
  occasion: Occasion;
  invoiceDetail: InvoiceDetailModel;
}
export interface InvoiceModelFrom {
  invoiceId: string;
  fullname: string;
  phone: number;
  email: string;
  note: string;
  occasion: Occasion;
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

export const defaultInvoiceModel: InvoiceModel = {
  invoiceId: "default-id",
  fullname: "default-fullname",
  phone: 1234567890,
  email: "default@example.com",
  note: "No notes",
  occasion: "Birthday table",
  invoiceDetail: invoiceDataDetail,
};
