import { DateSelectorWrapper } from "./styles";
import { createDatesArray } from "./../../utils/dateUtils";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

const datesArray = createDatesArray();
export default function DateSelector() {
  const [tab, setTab] = useState(2);

  const onTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <DateSelectorWrapper>
      <Tabs value={tab} onChange={onTabChange} aria-label="basic tabs example">
        {datesArray.map((date) => (
          <Tab label={date.title} />
        ))}
      </Tabs>
    </DateSelectorWrapper>
  );
}
