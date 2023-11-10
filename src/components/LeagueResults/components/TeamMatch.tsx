import { FC, memo } from 'react';
import { IFixture } from '../services/types';

const TeamMatch: FC<{ fixture: IFixture }> = ({ fixture }) => {
  let matchStatus = fixture.start_time.split('T')[1].slice(0, 5);

  if (fixture.status === 'FT') matchStatus = `${fixture.home_goals} - ${fixture.away_goals}`;

  return (
    <div className="flex items-center justify-center py-2 border-b">
      <div className="flex items-center justify-end w-2/4 truncate">
        <p className="text-sm	">{fixture.home.name}</p>
        <img className="rounded w-10 h-8 object-contain mx-1" src={fixture.home.logo} />
      </div>
      <div className="px-1 whitespace-nowrap">{matchStatus}</div>
      <div className="flex items-center justify-start w-2/4 truncate">
        <img className="rounded w-10 h-8 object-contain mx-1" src={fixture.away.logo} />
        <p className="text-sm	">{fixture.away.name}</p>
      </div>
    </div>
  );
};

export default memo(TeamMatch);
