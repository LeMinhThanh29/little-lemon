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
    image:
      "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedbackQuanlity: 90,
  },
  {
    id: "2",
    name: "Spicy Delights",
    address: "456 Spicy Lane, Uptown",
    rating: 4.7,
    like: true,
    save: true,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedbackQuanlity: 85,
  },
  {
    id: "3",
    name: "Ocean Breeze",
    address: "789 Beach Road, Seaside",
    rating: 4.2,
    like: false,
    save: true,
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedbackQuanlity: 75,
  },
  {
    id: "4",
    name: "Mountain Feast",
    address: "321 Mountain View, Hillside",
    rating: 4.8,
    like: true,
    save: false,
    image:
      "https://images.unsplash.com/photo-1494346480775-936a9f0d0877?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedbackQuanlity: 95,
  },
  {
    id: "5",
    name: "Sunset Diner",
    address: "654 Sunset Avenue, Westside",
    rating: 3.9,
    like: false,
    save: false,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedbackQuanlity: 65,
  },
  {
    id: "6",
    name: "The Garden Grill",
    address: "987 Green Lane, Garden City",
    rating: 4.6,
    like: true,
    save: true,
    image:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedbackQuanlity: 80,
  },
];
