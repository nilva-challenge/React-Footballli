import React from 'react';
import styles from "@components/matches/styles.module.scss";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import MatchDetail from "@components/matches/MatchDetail";

type Props = {
  matches: any
}

const MatchesContent = () => {
  return (
    <div className={styles.body}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore/>}>
          <Typography>item 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MatchDetail/>
        </AccordionDetails>
      </Accordion>

    </div>
  );
};

export default MatchesContent;
