export interface Team {
    logo: string;
    id: number;
    api_id: number;
    name: string;
    is_favorite: null;
}

export interface Fixture {
    home: Team;
    away: Team;
    id: string;
    api_id: string;
    status: string;
    elapsed: number;
    start_time: string;
    home_goals: number;
    away_goals: number;
    home_penalty_goals: null;
    away_penalty_goals: null;
    live_url: string;
    archive_url: string;
}

export interface League {
    fixtures: Fixture[];
    logo: string;
    id: string;
    api_id: string;
    name: string;
    season: string;
}




