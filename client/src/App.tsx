/* eslint-disable no-debugger */
import { useEffect, useState } from "react";
import { TError, TResponse } from "./types";
import { formatDate, request } from "./utils";

import League from "./components/League";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";

const App = () => {
  const [date, setDate] = useState<string>(formatDate(0));
  const [dates, setDates] = useState<string[]>([]);
  const [response, setResponse] = useState<TResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const tempDates: string[] = [];
    for (let i = -1; i < 10; i++) {
      tempDates.push(formatDate(i));
    }
    setDates(tempDates);

    (async () => {
      const res = await request<TResponse>(`http://localhost:4000/${date}`);
      if (!res.all) {
        setError((res as unknown as TError).error.detail);
        setLoading(false);
      } else if (res.all.length === 0) {
        setLoading(false);
        setError("ناموجود");
      } else {
        setResponse(res);
        setLoading(false);
        setError(null);
      }
    })();
    return () => {
      setLoading(true);
    };
  }, [date]);

  return (
    <>
      <Navbar date={date} dates={dates} setDate={setDate}></Navbar>
      {/* <div className="navbar">
        {dates.map((d, i) => {
          return (
            <button
              key={i}
              className={
                d === date ? "navbar-button selected" : "navbar-button"
              }
              onClick={() => setDate(d)}
            >
              {dateMapper(d, i)}
            </button>
          );
        })}
      </div> */}
      {loading ? (
        <Loading></Loading>
      ) : response !== null ? (
        <div id="data">
          <div className="table">
            {response.all.map((league) => {
              return <League key={league.id} league={league}></League>;
            })}
          </div>
        </div>
      ) : (
        <div className="unavailable">ناموجود</div>
      )}
      {error !== null ? <sub style={{ color: "crimson" }}>{error}</sub> : <></>}
    </>
  );
};

export default App;
