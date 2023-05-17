import React from 'react';
import {useRouter} from "next/router";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import {SportsFootball, Search, SportsScore, EmojiEvents, Person} from "@mui/icons-material"
import styles from "./styles.module.scss"
import {EXPLORER, FOOTBALL, LEAGUE, MATCHES, PROFILE} from "@constants/routes";

const Footer = () => {
  const router = useRouter()
  return (
    <div className={styles.footer}>
      <BottomNavigation showLabels className={styles.navigator}>
        <BottomNavigationAction label="مسابقات" icon={<SportsScore/>} onClick={() => router.push(MATCHES)}/>
        <BottomNavigationAction label="اکتشاف" icon={<Search/>} onClick={() => router.push(EXPLORER)}/>
        <BottomNavigationAction label="فوتبال" icon={<SportsFootball/>} onClick={() => router.push(FOOTBALL)}/>
        <BottomNavigationAction label="لیگ ها" icon={<EmojiEvents/>} onClick={() => router.push(LEAGUE)}/>
        <BottomNavigationAction label="پروفایل" icon={<Person/>} onClick={() => router.push(PROFILE)}/>
      </BottomNavigation>
    </div>
  );
};

export default React.memo(Footer);