import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./assets/fonts/Vazirmatn-font-face.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: "Vazirmatn",
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
