import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  dateTimeCustom,
  getTime,
  timeToPersian,
} from "../app/service/datetime";
import { green, grey } from "@mui/material/colors";

type DateTabsProps = {
  value: string;
  setValue: (date: string) => void;
};
export default function DateTabs({ value, setValue }: DateTabsProps) {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const scrollRef = React.useRef<any>()
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
  const handleScroll = (e:any) => {
    console.log(e);
  };
  console.log(scrollRef.current)
  
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        ref={scrollRef}
        // onScroll={handleScroll}
        selectionFollowsFocus
        // centered
        sx={{
          "& .MuiTab-root": {
            color: grey[500] + "!important",
            padding:"12px 0px !important",
            margin:"0 16px",
            minWidth:'70px !important'
          },
          "& .Mui-selected": {
            color: "#000 !important",
            fontWeight: "bolder !important",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: green[600],
            height: 4,
            borderRadius: "10px 10px 0 0",
          },
        }}
      >
        {renderItems()}
      </Tabs>
    </Box>
  );
}
