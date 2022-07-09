import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  direction: "rtl",
  palette: {
    backgroundColor: {
      default: "#f5f6fb",
    },
  },
  // backgroundColor: "#f5f6fb",
  typography: {
    fontFamily: "IRANSansX, sans-serif",
  },
  // body1: {
  //   fontWeight: 600,
  // },
  // body2: {
  //   fontWeight: 600,
  // },
  // fontFamily: "Vazirmatn, sans-serif",
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
