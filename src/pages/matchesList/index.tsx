import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { scores } from "../../app/redux/football/actions";
import { AppDispatch } from "../../app/redux/store";
import { getTime } from "../../app/service/datetime";
import DateTabs from "../../components/DateTabs";
import Header from "../../components/Header";
import ScoresList from "../../components/ScoresList";
import SearchBar from "../../components/SearchBar";

const MatchesList = () => {
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
    <div>
      <Header />
      <SearchBar />
      <DateTabs value={date} setValue={setDate} />
      <ScoresList scores={scoresState} />
    </div>
  );
};
export default MatchesList;
