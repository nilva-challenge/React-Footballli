// import logo from "./logo.svg";
import "./App.css";
import AllTabs from "./components/AllTabs";
import db from "./DB/db.json";
import dbAzadegan from "./DB/dbAzadegan.json";
import moment from "moment";
import ScrollableTabsButtonPrevent from "./components/ScrollableTabsButtonPrevent";
import TabsViewer from "./components/TabsViewer";
import { Box } from "@mui/material";
import Header from "./components/Header";
import BottomNavigate from "./components/BottomNavigate";

function App() {
  const dates = [
    moment().subtract(1, "days").format("L"),
    moment().subtract(0, "days").format("L"),
    moment().subtract(-1, "days").format("L"),
  ];

  // console.log(dates);
  db.response.reverse().map((state) => {
    if (!dates.includes(moment(state.fixture.date).format("L")))
      dates.push(moment(state.fixture.date).format("L"));
  });
  dbAzadegan.response.map((state) => {
    if (!dates.includes(moment(state.fixture.date).format("L")))
      dates.push(moment(state.fixture.date).format("L"));
  });

  const sortedDates = dates.sort((a, b) => moment(a) - moment(b)).reverse();
  // for checking data
  console.log(sortedDates);
  // console.log(
  //   dbAzadegan.response.map((state) => moment(state.fixture.date).format("L"))
  // );
  // console.log(
  //   db.response.map((state) => moment(state.fixture.date).format("L"))
  // );
  return (
    <div>
      <Header />
      {/* <AllTabs
        db={db.response}
        db2={dbAzadegan.response}
        sortedDates={sortedDates}
      /> */}

      <TabsViewer
        db={db.response}
        db2={dbAzadegan.response}
        sortedDates={sortedDates}
      />
      <BottomNavigate />
      {/* <ScrollableTabsButtonPrevent /> */}
      {/* <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
    </div>*/}
    </div>
  );
}

export default App;
