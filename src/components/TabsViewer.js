import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import moment from "moment";
import momentFa from "moment-jalaali";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

import ControlledAccordions from "./ControlledAccordions";
import TabPanel from "./TabPanel";

export default function TabsViewer() {
  const { db, db2, dates } = useSelector((state) => state.allDatas);
  const [value, setValue] = React.useState(1);

  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const sortedDates = dates
    ? [...new Set(dates)].sort((a, b) => moment(b) - moment(a))
    : null;

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      {!sortedDates ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: "10vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
          >
            {sortedDates.map((event, index) => {
              return (
                <Tab
                  key={index}
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
                ></Tab>
              );
            })}
          </Tabs>

          <SwipeableViews
            axis="x-reverse"
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            {sortedDates.map((event, index) => {
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
                          (ele) =>
                            moment(ele.fixture.date).format("L") === event
                        ),
                      ],
                      [
                        ...db2.filter(
                          (ele) =>
                            moment(ele.fixture.date).format("L") === event
                        ),
                      ],
                    ]}
                  />
                </TabPanel>
              );
            })}
          </SwipeableViews>
        </>
      )}
    </Box>
  );
}
