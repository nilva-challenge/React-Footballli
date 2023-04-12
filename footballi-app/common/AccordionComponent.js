import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import iran_flag from "../public/images/flag/iran-league.jpg";
import Image from "next/image";
import MatchResaultComp from "../components/MatchResaultComp";

function AccordionComponent({ league }) {
  const [isExpand, setIsExpand] = React.useState(true);

  return (
    <Accordion
      dir="rtl"
      expanded={isExpand}
      onClick={() => setIsExpand(!isExpand)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          "& .MuiTypography-root": {
            fontFamily: "iransans",
           
          },
        }}
      >
        <Typography className="flex items-center gap-x-2">
          <Image src={league.League_logo} alt="flag" width={50} />
          {league.League_title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex flex-col gap-y-5">
          {league.games.map((game) => {
            return <MatchResaultComp key={game.id} game={game}/>;
          })}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionComponent;
