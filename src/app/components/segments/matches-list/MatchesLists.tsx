"use client";

import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { DateTime } from "luxon";
import { isEmpty } from "lodash";
import clsx from "clsx";

import { queries } from "@/components/common/page-title/constants/queries";
import urls from "@/services/urls";
import http from "@/services/http.service";
import Accordion from "@/components/common/accordion/Accordion";
import { buildMatchesData } from "./MatchesLists.config";
import Loading from "@/app/loading";
import { DATE_FORMAT } from "@/app/components/segments/dates-navbar/DatesNavbar.config";
import LeagueAccordionTitle from "./LeagueAccordionTitle";
import MatchesGrid from "./MatchesGrid";

export default function MatchesLists() {
  const selectedDate: DateTime = useSelector((state) => state.dateTime);
  const formattedCurrentDate: string = selectedDate?.toFormat(DATE_FORMAT);

  const { data, isFetching } = useQuery(
    [queries.FOOTBALL_FIXTURES, formattedCurrentDate],
    () => http.get(urls.FOOTBALL_FIXTURES + `?date=${formattedCurrentDate}`)
  );

  const allLeagues = data?.all;

  return (
    <div
      className="p-7 overflow-x-hidden overflow-y-auto scrollbar-thin"
      style={{ height: "calc(100vh - 296px)" }}
    >
      {isFetching && <Loading height="calc(100vh - 354px)" />}
      {!isFetching &&
        allLeagues?.map((league, index: number) => {
          const matches = league?.fixtures;
          if (isEmpty(matches)) return <></>;

          return (
            <Accordion
              key={index}
              className={clsx(allLeagues.length - 1 !== index && "mb-4")}
              title={
                <LeagueAccordionTitle
                  logo={league?.logo}
                  title={league?.name}
                />
              }
              isCollapsed={index !== 0}
            >
              <MatchesGrid data={buildMatchesData(matches)} />
            </Accordion>
          );
        })}
    </div>
  );
}
