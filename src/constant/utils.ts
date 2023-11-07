import {Fixture, League} from "@/types/LeagueType";
import * as moment from 'jalali-moment';

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

                leaguesMap.get(date)?.push({...league, fixtures});
            }
        });
    });

    return leaguesMap;
}

export function formatDateDistance(dateStr: string): string {
    const today = new Date();
    const inputDate = new Date(dateStr);

    const timeDiff = inputDate.getTime() - today.getTime();

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

export function generateDateList(offset: number, inputDate?: string): string[] {
    if (!inputDate) {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        inputDate = `${year}-${month}-${day}`;
    }

    const dateList: string[] = [];
    const startDate = new Date(inputDate);

    // Check if startDate is a valid date
    if (isNaN(startDate.getTime())) {
        throw new Error('Invalid input date format. Please use "YYYY-MM-DD" format.');
    }

    for (let i = 1; i <= offset; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        dateList.push(formattedDate);
    }

    return dateList;
}

export function convertToPersianDate(inputDate: string): string {
    const gregorianDate = moment(inputDate, 'YYYY-MM-DD');
    const jalaliDate = gregorianDate.locale('fa').format('D MMMM');

    return jalaliDate;
}