import { useFormContext } from 'react-hook-form';
import { IFormValues } from 'types';
import { IFixture } from '../services';
import { hasFixtureSearchValue, hasSearchValue } from '../utils';

export function useSearch() {
  const { watch } = useFormContext<IFormValues>();
  const searchValue = watch('search');

  const hasLeagueSearchValue = (fixtures: IFixture[]) =>
    searchValue && !hasSearchValue({ fixtures, searchValue });

  const hasMatchSearchValue = (fixture: IFixture) =>
    searchValue && !hasFixtureSearchValue({ fixture, searchValue });

  return { hasLeagueSearchValue, hasMatchSearchValue };
}
