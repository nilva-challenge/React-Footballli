import moment from "moment";


//format date to YYYY-MM-DD
// const formatDate = (date) => {
//   let d = new Date(date);
//   let month = (d.getMonth() + 1).toString();
//   let day = d.getDate().toString();
//   let year = d.getFullYear();
//   if (month.length < 2) {
//     month = "0" + month;
//   }
//   if (day.length < 2) {
//     day = "0" + day;
//   }
//   return [year, month, day].join("-");
// };

export function getDate(startDate, endDate) {
  let dates = [];

  const currDate = moment(startDate).startOf("day");
  const lastDate = moment(endDate).startOf("day");

  while (currDate.add(1, "days").diff(lastDate) < 0) {
    const date = currDate.clone().toDate();
    dates.push(
      new Date(date).toLocaleDateString("us-en", {
        month: "long",
        day: "numeric",
      })
    );
  }
  return dates ;
}
