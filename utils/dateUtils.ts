export const getSpecificDate = (i: number) => {
  var date = new Date();
  date.setDate(date.getDate() + i);

  const dd = date.getDate().toString().padStart(2, "0");
  const mm = (date.getMonth() + 1).toString().padStart(2, "0");

  const yyyy = date.getFullYear();
  const string = yyyy + "-" + mm + "-" + dd;
  return string;
};
