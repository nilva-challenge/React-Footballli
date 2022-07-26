export interface BrowseFixturesArgs {
  date: string;
}

export interface BrowseFixturesResponse {
  response: Match[];
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
