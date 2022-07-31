import React from "react";

interface PropsType {
  size: number;
  line?: boolean;
  color?: string;
}

function Divider(props: PropsType) {
  return props.line ? (
    <div
      style={{
        width: "100%",
        height: props.size,
        backgroundColor: props.color,
      }}
    />
  ) : (
    <div style={{ width: 1, height: props.size }} />
  );
}

export default Divider;
