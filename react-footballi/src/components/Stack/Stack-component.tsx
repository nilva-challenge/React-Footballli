import React from "react";

interface PropsType {
  distribution?: string;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  bg?: string;
  children: React.ReactNode;
  style?: any;
  alignment?: string;
  onPress?: () => void;
}

function Stack(props: PropsType) {
  return (
    <div
      onClick={props.onPress}
      style={{
        backgroundColor: props.bg,
        display: "flex",
        flexDirection: props.direction,
        alignItems: props.alignment,
        justifyContent: props.distribution,
        direction: "rtl",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}

export default Stack;
