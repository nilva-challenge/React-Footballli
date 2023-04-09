export interface CompetitionsDataType {
  events: any;
  fixture: {
    date: string;
    id: number;
    periods: {
      first: number;
      second: number;
    };
    referee: string;
    status: {
      elapsed: number;
      long: string;
      short: string;
    };
    timestamp: number;
    timezone: string;
    venue: {
      city: string;
      id: number;
      name: string;
    };
  };
  goals: { home: number; away: number };
  league: {
    country: string;
    flag: string;
    id: number;
    logo: string;
    name: string;
    round: string;
    season: number;
  };
  score: {
    extratime: { home: number; away: number };
    fulltime: { home: number; away: number };
    halftime: { home: number; away: number };
    penalty: { home: number; away: number };
  };
  teams: {
    away: {
      id: number;
      name: string;
      logo: string;
      winner: boolean;
    };
    home: {
      id: number;
      name: string;
      logo: string;
      winner: boolean;
    };
  };
}
