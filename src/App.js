// import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";
import TabsViewer from "./components/TabsViewer";
import Header from "./components/Header";
import BottomNavigate from "./components/BottomNavigate";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme.js";
import { CssBaseline } from "@mui/material/";
import { getAllData1, getAllData2 } from "./actions/allData";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllData1());
    dispatch(getAllData2());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <TabsViewer />

      <BottomNavigate />
    </ThemeProvider>
  );
}

export default App;
