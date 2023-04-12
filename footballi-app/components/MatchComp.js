import * as React from "react";
import AccordionComponent from "../common/AccordionComponent";
import { persianDate } from "../server/data";

function MatchComp() {
  return (
    <section className="h-[calc(100vh-260px)] bg-[#f5f6fb]">
      <div className="p-3">
        {persianDate[1]?.leagues?.map((league) => {
          return (
            <div key={league.id} className="mb-3">
              <AccordionComponent league={league} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MatchComp;
