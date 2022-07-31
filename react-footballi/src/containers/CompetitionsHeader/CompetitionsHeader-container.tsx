import React from "react";
import Box from "../../components/Box/Box-component.tsx";
import Stack from "../../components/Stack/Stack-component.tsx";
import Icon from "../../components/Icon/Icon-component.tsx";
import Divider from "../../components/Divider/Divider-component.tsx";

interface PropsType {
  timesheets: React.ReactNode;
}

function CompetitionsHeader(props: PropsType) {
  return (
    <Box bg="white" style={{ padding: "16px 16px 0 16px" }}>
      <Stack distribution="space-between" alignment="center">
        <p>نتایج زنده</p>
        <Icon name="FiClock" color="#000000" />
      </Stack>
      <Divider size={16} />
      <Box
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        <input
          placeholder="جستجو..."
          style={{
            width: "100%",
            backgroundColor: "#f2f2f2",
            color: "#a6a6a6",
            border: "none",
            borderRadius: 4,
            height: 35,
            direction: "rtl",
            zIndex: 0,
            paddingRight: 40,
            fontFamily: "vazir",
          }}
        />
        <Stack
          style={{
            position: "absolute",
            top: 6,
            right: 12,
          }}
        >
          <Icon name="FiSearch" color="#a6a6a6" />
        </Stack>
      </Box>
      <Divider size={12} />
      {props.timesheets}
    </Box>
  );
}

export default CompetitionsHeader;
