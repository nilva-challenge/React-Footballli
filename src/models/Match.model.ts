interface Match {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
}

interface Periods {
  first?: number;
  second?: number;
}

interface Venue {
  id?: number;
  name: string;
  city: string;
}

interface Status {
  long: string;
  short: "NS" | "PST" | "FT";
  elapsed?: number;
}

interface Fixture {
  id: number;
  referee: string;
  timezone: string;
  date: Date;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

interface Home {
  id: number;
  name: string;
  logo: string;
  winner?: boolean;
}

interface Away {
  id: number;
  name: string;
  logo: string;
  winner?: boolean;
}

interface Teams {
  home: Home;
  away: Away;
}

interface Goals {
  home?: number;
  away?: number;
}

interface Halftime {
  home?: number;
  away?: number;
}

interface Fulltime {
  home?: number;
  away?: number;
}

interface Extratime {
  home?: number;
  away?: number;
}

interface Penalty {
  home?: number;
  away?: number;
}

interface Score {
  halftime: Halftime;
  fulltime: Fulltime;
  extratime: Extratime;
  penalty: Penalty;
}

export default Match;
