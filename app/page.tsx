'use client';

// TODO: Make it SSR
// TODO: Add skeleton

import useGetFixtures from '@/apis/hooks/useGetFixtures';
import Image from 'next/image';
import { DatesBar, LeagueCard, Search } from '@/components';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [date, setDate] = useState(
    params.get('date') || new Date().toISOString().split('T')[0],
  );
  const { data, isLoading } = useGetFixtures(date);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setDate(params.get('date') as string);
  }, [params]);

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
        <Search search={search} setSearch={setSearch} />
        <DatesBar />
      </div>

      <div className="p-4 flex flex-col gap-y-4 mb-28">
        {data?.all.map((item) => (
          <LeagueCard key={item.id} data={item} search={search} />
        ))}
      </div>
    </>
  );
};

export default Page;
