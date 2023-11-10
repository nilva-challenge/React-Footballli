import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchFixturesService } from '../services';
import { getDateInISOFormat } from '../utils';

export function useLeagueResults() {
  const { date = getDateInISOFormat(new Date()) } = useParams<{ date: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ['matches', date],
    queryFn: () => fetchFixturesService({ date }),
  });

  return { data: data?.all ?? [], isLoading };
}
