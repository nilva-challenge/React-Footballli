import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { HiChevronDown } from "react-icons/hi";
import { Grid } from "@mui/material";
import { toJalali } from "../../utils/helpers";

type TFixture = {
  home: {
    logo: string;
    id: number;
    api_id: number;
    name: string;
    is_favorite: null;
  };
  away: {
    logo: string;
    id: number;
    api_id: number;
    name: string;
    is_favorite: null;
  };
  id: string;
  api_id: string;
  status: string;
  elapsed: number | null;
  start_time: string;
  home_goals: number | null;
  away_goals: number | null;
  home_penalty_goals: number | null;
  away_penalty_goals: number | null;
  live_url: null;
  archive_url: null;
};
type TLeagueard = {
  logo: string;
  id: string;
  api_id: string;
  name: string;
  season: string;
  fixtures: TFixture[];
};
export default function LeaguesCard({ data }: { data: TLeagueard }) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === data.id}
        onChange={handleChange(data.id)}
      >
        <AccordionSummary
          expandIcon={<HiChevronDown />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <img src={data.logo} width={24} height={24} />
          <Typography>{data.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {data.fixtures.map((fixture) => (
            <Grid container spacing={2} mb={16}>
              <Grid
                item
                xs={5}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  gap: "1px",
                }}
              >
                <Typography component="span">{fixture.away.name}</Typography>
                <img src={fixture.away.logo} width={28} height={28} />
              </Grid>
              <Grid item xs={2}>
                <Typography>{toJalali(fixture.start_time, "HH:mm")}</Typography>
              </Grid>
              <Grid
                item
                xs={5}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  gap: "1px",
                }}
              >
                <img src={fixture.home.logo} width={28} height={28} />
                <Typography component="span">{fixture.home.name}</Typography>
              </Grid>
              {fixture.elapsed && (
                <>
                  <Grid item xs={5}>
                    <Typography>
                      {fixture.away_goals}
                      {fixture.away_penalty_goals &&
                        `(${fixture.away_penalty_goals})`}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>'{fixture.elapsed}</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography>
                      {fixture.home_goals}
                      {fixture.home_penalty_goals &&
                        `(${fixture.home_penalty_goals})`}
                    </Typography>
                  </Grid>
                </>
              )}
            </Grid>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
