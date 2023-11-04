import { CSSProperties } from "react";

import "./loading.scss";

export default function Loading({
  height = "calc(100vh - 184px)",
}: CSSProperties) {
  return (
    <div
      id="page-loader"
      className="flex justify-center items-center"
      style={{ height }}
    >
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
}
