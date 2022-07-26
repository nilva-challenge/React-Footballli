import { DateSelectorWrapper } from "./styles";
import { createDatesArray } from "./../../utils/dateUtils";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

const datesArray = createDatesArray(-4, 4);
export default function DateSelector() {
  const [tab, setTab] = useState(
    datesArray.findIndex((date) => date.title === "امروز")
  );

  const onTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <DateSelectorWrapper>
      <Tabs
        variant="scrollable"
        scrollButtons={false}
        value={tab}
        onChange={onTabChange}
        aria-label="basic tabs example"
      >
        {datesArray.map((date) => (
          <Tab key={date.title} label={date.title} />
        ))}
      </Tabs>
    </DateSelectorWrapper>
  );
}
