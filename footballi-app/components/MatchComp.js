import * as React from "react";
import AccordionComponent from "../common/AccordionComponent";

function MatchComp({gamesData}) {
  console.log(gamesData);
  return (
    <section className="h-[calc(100vh-260px)] bg-[#f5f6fb]">
      <div className="p-3">
        {gamesData?.leagues?.map((league) => {
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
