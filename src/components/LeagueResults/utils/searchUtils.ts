import { IFixture } from '../services';

export const hasFixtureSearchValue = ({
  fixture,
  searchValue,
}: {
  fixture: IFixture;
  searchValue: string;
}) => {
  const { name: homeName } = fixture.home;
  const { name: awayName } = fixture.away;
  return homeName.includes(searchValue) || awayName.includes(searchValue);
};

export const hasSearchValue = ({
  fixtures,
  searchValue,
}: {
  fixtures: IFixture[];
  searchValue: string;
}) => fixtures.some((fixture) => hasFixtureSearchValue({ fixture, searchValue }));
