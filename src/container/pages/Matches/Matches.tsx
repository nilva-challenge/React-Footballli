import React, { useEffect, useState } from "react";
import moment from "moment";
import Tabs from "../../components/Tabs";
import { FixturesBox } from "./styles";
import SearchBox from "../../components/SearchBox";
import MatchCard from "../../components/MatchCard";
import AppBar from "../../components/AppBar";
import Loader from "../../../core/components/Loader";
import { getFixtures } from "../../../core/redux/actionCreators/getFixtures";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../core/hooks/useTypeSelector";
import { Props, TDispatch } from "./types";

export const PageText: React.FC<Props> = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

const Matches = () => {
  const dispatch = useDispatch<TDispatch>();
  const { fixtures, loading, error } = useTypedSelector(
    (state) => state.fixtures
  );
  const [active, setActive] = useState(moment(new Date()).format("YYYY/M/D"));

  useEffect(() => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();

    let date = yyyy + "-" + mm + "-" + dd;
    fetch(date);
  }, []);

  const fetch = async (date: string) => {
    await dispatch(getFixtures(date));
  };

  const handleActive = (date: string) => {
    setActive(date);
    let day = moment(date).toDate();
    const nmd = day.toLocaleDateString("en-US");
    var date2 = moment(nmd).format("YYYY-MM-DD");
    fetch(date2);
  };

  return (
    <React.Fragment>
      <AppBar />
      <SearchBox />
      <Tabs active={active} handleActive={handleActive} />
      {loading ? (
        <Loader />
      ) : (
        <FixturesBox>
          {fixtures &&
            fixtures.map((value: any, index: any) => (
              <MatchCard key={index} value={value} />
            ))}
        </FixturesBox>
      )}
    </React.Fragment>
  );
};

export default Matches;
