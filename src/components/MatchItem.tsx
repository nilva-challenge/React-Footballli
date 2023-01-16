import { Avatar } from "@mui/material";
import { dateTimeCustom } from "../app/service/datetime";

type MatchItemProps = {
  data: matchData;
};
export type matchData = {
  api_id: string;
  archive_url: string;
  away: teamInfo;
  away_goals: number;
  away_penalty_goals: number;
  elapsed: number;
  home: teamInfo;
  home_goals: number;
  home_penalty_goals: number;
  id: string;
  live_url: string;
  start_time: string;
  status: string;
};
type teamInfo = {
  api_id: string;
  id: string;
  logo: string;
  name: string;
};
const MatchItem = ({ data }: MatchItemProps) => {
  return (
    <div className="flex items-center w-full justify-center mb-2">
      <p className="pl-2 text-sm">{data.home.name}</p>
      <Avatar src={data.home.logo} />
      <p className="px-2 text-sm">
        {dateTimeCustom(new Date(data.start_time).getTime() / 1000).time}
      </p>
      <Avatar src={data.away.logo} />
      <p className="pr-2 text-sm">{data.away.name}</p>
    </div>
  );
};

export default MatchItem;
