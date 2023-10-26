'use client';

// TODO: Make it SSR
// TODO: Add skeleton

import useGetFixtures from '@/apis/hooks/useGetFixtures';
import Image from 'next/image';
import { DatesBar, Search } from '@/components';

const Page = () => {
  const { data, isLoading } = useGetFixtures(
    new Date().toISOString().split('T')[0],
  );

  return (
    <>
      <div className="pt-4 px-4 bg-white">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">نتایج زنده</h1>
          <Image
            src="/assets/icons/time-past.svg"
            alt="History"
            width={24}
            height={24}
          />
        </div>
        <Search />
        <DatesBar />
      </div>
    </>
  );
};

export default Page;
