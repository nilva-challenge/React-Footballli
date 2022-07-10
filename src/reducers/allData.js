import moment from "moment";

const AllData = {
  db: [],
  db2: [],
  dates: [
    moment().subtract(1, "days").format("L"),
    moment().subtract(0, "days").format("L"),
    moment().subtract(-1, "days").format("L"),
  ],
};
export const allDatas = (allData = AllData, action) => {
  switch (action.type) {
    case "FETCH_ALL1":
      return {
        ...allData,
        db: action.payload,
        dates: [
          ...allData.dates,
          ...action.payload.map((ele) => moment(ele.fixture.date).format("L")),
        ],
      };
    case "FETCH_ALL2":
      return {
        ...allData,
        db2: action.payload,
        dates: [
          ...allData.dates,
          ...action.payload.map((ele) => moment(ele.fixture.date).format("L")),
        ],
      };
    default:
      return allData;
  }
};
