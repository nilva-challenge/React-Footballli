interface Team {
  id: number;
  name: string;
  logo: string;
}

interface League {
  id: number;
  name: string;
  logo: string;
}

interface Fixture {
  id: number;
  date: string;
}

interface Goals {
  home: number;
  away: number;
}

interface Paging {
  current: number;
  total: string;
}

interface TeamMatch {
  home: Team;
  away: Team;
}

export interface FixturesApiCall {
  paging: Paging;
  errors?: string[];
  get: string;
  response: Match[];
}

export type CategorizedByLeagueList = CategorizedByLeague[];

export interface CategorizedByLeague {
  league: League;
  matches: MatchCategorizedByLeague[];
}

export interface MatchCategorizedByLeague {
  fixture: Fixture;
  goals: Goals;
  teams: TeamMatch;
}

export interface Match {
  fixture: Fixture;
  league: League;
  teams: TeamMatch;
  goals: Goals;
}
