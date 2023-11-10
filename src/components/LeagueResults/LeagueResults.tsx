import { BaseTabs } from 'components/Base';
import { LeagueResult } from './components';
import { getWeekDatesTabs } from './utils';

export const LeagueResults = () => {
  return (
    <>
      <BaseTabs tabs={getWeekDatesTabs()} />
      <div className="min-h-screen bg-gray-100 px-2 pt-2 pb-20">
        <LeagueResult />
      </div>
    </>
  );
};
