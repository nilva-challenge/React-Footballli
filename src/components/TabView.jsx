import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Accordion from "./Accordion";

const days = [
  "دیروز",
  "امروز",
  "فردا",
  "1 خرداد",
  "2 خرداد",
  "3 خرداد",
  "4 خرداد",
  "5 خرداد",
  "6 خرداد",
];

const TabView = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        {days.map((day) => {
          return <Tab key={day}>{day}</Tab>;
        })}
      </TabList>
      {days[tabIndex] === "دیروز" ? (
        <Accordion/>
      ) : (
        <div className="min-h-[30vh] grid place-items-center">
          <h2 className="bg-green-100 border-t-4 border-primary rounded-b text-primary p-4 shadow-md">
            متاسفانه بازی در این زمان وجود ندارد
          </h2>
        </div>
      )}
    </Tabs>
  );
};

export default TabView;
