import React from "react";
import Box from "@mui/material/Box";
import moment from "moment";
import InfiniteScroll from "../InfiniteScroll";
import { Typography } from "@mui/material";
import { Tab } from "./styles";
import { TabsProps } from "./types";
import useTabScroll from "../../../core/hooks/useTabScroll";

const Tabs = ({ active, handleActive }: TabsProps) => {
  const [days, focusDay, handleScrollLeft, handleScrollRight] = useTabScroll();

  return (
    <React.Fragment>
      <Box
        sx={{
          maxWidth: { xs: "100%", sm: "480" },
          bgcolor: "background.paper",
        }}
      >
        <InfiniteScroll
          onReachLeft={handleScrollLeft}
          onReachRight={handleScrollRight}
          position={10}
          horizontal
        >
          {days.map(function (day: any, index: number) {
            const geoDay = moment(day.key, "YYYY/M/D").toDate();

            const dayInWord = new Intl.DateTimeFormat("fa-IR", {
              dateStyle: "full",
              timeStyle: "long",
            })
              .format(geoDay)
              .split("،")[0]
              .split(",")[0]
              .split(" ");

            return (
              <Tab
                id={day.key === focusDay ? "focus" : "nonfocous"}
                key={day.key}
                active={active === day.key}
                onClick={() => handleActive(day.key)}
              >
                {moment(day.value, "YYYY/M/D").isValid() ? (
                  <>
                    <Typography
                      sx={{ fontSize: "16px", fontWeight: "bold" }}
                      variant="subtitle1"
                    >
                      {dayInWord[2] + " \u202C"}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      {" "}
                      {dayInWord[1] + "\u202C"}
                    </Typography>
                  </>
                ) : (
                  <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                    {" "}
                    {day.value}
                  </Typography>
                )}
              </Tab>
            );
          })}
        </InfiniteScroll>
      </Box>
    </React.Fragment>
  );
};

export default Tabs;
