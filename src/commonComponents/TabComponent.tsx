import { FC, memo } from "react";

interface TabDragableInterface {
  items: any[];
  onClickItem: (item: any) => void;
  scrollContainerClassName?: string;
  itemClassName?: string;
  param?: string | number;
  loadMore?: () => void;
}

const TabDragable: FC<TabDragableInterface> = ({
  items,
  onClickItem,
  scrollContainerClassName,
  itemClassName,
  param,
  loadMore,
}) => {
  return (
    <div
      className={`tab-dragable ${scrollContainerClassName ?? ""}`}
    >
      {items &&
        items.map((item: any) => (
          <span
            key={item.id}
            onClick={() => onClickItem(item.date)}
            className={` ${itemClassName ?? ""} ${
              param === item.date ? "active-tab" : ""
            }`}
          >
            {item.name}
          </span>
        ))}
      {loadMore && <span onClick={() => loadMore()}> مشاهده بیشتر </span>}
    </div>
  );
};

export default memo(TabDragable);
