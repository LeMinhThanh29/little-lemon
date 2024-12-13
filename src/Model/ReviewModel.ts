export interface ReviewModel {
  review_id: string;
  review_star:number
  review_name: string;
  review_date: Date;
  review_content: string;
  review_user_image: string;
}


export const reviews: ReviewModel[] = [
    {
      review_id: "1",
      review_star: 5,
      review_name: "John Doe",
      review_date: new Date("2024-01-01"),
      review_content: "The food was absolutely amazing! Great taste and presentation. Will definitely come back.",
      review_user_image: "https://example.com/images/users/john_doe.jpg",
    },
    {
      review_id: "2",
      review_star: 4,
      review_name: "Jane Smith",
      review_date: new Date("2024-01-02"),
      review_content: "Had a wonderful time with my family here. The service was excellent!",
      review_user_image: "https://example.com/images/users/jane_smith.jpg",
    },
    {
      review_id: "3",
      review_star: 5,
      review_name: "Michael Brown",
      review_date: new Date("2024-01-03"),
      review_content: "The steak was cooked to perfection. Highly recommend this place!",
      review_user_image: "https://example.com/images/users/michael_brown.jpg",
    },
    {
      review_id: "4",
      review_star: 4,
      review_name: "Emily Davis",
      review_date: new Date("2024-01-04"),
      review_content: "A cozy restaurant with a fantastic atmosphere. Loved the desserts!",
      review_user_image: "https://example.com/images/users/emily_davis.jpg",
    },
    {
      review_id: "5",
      review_star: 3,
      review_name: "David Wilson",
      review_date: new Date("2024-01-05"),
      review_content: "The pizza was good, but the pasta could use more seasoning. Overall a nice experience.",
      review_user_image: "https://example.com/images/users/david_wilson.jpg",
    },
    {
      review_id: "6",
      review_star: 5,
      review_name: "Sarah Johnson",
      review_date: new Date("2024-01-06"),
      review_content: "Excellent food and friendly staff. The coffee was top-notch!",
      review_user_image: "https://example.com/images/users/sarah_johnson.jpg",
    },
    {
      review_id: "7",
      review_star: 4,
      review_name: "James Martinez",
      review_date: new Date("2024-01-07"),
      review_content: "Good value for money. The portions were generous and delicious.",
      review_user_image: "https://example.com/images/users/james_martinez.jpg",
    },
    {
      review_id: "8",
      review_star: 5,
      review_name: "Olivia Garcia",
      review_date: new Date("2024-01-08"),
      review_content: "I loved the vegan options here! Great taste and variety for plant-based eaters.",
      review_user_image: "https://example.com/images/users/olivia_garcia.jpg",
    },
    {
      review_id: "9",
      review_star: 4,
      review_name: "Benjamin Lee",
      review_date: new Date("2024-01-09"),
      review_content: "The seafood platter was fresh and flavorful. A great dining experience overall.",
      review_user_image: "https://example.com/images/users/benjamin_lee.jpg",
    },
    {
      review_id: "10",
      review_star: 5,
      review_name: "Charlotte Harris",
      review_date: new Date("2024-01-10"),
      review_content: "Everything was perfect, from the starters to the desserts. Highly recommend!",
      review_user_image: "https://example.com/images/users/charlotte_harris.jpg",
    },
  ];
  

