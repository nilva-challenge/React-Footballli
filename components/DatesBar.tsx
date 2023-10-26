'use client';

import { DateUtils } from '@/utils';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

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

const DatesBar = () => {
  const [dates, setDates] = useState(dateRanges);
  const router = useRouter();
  const dateRef = useRef<HTMLDivElement>(null);

  const handleClickDate = (date: Date, index: number) => {
    router.push('?test=test');

    let _dates = [...dates.map((date) => ({ ...date, isActive: false }))];

    setDates([
      ..._dates.slice(0, index),
      { ..._dates[index], isActive: true },
      ..._dates.slice(index + 1),
    ]);
  };

  useEffect(() => {
    if (dateRef.current) {
      dateRef.current.scrollIntoView({ inline: 'center' });
    }
  }, [dateRef]);

  return (
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
  );
};

export default DatesBar;
