export const filterSeasons = (leagues) => {
  //filter array to get specific season
  let items;
  if (leagues) {
    items = leagues.map((data) => {
      data = { ...data, seasons: data.seasons.at(-2) };
      return data;
    });
  }

  return items;
};
