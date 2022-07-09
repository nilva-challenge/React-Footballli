import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useGlobalContext } from "../context/context";


// setFilterDate(dates.locale[sideBarValue]);

export default function League({ ...props }) {
  const { league } = props;
  const {
    expanded,
    setExpanded,
    setSpecificLeague,
    setSpecificSeason,
    setDateHandler,
    specificDate,
    setDates,
    matches,
    isLoading
  } = useGlobalContext();

  const [date, setDate] = React.useState();
  const handleChange = (name, seasons, league) => (event, isExpanded) => {
    setExpanded(isExpanded ? name : false);
    setSpecificLeague(league.id);
    setSpecificSeason(seasons.year);
    setDate(seasons);
  };

  React.useEffect(() => {
    console.log(matches.filter((data) => data.fixture.date === specificDate));
  }, [matches, specificDate]);

  React.useEffect(() => {
    if (expanded) {
      setDateHandler(date);
    } else {
      setDates(null);
    }
  }, [date, expanded, matches, setDateHandler, setDates, specificDate]);

  //set date base on seasons start and end times

  if(isLoading){
    return <div>Loading...</div>
  }

  return (
    <>
      {league &&
        league.map((data, idx) => {
          const { league, seasons } = data;
          return (
            <Accordion
              expanded={expanded === league.name}
              onChange={handleChange(league.name, seasons, league)}
              key={idx}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {league.name}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  <img src={league.logo} alt="flag" className="w-5 ml-20" />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {matches &&
                    matches
                      .filter((data) => data.fixture.date === specificDate)
                      .map((data, idx) => {
                        const { teams, goals } = data;
                        return (
                          <div
                            className="flex mb-10 justify-between bg-slate-50"
                            key={idx}
                          >
                            <div>
                              <img
                                src={teams && teams.home.logo}
                                alt="logo"
                                className="w-10"
                              />
                              <span className="text-sm ">
                                {teams && teams.home.name}
                              </span>
                            </div>
                            <div>
                              <span>
                                {goals && goals.home} : {goals && goals.away}
                              </span>
                            </div>
                            <div>
                              <img
                                src={teams && teams.away.logo}
                                alt="logo"
                                className="w-10"
                              />
                              <span className="text-sm ">
                                {teams && teams.away.name}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
    </>
  );
}
