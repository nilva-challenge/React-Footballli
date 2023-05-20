"use client";
import React, { useState, Suspense } from "react";
import { ITabItem } from "../Types/ITabItem";
import TabLayout from "../components/TabsLayout/TabLayout";
import useSWR from "swr";
import League from "../components/League/League";
import { ILeague } from "../Types/ILeague";

const API =
  "https://core-sport-api.zarebin.ir/api/football/fixtures/?date=2023-05-20";

const fetcher = (date: string) => fetch(API).then((res) => res.json());

const Matchs = () => {
  const { data, error, isLoading } = useSWR(API, fetcher, {
    refreshInterval: 15000,
  });

  const [selectedItem, setSelectedItem] = useState<ITabItem>({
    id: 2,
    label: "امروز",
  });
  const [items, setItems] = useState([
    { id: 1, label: "دیروز" },
    { id: 2, label: "امروز" },
    { id: 3, label: "فردا" },
  ]);

  const handleTabItemClick = (item: ITabItem): void => {
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
