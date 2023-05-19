type fixturesType = {
  id: string;
  home: {
    id: number;
    logo: string;
    name: string;
  };
  away: {
    id: number;
    logo: string;
    name: string;
  };
  home_goals: number;
  away_goals: number;
}[];

interface leagueTypeResponse {
  all: {
    id: string;
    logo: string;
    name: string;
    fixtures: fixturesType 
  }[];
}

export default leagueTypeResponse;
