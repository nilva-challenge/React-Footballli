import dayjs from "dayjs";
import React from "react";
import AppBase from "./AppBase.tsx";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

//@ts-ignore
dayjs.calendar("jalali").locale("fa");

function App() {
  return <AppBase />;
}

export default App;
