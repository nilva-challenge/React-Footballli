import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "../AppRoutes.tsx";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./app/store.ts";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./lib/theme.const";
import { BrowserRouter } from "react-router-dom";

// All providers such as ThemeProvider and ReduxProvider and BrowserRouter are implemented here.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ReduxProvider store={store}>
          <AppRoutes />
        </ReduxProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
