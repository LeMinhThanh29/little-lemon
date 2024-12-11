import React, { ComponentType, ReactNode, useRef, useState } from "react";
export interface SliderProps<T> {
  CARD_WIDTH: number;
  CONTAINER_WIDTH: number;
  ITEMS: T[];
  action: (type: SLIDER_TYPE) => void;
  listRef: React.RefObject<HTMLDivElement>;
  currentIndex: number;
}
type SLIDER_TYPE = "LEFT" | "RIGHT";
const withSlider = <T,>(WrappedComponent: ComponentType<SliderProps<T>>) => {
  return (props: Omit<SliderProps<T>, "action" | "listRef" | "currentIndex">) => {
    const { CARD_WIDTH, CONTAINER_WIDTH, ITEMS } = props;
    const listRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0); // Vị trí hiện tại của slider
    const MAX_VISIBLE_ITEMS = Math.floor(CONTAINER_WIDTH / CARD_WIDTH); // Số lượng item tối đa có thể đi được
    const TOTAL_ITEMS = ITEMS.length; // Tổng số item

    // Khi nhấn thì index tăng lên 1, lấy Index đó nhân cho tổng chiều dài của box, rồi thực hiện translate
    const handleClick = (type: SLIDER_TYPE) => {
      if (!listRef.current) return;

      let newIndex = currentIndex;
      if (type === "LEFT" && currentIndex > 0) {
        newIndex -= 1; // Lùi lại
      } else if (
        type === "RIGHT" &&
        currentIndex < TOTAL_ITEMS - MAX_VISIBLE_ITEMS
      ) {
        newIndex += 1; // Tiến lên
      }

      setCurrentIndex(newIndex); // Cập nhật vị trí mới
      listRef.current.style.transform = `translateX(${
        -newIndex * CARD_WIDTH
      }px)`;
    };

    return (
      <WrappedComponent
        {...props}
        action={handleClick}
        listRef={listRef}
        currentIndex={currentIndex}
      />
    );
  };
};

export default withSlider;
