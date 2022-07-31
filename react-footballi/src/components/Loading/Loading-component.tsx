import React from "react";
import Box from "../Box/Box-component.tsx";

function Loading() {
  return (
    <Box
      style={{
        width: 20,
        height: 20,
        borderWidth: 8,
        borderStyle: "solid",
        borderColor: "#3d5af1 transparent #3d5af1 transparent",
        borderRadius: "50%",
        animation: "spin-anim 1.2s linear infinite",
      }}
    />
  );
}

export default Loading;
