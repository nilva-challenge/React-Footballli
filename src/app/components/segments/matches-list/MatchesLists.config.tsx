"use client";

import { DateTime } from "luxon";

type FootballClubLogoProps = {
  logo: string;
};

const FootballClubLogo = ({ logo }: FootballClubLogoProps) => (
  <img
    className="py-2"
    src={logo ?? ""}
    alt="Football Club Logo"
    width={30}
    height={30}
  />
);

export const buildMatchesData = (matches: any) => {
  const matchesData = matches.map((match) => {
    const home = match?.home;
    const away = match?.away;
    return {
      homeClubName: (
        <div className="py-2 text-slate-600 justify-self-end">{home?.name}</div>
      ),
      homeClubLogo: <FootballClubLogo logo={home?.logo} />,
      matchStartTime: (
        <div className="py-2 text-center font-semibold text-sky-600 text-sm">
          {DateTime.fromISO(match?.start_time).toFormat("HH:mm")}
        </div>
      ),
      awayClubLogo: <FootballClubLogo logo={away?.logo} />,
      awayClubName: (
        <div className="py-2 text-slate-600 justify-self-start">
          {away?.name}
        </div>
      ),
    };
  });
  return matchesData;
};
