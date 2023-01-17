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
    <div className="overflow-auto h-[calc(100vh-236px)]  max-h-[calc(100vh-236px)] bg-gray-100 p-4 pb-0">
      {scores ? (
        scores.length > 0 ? (
          scores.map((item) => (
            <div className="mb-4">
              <LeagueCard data={item} />
            </div>
          ))
        ) : (
          <div> در حال بارگزاری... </div>
        )
      ) : (
        <p>خطا در برقراری ارتباط با سرور</p>
      )}
    </div>
  );
};
export default ScoresList;
