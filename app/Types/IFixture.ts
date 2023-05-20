import { ITeam } from "./ITeam";

export interface IFixture {
  id: string;
  away: ITeam;
  awayGoals: number;
  home: ITeam;
  homeGoals: number;
  startTime: string;
  status: string;
}
