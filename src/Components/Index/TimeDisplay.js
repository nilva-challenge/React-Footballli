const TimeDisplay = ({ dateTime, setLeaguesData }) => {
  const timeDestructuring = {
    year: dateTime.getFullYear(),
    month: "0" + dateTime.getMonth(),
    day: dateTime.getDate(),
  };
  const fetchData = () => {
    fetch(
      `https://core-sport-api.zarebin.ir/api/football/fixtures/?date=${timeDestructuring?.year}-${timeDestructuring?.month}-${timeDestructuring?.day}`
    )
      .then((jsonData) => {
        return jsonData.json();
      })
      .then((parsedData) => setLeaguesData(parsedData));
  };

  return (
    <span onClick={() => fetchData()}>
      {dateTime.toLocaleDateString("fa-IR", {
        month: "long",
        day: "numeric",
      })}
    </span>
  );
};

export default TimeDisplay;
