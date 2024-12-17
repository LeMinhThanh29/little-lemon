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
      review_user_image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      review_id: "2",
      review_star: 4,
      review_name: "Jane Smith",
      review_date: new Date("2024-01-02"),
      review_content: "Had a wonderful time with my family here. The service was excellent!",
      review_user_image: "https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      review_id: "3",
      review_star: 5,
      review_name: "Michael Brown",
      review_date: new Date("2024-01-03"),
      review_content: "The steak was cooked to perfection. Highly recommend this place!",
      review_user_image: "https://images.unsplash.com/photo-1533618561606-3b2a0766d159?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      review_id: "4",
      review_star: 4,
      review_name: "Emily Davis",
      review_date: new Date("2024-01-04"),
      review_content: "A cozy restaurant with a fantastic atmosphere. Loved the desserts!",
      review_user_image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      review_id: "5",
      review_star: 3,
      review_name: "David Wilson",
      review_date: new Date("2024-01-05"),
      review_content: "The pizza was good, but the pasta could use more seasoning. Overall a nice experience.",
      review_user_image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      review_id: "6",
      review_star: 5,
      review_name: "Sarah Johnson",
      review_date: new Date("2024-01-06"),
      review_content: "Excellent food and friendly staff. The coffee was top-notch!",
      review_user_image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      review_id: "7",
      review_star: 4,
      review_name: "James Martinez",
      review_date: new Date("2024-01-07"),
      review_content: "Good value for money. The portions were generous and delicious.",
      review_user_image: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      review_id: "8",
      review_star: 5,
      review_name: "Olivia Garcia",
      review_date: new Date("2024-01-08"),
      review_content: "I loved the vegan options here! Great taste and variety for plant-based eaters.",
      review_user_image: "https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      review_id: "9",
      review_star: 4,
      review_name: "Benjamin Lee",
      review_date: new Date("2024-01-09"),
      review_content: "The seafood platter was fresh and flavorful. A great dining experience overall.",
      review_user_image: "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      review_id: "10",
      review_star: 5,
      review_name: "Charlotte Harris",
      review_date: new Date("2024-01-10"),
      review_content: "Everything was perfect, from the starters to the desserts. Highly recommend!",
      review_user_image: "https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  

