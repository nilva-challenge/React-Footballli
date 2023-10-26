'use client';

// TODO: Make it SSR
// TODO: Make component from search bar and date bar
// TODO: Create hooks for date bar

import useGetFixtures from '@/apis/hooks/useGetFixtures';
import { DateUtils } from '@/utils';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  useScroll,
  useScrollbarWidth,
  useScrolling,
  useWindowScroll,
} from 'react-use';

const range = 8;

const dateRanges = () => {
  const dates = [];

  for (let i = -range; i < range; i++) {
    const today = new Date();
    dates.push({
      isActive: i === 0,
      value: new Date(today.setDate(today.getDate() + i)),
    });
  }

  return dates;
};

const handleDate = (date: Date) => {
  const _date = new DateUtils(date);

  if (_date.isYesterday()) {
    return 'دیروز';
  }

  if (_date.isToday()) {
    return 'امروز';
  }

  if (_date.isTomorrow()) {
    return 'فردا';
  }

  return _date.toLocaleDateString('fa', { day: 'numeric', month: 'short' });
};

const Page = () => {
  const [dates, setDates] = useState(dateRanges);
  const dateRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (dateRef.current) {
      dateRef.current.scrollIntoView({ inline: 'center' });
    }
  }, [dateRef]);

  const today = new Date();

  const { data, isLoading } = useGetFixtures(today.toISOString().split('T')[0]);

  const handleClickDate = (date: Date, index: number) => {
    router.push('?test=test');

    let _dates = [...dates.map((date) => ({ ...date, isActive: false }))];

    setDates([
      ..._dates.slice(0, index),
      { ..._dates[index], isActive: true },
      ..._dates.slice(index + 1),
    ]);
  };

  return (
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

      <div className="flex gap-x-7 overflow-x-auto mt-4">
        {dates.map((date, index) => (
          <div
            key={index}
            className="relative"
            onClick={() => handleClickDate(date.value, index)}
            {...(date.isActive && { ref: dateRef })}
          >
            <div className="text-gray-400 mb-3 whitespace-nowrap">
              {handleDate(date.value)}
            </div>
            {date.isActive && (
              <div className="w-full h-1 bg-green-600 absolute bottom-0 rounded-t-lg"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
