import React from "react";
import { persianDate } from "../server/data";
import EachDay from "./EachDay";

function DayNav() {
  const [activeName, setActiveName] = React.useState("today");

  return (
    <section className="max-w-md mx-auto">
      <div className="flex overflow-x-auto space-x-8 px-2 py-5 scrollbar-hide">
        {persianDate.map((day) => {
          return (
            <EachDay
              activeName={activeName}
              setActiveName={setActiveName}
              day={day}
              key={day.id}
            />
          );
        })}
      </div>
    </section>
  );
}

export default DayNav;
