import Image from "next/image";
import React from "react";

function MatchResaultComp({ game }) {
  return (
    <section className="flex items-center justify-between font-sans">
      <div className="flex items-center gap-x-2">
        {game.team1_name}
        <Image src={game.team1_logo} alt="esteghlal" width={40} />
      </div>
      <p>{game.time}</p>
      <div className="flex items-center gap-x-2">
        <Image src={game.team2_logo} alt="persepolis" width={40} />
        {game.team2_name}
      </div>
    </section>
  );
}

export default MatchResaultComp;
