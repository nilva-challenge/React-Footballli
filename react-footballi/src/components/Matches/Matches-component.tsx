import dayjs from "dayjs";
import React, { useState } from "react";
import { NormalizeDataType } from "../../types/shares.ts";
import Box from "../Box/Box-component.tsx";
import Divider from "../Divider/Divider-component.tsx";
import Icon from "../Icon/Icon-component.tsx";
import MatchRow from "../MatchRow/MatchRow-component.tsx";
import Spacer from "../Spacer/Spacer-component.tsx";
import Stack from "../Stack/Stack-component.tsx";

interface PropsType {
  leagueTitle: string;
  data: NormalizeDataType[];
  logo: string;
  selectedDay: string;
}

function Matches(props: PropsType) {
  let [open, setOpen] = useState(true);

  return (
    <Box
      onPress={() => {
        setOpen(!open);
      }}
      bg="white"
      style={{
        width: "100%",
        borderRadius: 12,
        cursor: "pointer",
      }}
    >
      <Stack
        distribution="space-between"
        style={{
          padding: "12px 12px 12px 18px",
        }}
      >
        <Stack alignment="center">
          <Box
            bg="white"
            style={{
              width: 20,
              height: 20,
              borderRadius: 50,
              overflow: "hidden",
            }}
          >
            <img src={props.logo} width="100%" height="100%" sizes="cover" />
          </Box>
          <Spacer size={5} />
          <p style={{ color: "#0066ff" }}>{props.leagueTitle}</p>
        </Stack>
        <Stack
          alignment="center"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.5s",
          }}
        >
          <Icon name="FiChevronDown" />
        </Stack>
      </Stack>
      {open ? (
        <>
          <Divider size={3} line color="#e6e6e6" />
          {props.data.map((item, index) => {
            let isLastIndex = index + 1 === props.data.length;
            let today = dayjs().format("YYYY-MM-DD");
            let day = dayjs(item.fixture.date).format("YYYY-MM-DD");
            let diff = dayjs(day).diff(today, "days");

            return (
              <MatchRow
                home={{
                  name: item.teams.home.name,
                  logo: item.teams.home.logo,
                  goals: item.goals.home,
                }}
                away={{
                  name: item.teams.away.name,
                  logo: item.teams.away.logo,
                  goals: item.goals.away,
                }}
                time={item.fixture.timestamp}
                isLastIndex={isLastIndex}
                isPastDay={diff < 0}
              />
            );
          })}
        </>
      ) : null}
    </Box>
  );
}

export default Matches;
