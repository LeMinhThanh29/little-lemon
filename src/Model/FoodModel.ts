export interface FoodProps {
  food_id: string;
  food_image: string;
  food_name: string;
  food_price: number;
  food_description: string;
}

export const foodData: FoodProps[] = [
  {
    food_id: "FOOD001",
    food_image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    food_name: "Grilled Chicken",
    food_price: 12.99,
    food_description:
      "Juicy grilled chicken breast served with a side of fresh vegetables.",
  },
  {
    food_id: "FOOD002",
    food_image:
      "https://plus.unsplash.com/premium_photo-1675252371648-7a6481df8226?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    food_name: "Classic Cheeseburger",
    food_price: 9.49,
    food_description:
      "A classic cheeseburger topped with fresh lettuce, tomato, and cheddar cheese.",
  },
  {
    food_id: "FOOD003",
    food_image:
      "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    food_name: "Caesar Salad",
    food_price: 7.25,
    food_description:
      "Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.",
  },
  {
    food_id: "FOOD004",
    food_image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    food_name: "Margherita Pizza",
    food_price: 14.75,
    food_description:
      "Classic Italian pizza with fresh basil, mozzarella, and tomato sauce.",
  },
  {
    food_id: "FOOD005",
    food_image:
      "https://images.unsplash.com/photo-1719250726371-b4076d48ce6c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    food_name: "Spaghetti Carbonara",
    food_price: 11.5,
    food_description:
      "Traditional spaghetti tossed with creamy carbonara sauce and crispy pancetta.",
  },
  {
    food_id: "FOOD006",
    food_image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    food_name: "Vegetable Stir-Fry",
    food_price: 10.3,
    food_description:
      "Fresh seasonal vegetables stir-fried in a savory soy sauce.",
  },
  {
    food_id: "FOOD007",
    food_image:
      "https://plus.unsplash.com/premium_photo-1719611418530-353ffc0e92ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    food_name: "Seafood Platter",
    food_price: 18.99,
    food_description:
      "A generous platter of shrimp, scallops, and fish served with garlic butter.",
  },
  {
    food_id: "FOOD008",
    food_image:
      "https://plus.unsplash.com/premium_photo-1661730314652-911662c0d86e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    food_name: "Beef Tacos",
    food_price: 8.75,
    food_description:
      "Three tacos stuffed with seasoned beef, fresh salsa, and shredded cheese.",
  },
  {
    food_id: "FOOD009",
    food_image:
      "https://images.unsplash.com/photo-1623888884968-b5a895f882dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    food_name: "Chocolate Cake",
    food_price: 6.5,
    food_description:
      "Rich and moist chocolate cake topped with creamy chocolate ganache.",
  },
  {
    food_id: "FOOD010",
    food_image:
      "https://images.unsplash.com/photo-1508254919937-d4a498e3366c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    food_name: "Lemonade",
    food_price: 3.99,
    food_description: "Refreshing homemade lemonade served chilled.",
  },
];


export const foodDataPopular: FoodProps[] = [
  {
    food_id: "FOOD001",
    food_image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    food_name: "Grilled Chicken",
    food_price: 12.99,
    food_description:
      "Juicy grilled chicken breast served with a side of fresh vegetables.",
  },
  {
    food_id: "FOOD002",
    food_image:
      "https://plus.unsplash.com/premium_photo-1675252371648-7a6481df8226?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    food_name: "Classic Cheeseburger",
    food_price: 9.49,
    food_description:
      "A classic cheeseburger topped with fresh lettuce, tomato, and cheddar cheese.",
  },
  {
    food_id: "FOOD003",
    food_image:
      "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    food_name: "Caesar Salad",
    food_price: 7.25,
    food_description:
      "Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.",
  },
  {
    food_id: "FOOD004",
    food_image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    food_name: "Margherita Pizza",
    food_price: 14.75,
    food_description:
      "Classic Italian pizza with fresh basil, mozzarella, and tomato sauce.",
  },
  {
    food_id: "FOOD005",
    food_image:
      "https://images.unsplash.com/photo-1719250726371-b4076d48ce6c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    food_name: "Spaghetti Carbonara",
    food_price: 11.5,
    food_description:
      "Traditional spaghetti tossed with creamy carbonara sauce and crispy pancetta.",
  },
  {
    food_id: "FOOD006",
    food_image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    food_name: "Vegetable Stir-Fry",
    food_price: 10.3,
    food_description:
      "Fresh seasonal vegetables stir-fried in a savory soy sauce.",
  },
  {
    food_id: "FOOD007",
    food_image:
      "https://plus.unsplash.com/premium_photo-1719611418530-353ffc0e92ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    food_name: "Seafood Platter",
    food_price: 18.99,
    food_description:
      "A generous platter of shrimp, scallops, and fish served with garlic butter.",
  },
  {
    food_id: "FOOD008",
    food_image:
      "https://plus.unsplash.com/premium_photo-1661730314652-911662c0d86e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    food_name: "Beef Tacos",
    food_price: 8.75,
    food_description:
      "Three tacos stuffed with seasoned beef, fresh salsa, and shredded cheese.",
  }
];