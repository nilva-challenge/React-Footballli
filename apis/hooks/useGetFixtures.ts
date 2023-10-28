import { Fixtures } from '@/types';
import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

const getFixtures = async (date: string): Promise<Fixtures> => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/football/fixtures/?date=${date}`,
  );

  return data;
};

const useGetFixtures = (date: string) =>
  useQuery(['fixtures', date], () => getFixtures(date));

export default useGetFixtures;
