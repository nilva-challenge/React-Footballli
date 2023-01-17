import { Avatar } from "@mui/material";
import { dateTimeCustom } from "../app/service/datetime";

type MatchItemProps = {
  data: matchData;
};
export type matchData = {
  api_id: string;
  archive_url: string | null;
  away: teamInfo;
  away_goals: number | null;
  away_penalty_goals: number | null;
  elapsed: number | null;
  home: teamInfo;
  home_goals: number | null;
  home_penalty_goals: number | null;
  id: string;
  live_url: string | null;
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
    <div className="flex items-center w-full justify-center mb-4 border-b pb-4">
      <p className="pl-2 text-sm min-w-[100px] text-left max-w-[50px] text-ellipsis break-normal	">{data.home.name}</p>
      <Avatar className="max-w-[30px] !h-[30px]" src={data.home.logo} />
      <p className="px-2 text-sm min-w-[50px] max-w-[50px]">
        {dateTimeCustom(new Date(data.start_time).getTime() / 1000).time}
      </p>
      <Avatar className="max-w-[30px] !h-[30px]" src={data.away.logo} />
      <p className="pr-2 text-sm min-w-[100px] text-right max-w-[50px] text-ellipsis	break-normal	">{data.away.name}</p>
    </div>
  );
};

export default MatchItem;
