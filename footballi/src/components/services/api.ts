const BASE_URL = "https://core-sport-api.zarebin.ir/api/football/fixtures/";

export const fetchGames = (date: string) => {
  return fetch(`${BASE_URL}?date=${date}`).then((response) => {
    if (!response.ok) {
      throw new Error("Network error");
    }
    return response.json();
  });
};
