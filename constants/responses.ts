export namespace Global {
  export type team = {
    logo: string,
    id: number,
    api_id: number,
    name: string
  }

  export type match = {
    api_id: string
    archive_url: null
    away: team
    away_goals: number
    away_penalty_goals: number | null
    elapsed: number
    home: team
    home_goals: number
    home_penalty_goals: number | null
    id: string
    live_url: string | null
    start_time: string
    status: string
  }
  export type matches = {
    api_id: string
    fixtures: Array<match>
    id: string
    logo: string
    name: string
    season: string
  }
}