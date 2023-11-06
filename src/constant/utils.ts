import {Fixture, League} from "@/types/LeagueType";

export function getLeaguesWithFixturesOnSameDay(leagues: League[]): Map<string, League[]> {
    const leaguesMap = new Map<string, League[]>();

    leagues.forEach((league) => {
        const fixturesByDate = new Map<string, Fixture[]>();

        league.fixtures.forEach((fixture) => {
            const startTime = new Date(fixture.start_time);
            const dateKey = startTime.toDateString();

            if (!fixturesByDate.has(dateKey)) {
                fixturesByDate.set(dateKey, []);
            }

            fixturesByDate.get(dateKey)?.push(fixture);
        });

        fixturesByDate.forEach((fixtures, date) => {
            if (fixtures.length > 0) {
                if (!leaguesMap.has(date)) {
                    leaguesMap.set(date, []);
                }

                leaguesMap.get(date)?.push({ ...league, fixtures });
            }
        });
    });

    return leaguesMap;
}

export function formatDateDistance(dateStr: string): string {
    const today = new Date();
    const inputDate = new Date(dateStr);

    // Calculate the time difference in milliseconds
    const timeDiff = inputDate.getTime() - today.getTime();

    // Calculate the difference in days
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff === 0) {
        return 'today';
    } else if (daysDiff === -1) {
        return 'yesterday';
    } else if (daysDiff === 1) {
        return 'tomorrow';
    } else {
        return dateStr;
    }
}