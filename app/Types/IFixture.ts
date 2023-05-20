import { ITeam } from "./ITeam";

export interface IFixture {
  id: string;
  away: ITeam;
  away_goals: number;
  home: ITeam;
  home_goals: number;
  start_time: string;
  status: string;
  elapsed: number;
}
