const dates: string[] = [];

for (let i = -50; i < 50; i++) {
  const date = new Date();
  date.setDate(date.getDate() + i);
  dates.push(date.toISOString());
}

export const differenceInDays = (firstDate: Date, secondDate: Date) => {
  const difference = firstDate.getTime() - secondDate.getTime();
  const TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays;
};

export default dates;
