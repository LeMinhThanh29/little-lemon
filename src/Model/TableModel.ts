export type TableType = "MINI"|"MEDIUM" | "LARGE" | "VIP" ;

export type TableStatus = "AVAILABLE" | "SELECTED" | "RESERVED";
export interface TableModel {
  table_id: string;
  table_number: string;
  table_status: TableStatus;
  table_type: TypeTable;
}

interface TypeTable {
  type_table_id: string;
  type_name: TableType;
  type_table_price: number;
}
export const dataTable: TableModel[] = [
  // 10 MINI tables
  {
    table_id: "1",
    table_number: "T01",
    table_status: "AVAILABLE",
    table_type: {
      type_table_id: "1",
      type_name: "MINI",
      type_table_price: 100,
    },
  },
  {
    table_id: "2",
    table_number: "T02",
    table_status: "RESERVED",
    table_type: {
      type_table_id: "2",
      type_name: "MINI",
      type_table_price: 100,
    },
  },
  {
    table_id: "3",
    table_number: "T03",
    table_status: "AVAILABLE",
    table_type: {
      type_table_id: "3",
      type_name: "MINI",
      type_table_price: 100,
    },
  },
  {
    table_id: "4",
    table_number: "T04",
    table_status: "RESERVED",
    table_type: {
      type_table_id: "4",
      type_name: "MINI",
      type_table_price: 100,
    },
  },
  {
    table_id: "5",
    table_number: "T05",
    table_status: "AVAILABLE",
    table_type: {
      type_table_id: "5",
      type_name: "MINI",
      type_table_price: 100,
    },
  },
  {
    table_id: "6",
    table_number: "T06",
    table_status: "RESERVED",
    table_type: {
      type_table_id: "6",
      type_name: "MINI",
      type_table_price: 100,
    },
  },
  {
    table_id: "7",
    table_number: "T07",
    table_status: "AVAILABLE",
    table_type: {
      type_table_id: "7",
      type_name: "MINI",
      type_table_price: 100,
    },
  },
  {
    table_id: "8",
    table_number: "T08",
    table_status: "RESERVED",
    table_type: {
      type_table_id: "8",
      type_name: "MINI",
      type_table_price: 100,
    },
  },
  {
    table_id: "9",
    table_number: "T09",
    table_status: "AVAILABLE",
    table_type: {
      type_table_id: "9",
      type_name: "MINI",
      type_table_price: 100,
    },
  },
  {
    table_id: "10",
    table_number: "T10",
    table_status: "RESERVED",
    table_type: {
      type_table_id: "10",
      type_name: "MINI",
      type_table_price: 100,
    },
  },

  // 10 LARGE tables
  {
    table_id: "11",
    table_number: "T11",
    table_status: "AVAILABLE",
    table_type: {
      type_table_id: "11",
      type_name: "LARGE",
      type_table_price: 200,
    },
  },
  {
    table_id: "12",
    table_number: "T12",
    table_status: "RESERVED",
    table_type: {
      type_table_id: "12",
      type_name: "LARGE",
      type_table_price: 200,
    },
  },
  {
    table_id: "13",
    table_number: "T13",
    table_status: "AVAILABLE",
    table_type: {
      type_table_id: "13",
      type_name: "LARGE",
      type_table_price: 200,
    },
  },
  {
    table_id: "14",
    table_number: "T14",
    table_status: "RESERVED",
    table_type: {
      type_table_id: "14",
      type_name: "LARGE",
      type_table_price: 200,
    },
  },
  {
    table_id: "15",
    table_number: "T15",
    table_status: "AVAILABLE",
    table_type: {
      type_table_id: "15",
      type_name: "LARGE",
      type_table_price: 200,
    },
  },
  {
    table_id: "16",
    table_number: "T16",
    table_status: "RESERVED",
    table_type: {
      type_table_id: "16",
      type_name: "LARGE",
      type_table_price: 200,
    },
  },
  {
    table_id: "17",
    table_number: "T17",
    table_status: "AVAILABLE",
    table_type: {
      type_table_id: "17",
      type_name: "LARGE",
      type_table_price: 200,
    },
  },
  {
    table_id: "18",
    table_number: "T18",
    table_status: "RESERVED",
    table_type: {
      type_table_id: "18",
      type_name: "LARGE",
      type_table_price: 200,
    },
  },
  {
    table_id: "19",
    table_number: "T19",
    table_status: "AVAILABLE",
    table_type: {
      type_table_id: "19",
      type_name: "LARGE",
      type_table_price: 200,
    },
  },
  {
    table_id: "20",
    table_number: "T20",
    table_status: "RESERVED",
    table_type: {
      type_table_id: "20",
      type_name: "LARGE",
      type_table_price: 200,
    },
  },

  // 10 MEDIUM tables
  {
    table_id: "21",
    table_number: "T21",
    table_status: "AVAILABLE",
    table_type: {
      type_table_id: "21",
      type_name: "MEDIUM",
      type_table_price: 150,
    },
  },
  {
    table_id: "22",
    table_number: "T22",
    table_status: "RESERVED",
    table_type: {
      type_table_id: "22",
      type_name: "MEDIUM",
      type_table_price: 150,
    },
  },
  {
    table_id: "23",
    table_number: "T23",
    table_status: "AVAILABLE",
    table_type: {
      type_table_id: "23",
      type_name: "MEDIUM",
      type_table_price: 150,
    },
  },
  {
    table_id: "24",
    table_number: "T24",
    table_status: "RESERVED",
    table_type: {
      type_table_id: "24",
      type_name: "MEDIUM",
      type_table_price: 150,
    },
  },
  {
    table_id: "25",
    table_number: "T25",
    table_status: "AVAILABLE",
    table_type: {
      type_table_id: "25",
      type_name: "MEDIUM",
      type_table_price: 150,
    },
  },
  {
    table_id: "26",
    table_number: "T26",
    table_status: "RESERVED",
    table_type: {
      type_table_id: "26",
      type_name: "MEDIUM",
      type_table_price: 150,
    },
  },
  {
    table_id: "27",
    table_number: "T27",
    table_status: "AVAILABLE",
    table_type: {
      type_table_id: "27",
      type_name: "MEDIUM",
      type_table_price: 150,
    },
  },
  {
    table_id: "28",
    table_number: "T28",
    table_status: "RESERVED",
    table_type: {
      type_table_id: "28",
      type_name: "MEDIUM",
      type_table_price: 150,
    },
  },
  {
    table_id: "29",
    table_number: "T29",
    table_status: "AVAILABLE",
    table_type: {
      type_table_id: "29",
      type_name: "MEDIUM",
      type_table_price: 150,
    },
  },
  {
    table_id: "30",
    table_number: "T30",
    table_status: "RESERVED",
    table_type: {
      type_table_id: "30",
      type_name: "MEDIUM",
      type_table_price: 150,
    },
  },

  // 10 VIP tables
  {
    table_id: "31",
    table_number: "T31",
    table_status: "AVAILABLE",
    table_type: {
      type_table_id: "31",
      type_name: "VIP",
      type_table_price: 500,
    },
  },
  {
    table_id: "32",
    table_number: "T32",
    table_status: "RESERVED",
    table_type: {
      type_table_id: "32",
      type_name: "VIP",
      type_table_price: 500,
    },
  },
  {
    table_id: "33",
    table_number: "T33",
    table_status: "AVAILABLE",
    table_type: {
      type_table_id: "33",
      type_name: "VIP",
      type_table_price: 500,
    },
  },
  {
    table_id: "34",
    table_number: "T34",
    table_status: "RESERVED",
    table_type: {
      type_table_id: "34",
      type_name: "VIP",
      type_table_price: 500,
    },
  },
  {
    table_id: "35",
    table_number: "T35",
    table_status: "AVAILABLE",
    table_type: {
      type_table_id: "35",
      type_name: "VIP",
      type_table_price: 500,
    },
  },
  {
    table_id: "36",
    table_number: "T36",
    table_status: "RESERVED",
    table_type: {
      type_table_id: "36",
      type_name: "VIP",
      type_table_price: 500,
    },
  },
  {
    table_id: "37",
    table_number: "T37",
    table_status: "AVAILABLE",
    table_type: {
      type_table_id: "37",
      type_name: "VIP",
      type_table_price: 500,
    },
  },
  {
    table_id: "38",
    table_number: "T38",
    table_status: "RESERVED",
    table_type: {
      type_table_id: "38",
      type_name: "VIP",
      type_table_price: 500,
    },
  },
  {
    table_id: "39",
    table_number: "T39",
    table_status: "AVAILABLE",
    table_type: {
      type_table_id: "39",
      type_name: "VIP",
      type_table_price: 500,
    },
  },
  {
    table_id: "40",
    table_number: "T40",
    table_status: "RESERVED",
    table_type: {
      type_table_id: "40",
      type_name: "VIP",
      type_table_price: 500,
    },
  },
];
