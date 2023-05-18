import React from 'react';
import styles from "@components/matches/styles.module.scss";
import {Box, Input, Tab, Tabs} from "@mui/material";
import {Settings} from "@mui/icons-material";

const MatchesHead = () => {
  return (
    <div className={styles.header}>
      <Box className={styles.header_box}>
        <h3>نتایج زنده</h3>
        <Settings/>
      </Box>
      <Box className={styles.searchBox}>
        <Input style={{width: "100%"}} type={"search"} placeholder={"جستوجو"}/>
      </Box>
      <Box>
        <Tabs variant={"scrollable"}>
          <Tab label={"yesterday"}/>
          <Tab label={"today"}/>
          <Tab label={"tomorrow"}/>
          <Tab label={"tomorrow"}/>
          <Tab label={"today"}/>
          <Tab label={"tomorrow"}/>
          <Tab label={"tomorrow"}/>
        </Tabs>
      </Box>
    </div>
  );
};

export default MatchesHead;
