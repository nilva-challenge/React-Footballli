import React from 'react';
import styles from "@components/matches/styles.module.scss";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";

const MatchesContent = () => {
  return (
    <div className={styles.body}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore/>}>
          <Typography>item 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>lore mksdmflkm sklflk slk</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore/>}>
          <Typography>item 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>lore mksdmflkm sklflk slk</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore/>}>
          <Typography>item 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>lore mksdmflkm sklflk slk</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MatchesContent;
