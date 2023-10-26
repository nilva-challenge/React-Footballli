'use client';

// TODO: Make it SSR
// TODO: Make component from search bar and date bar
// TODO: Create hooks for date bar

import useGetFixtures from '@/apis/hooks/useGetFixtures';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Page = () => {
  const date = new Date();
  const { data, isLoading } = useGetFixtures(today.toISOString().split('T')[0]);
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

      <div className="bg-gray-200 relative rounded-lg overflow-hidden mt-4">
        <input
          type="text"
          className="w-full h-full p-3 pr-12 bg-inherit outline-none"
          placeholder="جستجو..."
        />
        <Image
          src="/assets/icons/search.svg"
          width={20}
          height={20}
          alt="Search"
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
        />
      </div>

  return <p></p>;
};

export default Page;
