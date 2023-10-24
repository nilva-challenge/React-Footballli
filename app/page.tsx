'use client';

// TODO: Make it SSR

import useGetFixtures from '@/apis/hooks/useGetFixtures';

const Page = () => {
  const date = new Date();

  const { data, isLoading } = useGetFixtures(date.toISOString().split('T')[0]);

  return <p></p>;
};

export default Page;
