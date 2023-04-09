import React from "react";

interface PropsType {
  size: number;
}

function Spacer(props: PropsType) {
  return <div style={{ height: 1, width: props.size }} />;
}

export default Spacer;
