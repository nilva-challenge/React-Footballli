import React, {useState} from 'react';
import styles from "@components/matches/styles.module.scss";
import {Box, Input, Tab, Tabs} from "@mui/material";
import {Settings} from "@mui/icons-material";
import {getDate} from "../../libs/utiles";

type Props = {
  handleDay: (day: string) => void
}
const MatchesHead = ({handleDay}: Props) => {
  const arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
  const [current, setCurrent] = useState<string>(getDate);
  const handleDate = (item: number) => {
    setCurrent(getDate(item))
    handleDay(getDate(item))
  }
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
          {arr.map(item => (
            <Tab
              key={item}
              label={getDate(item)}
              onClick={() => handleDate(item)}
              className={getDate(item) == current ? styles.active : styles.normal}
            />
          ))}
        </Tabs>
      </Box>
    </div>
  );
};

export default MatchesHead;
