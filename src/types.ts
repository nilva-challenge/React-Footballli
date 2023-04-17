export interface AwayHome {
  api_id: number;
  id: number;
  logo: string;
  name: string;
}
export interface FixtureItem {
  api_id: string;
  archive_url: string | null;
  away: AwayHome;
  away_goals: string | null;
  away_penalty_goals: string | null;
  elapsed: null;
  home: AwayHome;
  home_goals: null;
  home_penalty_goals: null;
  id: string;
  live_url: string | null;
  start_time: string;
  status: string;
}
export interface DataType {
  api_id: string;
  fixtures: FixtureItem[];
  id: string;
  logo: string;
  name: string;
  season: string;
}
