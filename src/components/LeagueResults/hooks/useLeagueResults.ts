import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchFixturesService } from '../services';
import { getDateInISOFormat } from '../utils';
import { IFormValues } from 'types';
import { useFormContext } from 'react-hook-form';

export function useLeagueResults() {
  const { date = getDateInISOFormat(new Date()) } = useParams<{ date: string }>();
  const { watch } = useFormContext<IFormValues>();
  const searchValue = watch('search');

  const { data, isLoading } = useQuery({
    queryKey: ['matches', date],
    queryFn: () => fetchFixturesService({ date }),
  });

  return { data: data?.all ?? [], isLoading, searchValue };
}
