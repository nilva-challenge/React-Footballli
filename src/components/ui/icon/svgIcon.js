import React from "react";
import { Icons } from "./icon";
import style from "./svgIcon.module.css";

// size : sm , md,lg, xl, 2x ... 7x
// color: primary, success, info , danger, dark, white ..
const SVGIcon = (props) => {
  return (
    <span
      className={`${style["svg-icon"]} svg-icon-${
        props.color || "dark"
      } svg-icon-${props.size || "xl"}`}
    >
      {Icons[props.name]}
    </span>
  );
};

export default SVGIcon;
