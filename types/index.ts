export type Fixtures = {
  favorites: null;
  all: All[];
  pinned: any[];
  live: any[];
};

export type All = {
  fixtures: Fixture[];
  logo: string;
  id: string;
  api_id: string;
  name: string;
  season: string;
};

export type Fixture = {
  home: Away;
  away: Away;
  id: string;
  api_id: string;
  status: Status;
  elapsed: number;
  start_time: string;
  home_goals: number;
  away_goals: number;
  home_penalty_goals: null;
  away_penalty_goals: null;
  live_url: string;
  archive_url: string;
};

export type Away = {
  logo: string;
  id: number;
  api_id: number;
  name: string;
  is_favorite: null;
};

export type Status = 'FT' | 'AET';
