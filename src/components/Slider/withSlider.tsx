import React, {
  ComponentType,
  ElementType,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
export interface SliderProps<T> {
  CONTAINER_WIDTH: number;
  ITEMS: T[];
  action: (type: SLIDER_TYPE) => void;
  listRef: React.RefObject<HTMLDivElement>;
  childRef: React.RefObject<HTMLDivElement>;
  children: ElementType;
  title: string;
}
type SLIDER_TYPE = "LEFT" | "RIGHT";
const withSlider = <T,>(WrappedComponent: ComponentType<SliderProps<T>>) => {
  return (
    props: Omit<SliderProps<T>, "action" | "listRef" | "childRef">
    // Omit: Tạo ra 1 thực thể mới dựa vào thực thể cũ, và sẽ không bao gồm các thuộc tính/phương thức được chỉ định trong Omit
  ) => {
    const {CONTAINER_WIDTH, ITEMS, children } = props;
    const listRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLDivElement>(null); // Tạo ref
    const [currentIndex, setCurrentIndex] = useState(0); // Vị trí hiện tại của slider
    const [width, setWidth] = useState(0);
    const MAX_VISIBLE_ITEMS = Math.floor(CONTAINER_WIDTH / width); // Số lượng item tối đa có thể đi được
    const TOTAL_ITEMS = ITEMS.length; // Tổng số item

    useEffect(() => {
      if (childRef.current) {
        setWidth(childRef.current.clientWidth + 5);
      }
    }, []);

    // Khi nhấn thì index tăng lên 1, lấy Index đó nhân cho tổng chiều dài của box, rồi thực hiện translate
    const handleClick = useCallback(
      (type: SLIDER_TYPE) => {
        if (!listRef.current) return;

        let newIndex = currentIndex;
        if (type === "LEFT" && currentIndex > 0) {
          newIndex -= 1; // Lùi lại
        } else if (
          type === "RIGHT" &&
          currentIndex < TOTAL_ITEMS - MAX_VISIBLE_ITEMS
        ) {
          newIndex += 1; // Tiến lên
        } else {
          return;
        }

        setCurrentIndex(newIndex); // Cập nhật vị trí mới
        listRef.current.style.transform = `translateX(${-newIndex * width}px)`;
      },
      [currentIndex, width, MAX_VISIBLE_ITEMS, TOTAL_ITEMS]
    );

    return (
      <WrappedComponent
        childRef={childRef}
        {...props}
        action={handleClick}
        listRef={listRef}
      >
        {children}
      </WrappedComponent>
    );
  };
};

export default withSlider;
