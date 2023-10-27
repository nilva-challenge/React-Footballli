import { TFixture } from "../types";
import "../styles/Fixture.css";
import Result from "./Result";
import Team from "./Team";

type props = {
  fixture: TFixture;
};

const Fixture = ({ fixture }: props) => {
  return (
    <div className="fixture">
      <Team team={fixture.home} isHome={true}></Team>
      <Result
        awayGoals={fixture.away_goals}
        homeGoals={fixture.home_goals}
        startTime={fixture.start_time}
        elapsed={fixture.elapsed}
        status={fixture.status}
      ></Result>
      <Team team={fixture.away} isHome={false}></Team>
    </div>
  );
};

export default Fixture;
