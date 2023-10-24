import axios from 'axios';
import { useQuery } from 'react-query';

const getFixtures = async (date: string) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/football/fixtures/?date=${date}`,
  );
};

const useGetFixtures = (date: string) =>
  useQuery(['fixtures', date], () => getFixtures(date));

export default useGetFixtures;
