import {
  service_shipper,
  service_room,
  service_wedding,
  service_reserved,
  service_food,
  service_loyalty,
} from "../assets/icons";
export interface ServiceProps {
  id: string;
  image: string;
  service_name: string;
}

export const serviceData: ServiceProps[] = [
  {
    id: "SERV01",
    image: service_shipper,
    service_name: "Delivery Service",
  },
  {
    id: "SERV02",
    image: service_room,
    service_name: "Catering Services",
  },
  {
    id: "SERV03",
    image: service_wedding,
    service_name: "Private Dining",
  },
  {
    id: "SERV04",
    image: service_reserved,
    service_name: "Online Reservation",
  },
  {
    id: "SERV05",
    image: service_food,
    service_name: "Takeout Orders",
  },
  {
    id: "SERV06",
    image: service_loyalty,
    service_name: "Loyalty Program",
  },
];
