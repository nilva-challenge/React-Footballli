import { BaseAccordion, BaseSkeleton } from 'components/Base';
import { useLeagueResults } from '../hooks';
import { LeagueTitle } from './LeagueTitle';

export const LeagueResult = () => {
  const { data, isLoading } = useLeagueResults();

  if (isLoading) return <BaseSkeleton count={5} />;

  return (
    <>
      {data.map(({ id, logo, name }) => (
        <BaseAccordion key={id} title={<LeagueTitle logo={logo} title={name} />}>
          test
        </BaseAccordion>
      ))}
    </>
  );
};
