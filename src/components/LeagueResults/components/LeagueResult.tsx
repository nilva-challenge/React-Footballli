import { BaseAccordion, BaseSkeleton } from 'components/Base';
import { useLeagueResults } from '../hooks';
import { LeagueTitle } from './LeagueTitle';
import { TeamMatches } from './TeamMatches';
import { hasSearchValue } from '../utils';

export const LeagueResult = () => {
  const { data, isLoading, searchValue } = useLeagueResults();

  if (isLoading) return <BaseSkeleton count={5} />;

  return (
    <>
      {data.map(({ id, logo, name, fixtures }) => {
        if (searchValue && !hasSearchValue({ fixtures, searchValue })) return null;

        return (
          <BaseAccordion key={id} title={<LeagueTitle logo={logo} title={name} />}>
            <TeamMatches fixtures={fixtures} />
          </BaseAccordion>
        );
      })}
    </>
  );
};
