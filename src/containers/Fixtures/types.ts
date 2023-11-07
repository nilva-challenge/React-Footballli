export interface BrowseFixturesArgs {
  date: string;
}

export interface BrowseFixturesResponse {
  response: Match[];
}

export type LeaguesList = LeagueData[];

export interface LeagueData {
  league: League;
  matches: MatchData[];
}

export interface MatchData {
  fixture: Fixture;
  teams: {
    home: Team;
    away: Team;
  };
}

export interface Match {
  fixture: Fixture;
  league: League;
  teams: {
    home: Team;
    away: Team;
  };
}

interface Fixture {
  id: number;
  date: string;
}

interface League {
  id: number;
  name: string;
  logo: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
}
