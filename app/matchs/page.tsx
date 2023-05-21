"use client";
import React, { useState, Suspense } from "react";
import { ITabItem } from "../Types/ITabItem";
import TabLayout from "../components/TabsLayout/TabLayout";
import useSWR from "swr";
import League from "../components/League/League";
import { ILeague } from "../Types/ILeague";
import { useStore } from "@/src/store";

const fetcher = (date: string) =>
  fetch(
    `https://core-sport-api.zarebin.ir/api/football/fixtures/?date=${date}`
  ).then((res) => res.json());

const Matchs = () => {
  const date = useStore((state) => state.date);

  const getFormatedDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const { data, isLoading } = useSWR(getFormatedDate(date), fetcher, {
    refreshInterval: 15,
  });

  const [selectedItem, setSelectedItem] = useState<ITabItem>({
    id: 3,
    label: "امروز",
    date: new Date(),
  });

  const today = new Date();
  const dayBeforeYesterday = new Date(today);
  const yesterday = new Date(today);
  const tomorrow = new Date(today);
  const dayAfterTomorrow = new Date(today);
  const twoDayAfterTomorrow = new Date(today);
  const threeDayAfterTomorrow = new Date(today);

  dayBeforeYesterday.setDate(today.getDate() - 2);
  yesterday.setDate(today.getDate() - 1);
  tomorrow.setDate(today.getDate() + 1);
  dayAfterTomorrow.setDate(today.getDate() + 2);
  twoDayAfterTomorrow.setDate(today.getDate() + 3);
  threeDayAfterTomorrow.setDate(today.getDate() + 4);

  let options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
  };

  const [items, setItems] = useState([
    {
      id: 1,
      label: dayBeforeYesterday.toLocaleDateString("fa-IR", options),
      date: dayBeforeYesterday,
    },
    { id: 2, label: "دیروز", date: yesterday },
    { id: 3, label: "امروز", date: today },
    { id: 4, label: "فردا", date: tomorrow },
    {
      id: 5,
      label: dayAfterTomorrow.toLocaleDateString("fa-IR", options),
      date: dayAfterTomorrow,
    },
    {
      id: 6,
      label: twoDayAfterTomorrow.toLocaleDateString("fa-IR", options),
      date: twoDayAfterTomorrow,
    },
    {
      id: 7,
      label: threeDayAfterTomorrow.toLocaleDateString("fa-IR", options),
      date: threeDayAfterTomorrow,
    },
  ]);

  const handleTabItemClick = (item: ITabItem): void => {
    useStore.setState({ date: item.date });
    setSelectedItem(item);
  };

  return isLoading && !data ? (
    <div>Loading...</div>
  ) : (
    <div className='mb-20 mt-24'>
      <TabLayout
        items={items}
        onClick={handleTabItemClick}
        selectedItem={selectedItem}
      />
      <div className='flex flex-col gap-4 py-5 px-5 overflow-scroll mb-20 mt-12'>
        {data?.all.map((league: ILeague) => (
          <League info={league} key={league.id} />
        ))}
      </div>
    </div>
  );
};

export default Matchs;
