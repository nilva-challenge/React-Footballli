import React, { useEffect } from 'react';
import { useState } from 'react'
import './App.css'
import Header from './components/header/header';
import { getGamesInfo } from '../api/gamesApi';
import { toast } from 'react-toastify';
import Main from './components/main/Main';


export const GamesContext = React.createContext()


function App() {

  const [gamesData, setGamesData] = useState({});

  useEffect(() => {
    getGamesInfo('2023-01-03').then((data) => {
      console.log(data);
      setGamesData(data)
    }).catch(
      toast.error("خطا در دریافت اطلاعات")
    )
  
  } ,[])


  return (
    <div>
      <GamesContext.Provider value={gamesData} >
        <Header />
        <Main />
      </GamesContext.Provider>
    </div>
  )
}

export default App;
