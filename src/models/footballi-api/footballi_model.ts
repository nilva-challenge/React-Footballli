export type teamFootbali = {
  logo: string;
  id: number;
  api_id: number;
  name: string;
};

export type fixturesFootbali = {
  home: teamFootbali;
  away: teamFootbali;
  id: string;
  api_id: string;
  status: string;
  elapsed: number;
  start_time: string;
  home_goals: number;
  away_goals: number;
  home_penalty_goals: null | number;
  away_penalty_goals: null | number;
  archive_url: null | string;
};

export type allDataFootbali = {
  fixtures: fixturesFootbali[];
  logo: string;
  id: string;
  api_id: string;
  name: string;
  season: string;
};

export interface FootbaliModel {
  favorites: null | any[];
  all: allDataFootbali[];
  pinned: [];
  live: [];
}
