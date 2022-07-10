import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import { translate } from "../constants/languageConvertor";
import NotEvent from "./NotEvent";
export default function ControlledAccordions({ allData }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // console.log(allData);
  return (
    <div>
      {allData?.map((data) =>
        data.length > 0 ? (
          <Accordion
            expanded={expanded === data[0].league.name}
            onChange={handleChange(data[0].league.name)}
            key={data[0].fixture.id}
            sx={{
              maxHeight: "60vh",
              overflow: "auto",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={data[0].fixture.id}
              id={data[0].fixture.id}
              sx={expanded === data[0].league.name ? { borderBottom: 0.5 } : {}}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  component="img"
                  sx={{ width: 20, height: 20, borderRadius: "50%", p: 1 }}
                  src={data[0].league.logo}
                  alt={data[0].league.name}
                />
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {translate[data[0].league.name]}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails
              key={data[0].fixture.id}
              // sx={{ maxHeight: "80vh", overflowYy: "a" }}
            >
              {data.map((ele) => {
                return ele.fixture.status.short === "FT" ? (
                  <Box
                    key={ele.fixture.id}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      // justifyContent: "center",
                      gap: 1,
                      my: 2,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ flex: 2, direction: "ltr", fontWeight: 500 }}
                    >
                      {translate[ele.teams.away.name]}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 0.7,
                        flex: 1,
                      }}
                    >
                      <Box
                        component="img"
                        sx={{ width: 25, height: 25, borderRadius: "50%" }}
                        src={ele.teams.away.logo}
                        alt={ele.teams.away.name}
                      />
                      <Typography variant="body2">
                        {ele.goals.away !== "0"
                          ? ele.goals.away.toLocaleString("fa-IR")
                          : "۰"}
                      </Typography>
                      <Typography variant="body2">-</Typography>
                      <Typography variant="body2">
                        {ele.goals.home !== "0"
                          ? ele.goals.home.toLocaleString("fa-IR")
                          : "۰"}
                      </Typography>
                      <Box
                        component="img"
                        sx={{ width: 25, height: 25, borderRadius: "50%" }}
                        src={ele.teams.home.logo}
                        alt={ele.teams.home.name}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ flex: 2, fontWeight: 500 }}
                    >
                      {translate[ele.teams.home.name]}
                    </Typography>
                  </Box>
                ) : null;
              })}
              {/* <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography> */}
            </AccordionDetails>
          </Accordion>
        ) : null
      )}
      {allData[0].length === 0 && allData[1].length === 0 && <NotEvent />}
    </div>
  );
}
