import { restaurantData } from "../../Model/RestaurantCardModel";
import SliderWrapped from "../Slider/Slider";

const RestaurantList = () => {
  const CARD_WIDTH = 230; // Chiều rộng 1 card
  const CONTAINER_WIDTH = 700; // Chiều rộng khung slider
  return (
    <SliderWrapped
      CARD_WIDTH={CARD_WIDTH}
      CONTAINER_WIDTH={CONTAINER_WIDTH}
      ITEMS={restaurantData}
    />
  );
};

export default RestaurantList;
