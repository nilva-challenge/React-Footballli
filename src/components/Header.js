import React from 'react'
import style from './header.module.css';
import { Button, Typography } from '@mui/material';
import SportsSoccer from '@mui/icons-material/SportsSoccer';
function Header() {
  return (
    <div className={style.header}>
        <Button><Typography variant="h2" color="#fff" fontWeight="bold">FootBall</Typography></Button>
        <Button><Typography variant="h2"><SportsSoccer/></Typography></Button>
        
    </div>
  )
}

export default Header