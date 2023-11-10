import { FC, memo } from 'react';
import { useSearch } from '../hooks';
import { IFixture } from '../services/types';

const TeamMatch: FC<{ fixture: IFixture }> = ({ fixture }) => {
  const { hasMatchSearchValue } = useSearch();
  let matchStatus = fixture.start_time.split('T')[1].slice(0, 5);
  const { logo: homeLogo, name: homeName } = fixture.home;
  const { logo: awayLogo, name: awayName } = fixture.away;

  if (fixture.status === 'FT') matchStatus = `${fixture.home_goals} - ${fixture.away_goals}`;

  if (hasMatchSearchValue(fixture)) return null;

  return (
    <div className="flex items-center justify-center py-2 border-b">
      <div className="flex items-center justify-end w-2/4 truncate">
        <p className="text-sm	">{homeName}</p>
        <img className="rounded w-10 h-8 object-contain mx-1" src={homeLogo} />
      </div>
      <div className="px-1 whitespace-nowrap">{matchStatus}</div>
      <div className="flex items-center justify-start w-2/4 truncate">
        <img className="rounded w-10 h-8 object-contain mx-1" src={awayLogo} />
        <p className="text-sm	">{awayName}</p>
      </div>
    </div>
  );
};

export default memo(TeamMatch);
