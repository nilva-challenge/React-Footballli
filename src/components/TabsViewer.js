import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import moment from "moment";
import momentFa from "moment-jalaali";

import { Container } from "@mui/system";
import ControlledAccordions from "./ControlledAccordions";
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
          {/* <Typography>{children}</Typography> */}
        </Box>
      )}
    </div>
  );
};

export default function TabsViewer({ db, db2, sortedDates }) {
  const [value, setValue] = React.useState(1);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      {/* <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}> */}
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
        // sx={{ direction: "rtl" }}
      >
        {/* {sortedDates.reverse().map((event, index) => { */}
        {sortedDates.map((event, index) => {
          return (
            <Tab
              //   onClick={() => console.log(`you Click ${index}`)}
              key={index}
              // label={event}
              label={
                event === moment().subtract(0, "days").format("L")
                  ? "امروز"
                  : event === moment().subtract(1, "days").format("L")
                  ? "دیروز"
                  : event === moment().subtract(-1, "days").format("L")
                  ? "فردا"
                  : Intl.DateTimeFormat("fa-IR", {
                      month: "short",
                      day: "numeric",
                    }).format(momentFa(event))
              }
              sx={{ direction: "rtl" }}
              //   label={moment(event).subtract(10, "days").calendar()}
            ></Tab>
          );
        })}
      </Tabs>

      <SwipeableViews
        // axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        axis="x-reverse"
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {sortedDates.map((event, index) => {
          {
            /* {sortedDates.reverse().map((event, index) => { */
          }
          return (
            <TabPanel
              value={value}
              key={index}
              index={index}
              dir={theme.direction}
            >
              <ControlledAccordions
                allData={[
                  [
                    ...db.filter(
                      (ele) => moment(ele.fixture.date).format("L") === event
                    ),
                  ],
                  [
                    ...db2.filter(
                      (ele) => moment(ele.fixture.date).format("L") === event
                    ),
                  ],
                ]}
              />
            </TabPanel>
          );
        })}
      </SwipeableViews>
    </Box>
  );
}
