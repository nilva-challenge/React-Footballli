"use client";

import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateTime } from "luxon";
import { cloneDeep } from "lodash";

import { DateTimeActions } from "@/app/reducers/DateTimeReducer";
import { ScrollDirection, DEFAULT_DATE_TIMES } from "./DatesNavbar.config";
import "./DatesNavbar.scss";

export default function useDatesNavbar() {
  const dispatch = useDispatch();
  const selectedDate: DateTime = useSelector((state) => state.dateTime);

  const containerRef = useRef<any>();
  const scrollRef = useRef<any>();

  const [dateTimes, setDateTimes] = useState(DEFAULT_DATE_TIMES);

  const handleMouseDown = (mouseDownEvent: any) => {
    let initialX = mouseDownEvent.clientX;
    let scrollLeft = containerRef.current.scrollLeft;

    const handleMouseMove = (mouseMoveEvent: any) => {
      const diffX = mouseMoveEvent.clientX - initialX;
      containerRef.current.scrollLeft = scrollLeft - diffX;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleScroll = (event: any) => {
    const container = event.target;
    const scrollLeft: number = container.scrollLeft;

    const direction: ScrollDirection =
      scrollLeft > container.dataset.scrollX
        ? ScrollDirection.RIGHT
        : ScrollDirection.LEFT;
    container.dataset.scrollX = scrollLeft;

    scrollRef.current = {
      ...scrollRef.current,
      scrollLeft,
      direction,
    };

    if (
      scrollRef.current.direction === ScrollDirection.RIGHT &&
      scrollRef.current.scrollLeft === 0
    ) {
      setDateTimes((prevDateTimes) => {
        const newDates = cloneDeep(prevDateTimes);
        newDates.unshift(cloneDeep(prevDateTimes[0]).minus({ days: 1 }));
        newDates.pop();
        return newDates;
      });
      containerRef.current.scrollLeft = -20;
    }
    if (
      scrollRef.current.direction === ScrollDirection.LEFT &&
      scrollRef.current.scrollLeft === -scrollRef.current.scrollWidth
    ) {
      setDateTimes((prevDateTimes) => {
        const newDates = cloneDeep(prevDateTimes);
        newDates.push(cloneDeep(prevDateTimes[6]).plus({ days: 1 }));
        newDates.shift();
        return newDates;
      });
      containerRef.current.scrollLeft = -scrollRef.current.scrollWidth + 20;
    }
  };

  const selectDateTime = (dateTime: DateTime) => {
    dispatch({
      type: DateTimeActions.SET,
      payload: dateTime,
    });
  };

  useEffect(() => {
    const updateWidth = () => {
      const containerDOMElement = containerRef.current;
      if (containerDOMElement) {
        const newContainerWidth: number =
          containerDOMElement.getBoundingClientRect().width;
        const scrollWidth: number =
          containerDOMElement.scrollWidth - containerDOMElement.clientWidth;
        const initialScrollLeftPosition: number = -Math.floor(scrollWidth / 2);
        scrollRef.current = {
          ...scrollRef.current,
          width: newContainerWidth,
          scrollWidth,
          scrollLeft: initialScrollLeftPosition,
        };
        containerDOMElement.scrollLeft = initialScrollLeftPosition;
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return {
    selectedDate,
    dateTimes,
    handleMouseDown,
    handleScroll,
    selectDateTime,
    containerRef
  };
}
