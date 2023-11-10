import { ITab } from 'components/Base';
import { en } from 'dictionary/en';
import { IFixture } from '../services';

export const getNextNDate = (n: number): Date => {
  const today = new Date();
  return new Date(today.setDate(today.getDate() + n));
};

export const getPrevNDate = (n: number): Date => {
  const today = new Date();
  return new Date(today.setDate(today.getDate() - n));
};

export const getDateInterval = (start: Date, end: Date): Date[] => {
  const interval: Date[] = [];
  let currentDate = new Date(start);
  while (currentDate <= end) {
    interval.push(currentDate);
    const newDate = currentDate.setDate(currentDate.getDate() + 1);
    currentDate = new Date(newDate);
  }

  return interval;
};

export const isToday = (date: Date) => {
  const today = new Date();
  if (today.toDateString() === date.toDateString()) return true;
  return false;
};

export const isYesterday = (date: Date) => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (yesterday.toDateString() === date.toDateString()) return true;
  return false;
};

export const isTomorrow = (date: Date) => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() + 1);
  if (yesterday.toDateString() === date.toDateString()) return true;
  return false;
};

export const getDateLabel = (date: Date) => {
  if (isToday(date)) return en.today;
  if (isTomorrow(date)) return en.tomorrow;
  if (isYesterday(date)) return en.yesterday;

  return date.toLocaleDateString('fa-IR', { day: '2-digit', month: 'long' });
};

export const getDateInISOFormat = (date: Date) => date.toISOString().split('T')[0];

export const getWeekDatesTabs = (): ITab[] => {
  const start = getPrevNDate(3);
  const end = getNextNDate(3);
  const weekDates = getDateInterval(start, end);

  return weekDates.map((weekDate) => ({
    id: weekDate.getTime(),
    label: getDateLabel(weekDate),
    to: getDateInISOFormat(weekDate),
  }));
};

export const hasFixtureSearchValue = ({
  fixture,
  searchValue,
}: {
  fixture: IFixture;
  searchValue: string;
}) => {
  const { name: homeName } = fixture.home;
  const { name: awayName } = fixture.away;
  return homeName.includes(searchValue) || awayName.includes(searchValue);
};

export const hasSearchValue = ({
  fixtures,
  searchValue,
}: {
  fixtures: IFixture[];
  searchValue: string;
}) => fixtures.some((fixture) => hasFixtureSearchValue({ fixture, searchValue }));
