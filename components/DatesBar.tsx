'use client';

import { DateUtils } from '@/utils';
import { useRouter } from 'next/navigation';
import { RefObject, createRef, useEffect, useRef, useState } from 'react';

const range = 8;

// TODO: remove scrollbar through css
// TODO: handle infinite scroll for when use hit the start of the dates bar
// TODO: Create some hooks for dates bar

const dateRanges = (currentDate: string) => {
  const dates = [];

  for (let i = -range; i < range; i++) {
    const today = new Date();
    const value = new Date(today.setDate(today.getDate() + i));

    dates.push({
      isActive: value.toISOString().split('T')[0] === currentDate,
      value,
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

type Props = {
  date: string;
};

const DatesBar = ({ date }: Props) => {
  const [dates, setDates] = useState(() => dateRanges(date));
  const router = useRouter();
  const [dateRefs, setDateRefs] = useState<RefObject<HTMLDivElement>[]>([]);
  const datesBarRef = useRef<HTMLDivElement>(null);
  const [trackScrollLeft, setTrackScrollLeft] = useState<number>();

  const handleClickDate = (date: Date, index: number) => {
    router.push(`?date=${date.toISOString().split('T')[0]}`);

    let _dates = [...dates.map((date) => ({ ...date, isActive: false }))];

    setDates([
      ..._dates.slice(0, index),
      { ..._dates[index], isActive: true },
      ..._dates.slice(index + 1),
    ]);
  };

  useEffect(() => {
    setDateRefs((refs) =>
      Array(dates.length)
        .fill('')
        .map((_, i) => dateRefs[i] || createRef()),
    );
  }, []);

  useEffect(() => {
    const index = dates.findIndex(
      (date) => date.value.getDate() === new Date().getDate(),
    );

    if (dateRefs[index] && dateRefs[index].current) {
      dateRefs[index].current?.scrollIntoView({ inline: 'center' });
    }
  }, [dateRefs]);

  useEffect(() => {
    if (datesBarRef.current) {
      datesBarRef.current.addEventListener('scroll', () => {
        setTrackScrollLeft(datesBarRef.current?.scrollLeft);
      });
    }
  }, []);

  useEffect(() => {
    if (datesBarRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = datesBarRef.current;

      if (
        scrollLeft === -(scrollWidth - clientWidth) ||
        scrollLeft === -(scrollWidth - clientWidth - 1)
      ) {
        const _dates = [];

        for (let i = 1; i <= range; i++) {
          const lastDate = new Date(
            JSON.stringify(dates[dates.length - 1].value.toDateString()),
          );

          _dates.push({
            isActive: false,
            value: new Date(lastDate.setDate(lastDate.getDate() + i)),
          });
        }

        setDates([...dates, ..._dates]);
      }
      if (scrollLeft === 0 || scrollLeft === 1) {
        // TODO: Handle infinite items
        console.log('start of the dates bar hit!');
      }
    }
  }, [datesBarRef, trackScrollLeft]);

  return (
    <div className="flex gap-x-7 overflow-x-auto mt-4" ref={datesBarRef}>
      {dates.map((date, index) => (
        <div
          key={index}
          className="relative"
          onClick={() => handleClickDate(date.value, index)}
          ref={dateRefs[index]}
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
