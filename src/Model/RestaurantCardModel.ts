export interface RestaurantCardProps {
  id: string;
  name: string;
  address: string;
  rating: number;
  like: boolean;
  save: boolean;
  image: string;
  feedbackQuanlity: number;
}

export const restaurantData: RestaurantCardProps[] = [
  {
    id: "1",
    name: "Little Lemon",
    address: "123 Lemon Street, Downtown",
    rating: 4.5,
    like: true,
    save: false,
    image: "https://example.com/images/little-lemon.jpg",
    feedbackQuanlity: 90,
  },
  {
    id: "2",
    name: "Spicy Delights",
    address: "456 Spicy Lane, Uptown",
    rating: 4.7,
    like: true,
    save: true,
    image: "https://example.com/images/spicy-delights.jpg",
    feedbackQuanlity: 85,
  },
  {
    id: "3",
    name: "Ocean Breeze",
    address: "789 Beach Road, Seaside",
    rating: 4.2,
    like: false,
    save: true,
    image: "https://example.com/images/ocean-breeze.jpg",
    feedbackQuanlity: 75,
  },
  {
    id: "4",
    name: "Mountain Feast",
    address: "321 Mountain View, Hillside",
    rating: 4.8,
    like: true,
    save: false,
    image: "https://example.com/images/mountain-feast.jpg",
    feedbackQuanlity: 95,
  },
  {
    id: "5",
    name: "Sunset Diner",
    address: "654 Sunset Avenue, Westside",
    rating: 3.9,
    like: false,
    save: false,
    image: "https://example.com/images/sunset-diner.jpg",
    feedbackQuanlity: 65,
  },
  {
    id: "6",
    name: "The Garden Grill",
    address: "987 Green Lane, Garden City",
    rating: 4.6,
    like: true,
    save: true,
    image: "https://example.com/images/garden-grill.jpg",
    feedbackQuanlity: 80,
  },
];
