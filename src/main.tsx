import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoute } from "./routes/App.route.tsx";
import "./assets/styles/globalstyle.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppRoute />
  </React.StrictMode>
);
