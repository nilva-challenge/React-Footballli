export interface IFixturesResult {
  favorites: IFixtureBody[];
  all: IFixtureBody[];
  pinned: IFixtureBody[];
  live: IFixtureBody[];
}

export interface IFixtureBody {
  fixtures: IFixture[];
  logo: string;
  id: string;
  api_id: string;
  name: string;
  season: string;
}

export interface ITeam {
  logo: string;
  id: number;
  api_id: number;
  name: string;
  is_favorite: null;
}

export type Status = 'FT' | 'NS';

export interface IFixture {
  home: ITeam;
  away: ITeam;
  id: string;
  api_id: string;
  status: Status;
  elapsed: number;
  start_time: Date;
  home_goals: number;
  away_goals: number;
  home_penalty_goals: null;
  away_penalty_goals: null;
  live_url: null;
  archive_url: null;
}
