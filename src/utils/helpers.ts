export const getFullDate = (date: Date = new Date()): string =>
  date.toISOString().replace("-", "/").split("T")[0].replace("/", "-");
