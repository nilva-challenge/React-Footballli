import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  dateTimeCustom,
  getTime,
  timeToPersian,
} from "../app/service/datetime";

type DateTabsProps = {
  value: string;
  setValue: (date: string) => void;
};
export default function DateTabs({ value, setValue }: DateTabsProps) {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const renderItems = () => {
    let val = value;
    let unix = Date.parse(val);
    let date = new Date(unix);
    let tmp = [];
    for (let i = -5; i < 6; i++) {
      let customDate = new Date(date);
      customDate.setDate(customDate.getDate() + i);
      let label =
        dateTimeCustom(customDate.getTime() / 1000).day +
        " " +
        dateTimeCustom(customDate.getTime() / 1000).month;
      var today = new Date().setHours(0, 0, 0, 0);
      var thatDay = new Date(customDate).setHours(0, 0, 0, 0);
      if (today === thatDay) {
        label = "امروز";
      } else if (today - thatDay === 86400000) {
        label = "دیروز";
      } else if (today - thatDay === -86400000) {
        label = "فردا";
      }

      tmp.push({
        label: label,
        value: getTime(customDate),
      });
    }

    return tmp.map((item) => <Tab label={item.label} value={item.value} />);
  };
  //   React.useEffect(() => {
  //     renderItems();
  //   });

  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Tabs
        value={value}
        onChange={handleChange}
        // variant="scrollable"
        // scrollButtons={false}
        centered
        aria-label="scrollable prevent tabs example"
      >
        {renderItems()}
      </Tabs>
    </Box>
  );
}
