import { FixturesApiCall, CategorizedByLeagueList } from "./types";

export function categorizeLeague(list: FixturesApiCall) {
  return list.response.reduce((games, match) => {
    const gameIndex = games.findIndex(
      (game) => game.league.id === match.league.id
    );
    if (gameIndex > -1)
      games[gameIndex].matches.push({
        fixture: match.fixture,
        goals: match.goals,
        teams: match.teams,
      });
    else
      games.push({
        league: match.league,
        matches: [
          { fixture: match.fixture, goals: match.goals, teams: match.teams },
        ],
      });

    return games;
  }, [] as CategorizedByLeagueList);
}
