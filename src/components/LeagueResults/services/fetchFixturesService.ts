import { http } from 'core';
import { IFixturesResult } from './types';

export const fetchFixturesService = async ({ date }: { date: string }) => {
  const { data: response } = await http.get<IFixturesResult>('/api/football/fixtures', {
    params: { date },
  });
  return response;
};
