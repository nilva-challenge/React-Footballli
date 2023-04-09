import React from "react";

interface PropsType {
  bg?: string;
  children: React.ReactNode;
  style?: any;
  onPress?: () => void;
}

function Box(props: PropsType) {
  return (
    <div
      onClick={props.onPress}
      style={{
        backgroundColor: props.bg,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}

export default Box;
