import { useGlobalContext } from "../context/context";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function Sidebar() {
  const [sideBarValue, setSideBarValue] = React.useState(0);
  const { dates, setSpecificDate, expanded } = useGlobalContext();
  const handleChange = (event, newValue) => {
    setSideBarValue(newValue);
  };

  React.useEffect(() => {
    if (expanded && dates) {
      setSpecificDate(dates[sideBarValue]);
    }
  }, [dates, expanded, setSpecificDate, sideBarValue]);



  return (
    <Box>
      <Tabs
        value={sideBarValue}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {dates &&
          dates.map((item, idx) => {
            return <Tab label={item} key={idx} />;
          })}
      </Tabs>
    </Box>
  );
}
