export interface VoucherModel {
  voucherId: string;
  restaurantName: string;
  restaurantAddress: string;
  typeVoucher: VoucherType;
  startDate: Date;
  endDate: Date;
  isUsed: boolean;
}

interface VoucherType {
  icon: string;
  type: VoucherTypeName;
  name: string;
  discount: number;
  voucherTerms: string;
}

type VoucherTypeName = "DELIVERY" | "DISCOUNT" | "BOGO" | "COMBO";

export const voucherData: VoucherModel[] = [
  {
    voucherId: "VOUCHER001",
    restaurantName: "Little Lemon",
    restaurantAddress: "123 Main Street, Lemon City",
    typeVoucher: {
      icon: "https://img.icons8.com/ios/50/000000/delivery--v1.png", // Icon: Delivery
      type: "DELIVERY",
      name: "Free Delivery",
      discount: 10,
      voucherTerms:
        "Order from Little Lemon and enjoy FREE delivery within 10km! Don’t miss out on enjoying delicious meals at home with no delivery fees.",
    },
    startDate: new Date("2024-12-01T08:00:00"),
    endDate: new Date("2024-12-31T23:59:59"),
    isUsed: false,
  },
  {
    voucherId: "VOUCHER002",
    restaurantName: "Spicy Pepper",
    restaurantAddress: "456 Elm Street, Spicy Town",
    typeVoucher: {
      icon: "https://img.icons8.com/ios/50/000000/discount.png", // Icon: Discount
      type: "DISCOUNT",
      name: "10% Off All Orders",
      discount: 10,
      voucherTerms:
        "Book a table today at Spicy Pepper to enjoy a 10% discount! Valid only for online reservations.",
    },
    startDate: new Date("2024-12-10T09:00:00"),
    endDate: new Date("2024-12-31T22:00:00"),
    isUsed: true,
  },
  {
    voucherId: "VOUCHER003",
    restaurantName: "Green Bowl",
    restaurantAddress: "789 Oak Avenue, Green Village",
    typeVoucher: {
      icon: "https://img.icons8.com/ios/50/000000/restaurant-menu.png", // Icon: BOGO
      type: "BOGO",
      name: "Buy One Get One Free",
      discount: 50,
      voucherTerms:
        "Buy one dish, get another one free. Don't miss this perfect opportunity to share delicious meals with friends and family!",
    },
    startDate: new Date("2024-12-15T11:00:00"),
    endDate: new Date("2024-12-31T23:00:00"),
    isUsed: false,
  },
  {
    voucherId: "VOUCHER004",
    restaurantName: "Family Feast",
    restaurantAddress: "321 Maple Road, Feast City",
    typeVoucher: {
      icon: "https://img.icons8.com/ios/50/000000/family.png", // Icon: Family
      type: "COMBO",
      name: "Family Combo",
      discount: 25,
      voucherTerms:
        "Treat your family to a hearty meal with our Family Combo: 3 main dishes + 2 sides for only $100. A perfect meal for everyone!",
    },
    startDate: new Date("2024-12-20T12:00:00"),
    endDate: new Date("2024-12-31T22:00:00"),
    isUsed: true,
  },
];
