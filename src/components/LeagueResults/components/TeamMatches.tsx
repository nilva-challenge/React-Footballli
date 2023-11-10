import { FC } from 'react';
import { IFixture } from '../services/types';
import TeamMatch from './TeamMatch';

export const TeamMatches: FC<{ fixtures: IFixture[] }> = ({ fixtures = [] }) => {
  return (
    <>
      {fixtures.map((fixture) => (
        <TeamMatch key={fixture.id} fixture={fixture} />
      ))}
    </>
  );
};
