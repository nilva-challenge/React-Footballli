import React, { useEffect } from 'react';
import { useState } from 'react'
import './App.css'
import Header from './components/header/header';
import { getGamesInfo } from '../api/gamesApi';
import { toast } from 'react-toastify';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';


export const GamesContext = React.createContext()
export const DateContext = React.createContext()
export const SearchContext = React.createContext()

function App() {

  const [gamesData, setGamesData] = useState({});
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const dateValue = {
    date ,
    setDate
  }
  const [search ,setSearch] = useState("")
  const searchValue = {
    search ,
    setSearch
  }

  useEffect(() => {

    getGamesInfo(date).then((data) => {
      setGamesData(data)
    }).catch(
      toast.error("خطا در دریافت اطلاعات")
    )
  
  } ,[date])


  return (
    <div className='appContainer'>
      <GamesContext.Provider value={gamesData} >
        <DateContext.Provider value={dateValue} >
          <SearchContext.Provider value={searchValue}>
            <Header />
            <Main />
            <Footer />
          </SearchContext.Provider>
        </DateContext.Provider>
      </GamesContext.Provider>
    </div>
  )
}

export default App;
