export { dayTitle };

function dayTitle(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    weekday: "long",
  });
}
