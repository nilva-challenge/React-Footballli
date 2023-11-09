import { http } from 'core';

export const fetchFixturesService = async ({ date }: { date: Date }) => {
  const { data: response } = await http.get('/api/football/fixtures', {
    params: { date },
  });
  return response;
};
