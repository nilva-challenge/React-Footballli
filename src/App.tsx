import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { scores } from "./app/redux/football/actions";
import { AppDispatch, RootState } from "./app/redux/store";
import BottomMenu from "./components/BottomMenu";
import RTL from "./app/RTL/RTL";
import MobileContainer from "./components/MobileContainer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import DateTabs from "./components/DateTabs";
import { getTime } from "./app/service/datetime";
import ScoresList from "./components/ScoresList";
import { useSelector } from "react-redux";

function App() {
  const Dispatch = useDispatch<AppDispatch>();
  const scoresState = useSelector((state: any) => state.football.scores);
  const [date, setDate] = useState<string>(getTime());
  const callApi = () => {
    Dispatch(scores(date));
  };

  useEffect(() => {
    callApi();
  }, [date]);
  return (
    <div className="App">
      <RTL>
        <MobileContainer>
          <div>
            <Header />
            <SearchBar />
            <DateTabs value={date} setValue={setDate} />
            <ScoresList scores={scoresState} />
          </div>
          <BottomMenu />
        </MobileContainer>
      </RTL>
    </div>
  );
}

export default App;
