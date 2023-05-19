export default function getToday() {
  const today: string = new Date().toISOString().split("T")[0];
  return today;
}
