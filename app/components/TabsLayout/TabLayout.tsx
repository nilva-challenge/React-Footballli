import React, { useState, useRef, MouseEvent, TouchEvent } from "react";
import TabItem from "./TabsItem/TabItem";
import { ITabItem } from "../../Types/ITabItem";
import "./style.scss";

interface TabLayoutProps {
  items: Array<ITabItem>;
  onClick: (item: ITabItem) => void;
  selectedItem: ITabItem;
}

const TabLayout: React.FC<TabLayoutProps> = ({
  items,
  onClick,
  selectedItem,
}) => {
  const tabContainerRef = useRef<HTMLUListElement>(null);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const handleDragStart = (
    event: MouseEvent<HTMLUListElement> | TouchEvent<HTMLUListElement>
  ) => {
    const clientX = getClientX(event);
    setDragStartX(clientX);
  };

  const handleDragMove = (
    event: MouseEvent<HTMLUListElement> | TouchEvent<HTMLUListElement>
  ) => {
    if (dragStartX !== null) {
      const clientX = getClientX(event);
      const dragDistance = clientX - dragStartX;
      if (tabContainerRef.current) {
        tabContainerRef.current.scrollLeft = scrollLeft - dragDistance;
      }
    }
  };

  const handleDragEnd = () => {
    setDragStartX(null);
  };

  const getClientX = (
    event: MouseEvent<HTMLUListElement> | TouchEvent<HTMLUListElement>
  ): number => {
    if ("touches" in event) {
      return event.touches[0].clientX;
    }
    return event.clientX;
  };

  return (
    <div className='tab-container w-full h-12 fixed shadow-sm'>
      <ul
        ref={tabContainerRef}
        className='flex flex-row py2 h-12 tabLayout bg-white w-full'
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {items.map((item) => (
          <TabItem
            key={item.id}
            info={item}
            onClick={onClick}
            selectedItem={selectedItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default React.memo(TabLayout);
