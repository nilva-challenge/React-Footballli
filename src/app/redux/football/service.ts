import Api from "../../service/Api";

async function getScores(date: String) {
  let response = await Api()?.get(`football/fixtures/?date=${date}`);
  return response?.data.all;
}
export { getScores };
