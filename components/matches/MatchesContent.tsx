import React from 'react';
import styles from "@components/matches/styles.module.scss";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import MatchDetail from "@components/matches/MatchDetail";
import {Global} from "@constants/responses";

type Props = {
  matches: Array<Global.matches>
}

const MatchesContent = ({matches}: Props) => {
  // console.log(matches)
  return (
    <div className={styles.body}>
      {matches.map(item => (
        <Accordion key={item.id}>
          <AccordionSummary expandIcon={<ExpandMore/>}>
            <Typography>{item.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.fixtures.map(match => (
              <MatchDetail key={match.id} match={match}/>
            ))
            }
          </AccordionDetails>
        </Accordion>
      ))
      }

    </div>
  );
};

export default MatchesContent;
