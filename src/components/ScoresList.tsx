import LeagueCard from "./LeagueCard";
import { matchData } from "./MatchItem";

export type scoresListProps = {
  api_id: string;
  fixtures: matchData[];
  id: string;
  logo: string;
  name: string;
  season: string;
};
type scoresListItems = {
  scores: scoresListProps[];
};

const ScoresList = ({ scores }: scoresListItems) => {
  console.log(scores);
  return (
    <div className="overflow-auto h-[calc(100vh-236px)]  max-h-[calc(100vh-236px)] bg-gray-200 p-3">
      {scores.map((item) => (
        <div className="mb-2">
          <LeagueCard data={item} />
        </div>
      ))}
    </div>
  );
};
export default ScoresList;
