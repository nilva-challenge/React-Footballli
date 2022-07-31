import dayjs from "dayjs";
import React from "react";
import { formatNumber } from "../../helpers/format-helper.ts";
import Box from "../Box/Box-component.tsx";
import Spacer from "../Spacer/Spacer-component.tsx";
import Stack from "../Stack/Stack-component.tsx";

interface PropsType {
  home: TeamData;
  away: TeamData;
  time: number;
  isLastIndex: boolean;
  isPastDay: boolean;
}
interface TeamData {
  name: string;
  logo: string;
  goals: number;
}

function MatchRow(props: PropsType) {
  return (
    <Box
      style={{
        padding: "12px 0",
        borderBottomWidth: props.isLastIndex ? 0 : 2,
        borderBottomStyle: "solid",
        borderBottomColor: "#f2f2f2",
      }}
    >
      <Stack distribution="center">
        <Stack alignment="center" distribution="end" style={{ width: "40%" }}>
          <p style={{ fontSize: 14 }}>{props.home.name}</p>
          <Spacer size={5} />
          <Box
            style={{
              width: 20,
              height: 20,
              borderRadius: 50,
              overflow: "hidden",
            }}
          >
            <img
              src={props.home.logo}
              width="100%"
              height="100%"
              sizes="cover"
            />
          </Box>
        </Stack>
        <Spacer size={10} />
        {!props.isPastDay ? (
          <Stack alignment="center">
            <p style={{ fontSize: 14 }}>
              {formatNumber(dayjs(props.time).format("HH:mm"))}
            </p>
          </Stack>
        ) : (
          <Stack alignment="center">
            <p style={{ fontSize: 14 }}>
              {props.home.goals} - {props.away.goals}
            </p>
          </Stack>
        )}
        <Spacer size={10} />
        <Stack alignment="center" style={{ width: "40%" }}>
          <Box
            style={{
              width: 20,
              height: 20,
              borderRadius: 50,
              overflow: "hidden",
            }}
          >
            <img
              src={props.away.logo}
              width="100%"
              height="100%"
              sizes="cover"
            />
          </Box>
          <Spacer size={5} />
          <p style={{ fontSize: 14 }}>{props.away.name}</p>
        </Stack>
      </Stack>
    </Box>
  );
}

export default MatchRow;
