import { FC, memo } from "react";
import { ScrollContainer } from "react-indiana-drag-scroll";

interface TabDragableInterface {
  items: any[];
  onClickItem: (item: any) => void;
  scrollContainerClassName?: string;
  itemClassName?: string;
}

const TabDragable: FC<TabDragableInterface> = ({
  items,
  onClickItem,
  scrollContainerClassName,
  itemClassName,
}) => {
  return (
    <ScrollContainer
      className={`tab-dragable ${scrollContainerClassName ?? ""}`}
    >
      {items &&
        items.map((item: any) => (
          <span
            key={item.id}
            onClick={() => onClickItem(item.item)}
            className={` ${itemClassName ?? ""} ${
              item.id === "5" ? "active-tab" : ""
            }`}
          >
            {item.item}
          </span>
        ))}
    </ScrollContainer>
  );
};

export default memo(TabDragable);
