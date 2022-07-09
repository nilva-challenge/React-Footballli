import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useGlobalContext } from "../context/context";

export default function League({ ...props }) {
  const { league } = props;
  const {
    expanded,
    setExpanded,
    setSpecificLeague,
    setSpecificSeason,
    setDateHandler,
    specificDate,
    matches,
    isLoading,
  } = useGlobalContext();

  const [date, setDate] = React.useState();

  //when accordion expanded
  const handleChange = (name, seasons, league) => (event, isExpanded) => {
    setExpanded(isExpanded ? name : false);
    setSpecificLeague(league.id);
    setSpecificSeason(seasons.year);
    setDate(seasons);
  };

  // set sidebar infinite time line base on the start time and emd time from api
  React.useEffect(() => {
    if (expanded) {
      setDateHandler(date);
    }
  }, [date, expanded, setDateHandler]);

  if (isLoading) {
    return <div>Loading...</div>;
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
                          <div className="flex flex-col p-2 items-center justify-center">
                            <img
                              src={teams && teams.home.logo}
                              alt="logo"
                              className="w-10"
                            />
                          </div>
                          <div className="p-3">
                            <span>
                              {goals && goals.home} : {goals && goals.away}
                            </span>
                          </div>
                          <div className="flex flex-col p-2 items-center justify-center">
                            <img
                              src={teams && teams.away.logo}
                              alt="logo"
                              className="w-10"
                            />
                          </div>
                        </div>
                      );
                    })}
              </AccordionDetails>
            </Accordion>
          );
        })}
    </>
  );
}
