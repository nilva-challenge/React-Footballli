import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import db from "../DB/db.json";
import dbAzadegan from "../DB/dbAzadegan.json";
import { persianGalf2021, azadegan2021 } from "../apis/gatData";

const Context = React.createContext({});
const AffiliateContext = (init) => useContext(Context);

export const AffiliateProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    persianGalf2021.then((res) =>
      setData(res.data).catch((err) => console.log(err))
    );
    azadegan2021.then((res) =>
      setData2(res.data).catch((err) => console.log(err))
    );
    setLoading(false);
  }, []);

  const dates = [
    moment().subtract(1, "days").format("L"),
    moment().subtract(0, "days").format("L"),
    moment().subtract(-1, "days").format("L"),
  ];

  data.response?.reverse().map((state) => {
    if (!dates.includes(moment(state.fixture.date).format("L")))
      dates.push(moment(state.fixture.date).format("L"));
  });
  data2.response?.map((state) => {
    if (!dates.includes(moment(state.fixture.date).format("L")))
      dates.push(moment(state.fixture.date).format("L"));
  });

  const sortedDates = dates.sort((a, b) => moment(a) - moment(b)).reverse();
  console.log(children);
  return (
    <AffiliateContext.Provider
      value={{ loading, db: data, db2: data2, sortedDates: sortedDates }}
    >
      {children}
    </AffiliateContext.Provider>
  );
};

// let db1 = [];
// persianGalf2021
//   .then((res) => db1.push(res.data))
//   .catch((err) => console.log(err));

// console.log(db1);
// db.response.reverse().map((state) => {
//   if (!dates.includes(moment(state.fixture.date).format("L")))
//     dates.push(moment(state.fixture.date).format("L"));
// });
// dbAzadegan.response.map((state) => {
//   if (!dates.includes(moment(state.fixture.date).format("L")))
//     dates.push(moment(state.fixture.date).format("L"));
// });

// const sortedDates = dates.sort((a, b) => moment(a) - moment(b)).reverse();

// for checking data
// console.log(sortedDates);
// console.log(
//   dbAzadegan.response.map((state) => moment(state.fixture.date).format("L"))
// );
// console.log(
//   db.response.map((state) => moment(state.fixture.date).format("L"))
// );

// export default React.createContext({
//   db: db.response,
//   db2: dbAzadegan.response,
//   sortedDates: sortedDates,
// });
