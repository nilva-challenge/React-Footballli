import { BaseAccordion, BaseSkeleton } from 'components/Base';
import { useLeagueResults, useSearch } from '../hooks';
import { LeagueTitle } from './LeagueTitle';
import { TeamMatches } from './TeamMatches';

export const LeagueResult = () => {
  const { data, isLoading } = useLeagueResults();
  const { hasLeagueSearchValue } = useSearch();

  if (isLoading) return <BaseSkeleton count={5} />;

  return (
    <>
      {data.map(({ id, logo, name, fixtures }) => {
        if (hasLeagueSearchValue(fixtures)) return null;

        return (
          <BaseAccordion key={id} title={<LeagueTitle logo={logo} title={name} />}>
            <TeamMatches fixtures={fixtures} />
          </BaseAccordion>
        );
      })}
    </>
  );
};
