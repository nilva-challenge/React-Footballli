import { FixturesPageContainer } from "./styles";
import { Topbar } from "../../components/Topbar";
import { SearchInput } from "../../components/SerachInput";
import DateSelector from "../../components/DateSelector";
import { useEffect, useState } from "react";
import { formatToday } from "../../utils/dateUtils";
import { useBrowseFixtures } from "./hooks";
import { BrowseFixturesResponse, LeaguesList } from "./types";
import { Match } from "@testing-library/react";

export function Fixtures() {
  const [date, setDate] = useState(formatToday());
  const [leaguesList, setLeaguesList] = useState<LeaguesList>([]);
  const { data, isLoading } = useBrowseFixtures({ date });

  useEffect(() => {
    if (data) {
      setLeaguesList(filterByLeague(data));
    }
  }, [data]);

  return (
    <FixturesPageContainer>
      <Topbar />
      <SearchInput />
      <DateSelector />
    </FixturesPageContainer>
  );
}

function filterByLeague(list: BrowseFixturesResponse) {
  return list.response.reduce((acc, curr) => {
    const leagueIndex = acc.findIndex(
      (item) => item.leagueid === curr.league.id
    );

    if (leagueIndex > -1) {
      const newAcc = [...acc];

      newAcc[leagueIndex].matches.push(curr);

      return newAcc;
    } else {
      const newAcc = [...acc];

      newAcc.push({ leagueid: curr.league.id, matches: [curr] });

      return newAcc;
    }
  }, [] as LeaguesList);
}
