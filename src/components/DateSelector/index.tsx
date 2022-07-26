import { DateSelectorWrapper } from "./styles";
import { createDatesArray } from "./../../utils/dateUtils";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { DateSelectorProps } from "./types";
import moment from "moment-jalaali";

const datesArray = createDatesArray(-7, 7);

export default function DateSelector({ setDate }: DateSelectorProps) {
  const [tab, setTab] = useState(
    datesArray.findIndex((date) => date.title === "امروز")
  );

  const onTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
    setDate(datesArray[newValue].date.format("YYYY-MM-DD"));
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
