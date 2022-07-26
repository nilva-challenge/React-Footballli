import { FixturesPageContainer } from "./styles";
import { Topbar } from "../../components/Topbar";
import { SearchInput } from "../../components/SerachInput";
import DateSelector from "../../components/DateSelector";
import { useEffect, useState } from "react";
import { formatToday } from "../../utils/dateUtils";
import { useBrowseFixtures } from "./hooks";
import { BrowseFixturesResponse, LeaguesList } from "./types";
import LeaguesListComponent from "../../components/LeaguesList";

export function Fixtures() {
  const [date, setDate] = useState(formatToday());
  const [leaguesList, setLeaguesList] = useState<LeaguesList>([]);
  const { data, isLoading } = useBrowseFixtures({ date });

  console.log(leaguesList);
  useEffect(() => {
    if (data) {
      setLeaguesList(filterByLeague(data));
    }
  }, [data]);

  return (
    <FixturesPageContainer>
      <Topbar />
      <SearchInput />
      <DateSelector setDate={setDate} />
      <LeaguesListComponent list={leaguesList} />
    </FixturesPageContainer>
  );
}

function filterByLeague(list: BrowseFixturesResponse) {
  return list.response.reduce((acc, curr) => {
    const leagueIndex = acc.findIndex(
      (item) => item.league.id === curr.league.id
    );

    if (leagueIndex > -1) {
      acc[leagueIndex].matches.push({
        fixture: curr.fixture,
        teams: curr.teams,
      });
      return acc;
    } else {
      acc.push({
        league: curr.league,
        matches: [{ fixture: curr.fixture, teams: curr.teams }],
      });
      return acc;
    }
  }, [] as LeaguesList);
}
