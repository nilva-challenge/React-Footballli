export type TTeam = {
  logo: string;
  id: number;
  api_id: number;
  name: string;
  is_favorite: boolean;
};
export type TFixture = {
  home: TTeam;
  away: TTeam;
  id: string;
  api_id: string;
  status: string;
  elapsed: number;
  start_time: string;
  home_goals: number;
  away_goals: number;
  home_penalty_goals: number;
  away_penalty_goals: number;
  live_url: string;
  archive_url: string;
};
export type TLeague = {
  fixtures: TFixture[];
  logo: string;
  id: string;
  api_id: string;
  name: string;
  season: string;
};
export type TResponse = {
  favorites: [];
  all: TLeague[];
  pinned: [];
  live: [];
};
