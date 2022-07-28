export interface TMatch {
    fixture: TFixture
    league: TLeague
    teams: TTeams
    goals: TGoals
    score: TScore
}

export interface TFixture {
    id: number
    referee: string | null
    timezone: string
    date: string
    timestamp: number
    periods: TPeriods
    venue: TVenue
    status: TStatus
}

export interface TPeriods {
    first: number | null
    second: number | null
}

export interface TVenue {
    id: number | null
    name: string
    city: string
}

export interface TStatus {
    long: string
    short: string
    elapsed: number | null
}

export interface TLeague {
    id: number
    name: string
    country: string
    logo: string
    flag: string
    season: number
    round: string
}

export interface TTeams {
    home: TResult
    away: TResult
}

export interface TResult {
    id: number
    name: string
    logo: string
    winner: boolean | null
}

export interface TGoals {
    home: number | null
    away: number | null
}

export interface TScore {
    halftime: THalftime
    fulltime: TFulltime
    extratime: TExtratime
    penalty: TPenalty
}

export interface THalftime {
    home: number | null
    away: number | null
}

export interface TFulltime {
    home: number | null
    away: number | null
}

export interface TExtratime {
    home: any
    away: any
}

export interface TPenalty {
    home: any
    away: any
}
