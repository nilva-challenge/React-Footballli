import React from 'react';
import { useState } from 'react'
import './App.css'
import Header from './components/header/header';
import { getGamesInfo } from '../api/gamesApi';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import useSWR from 'swr';


export const GamesContext = React.createContext()
export const DateContext = React.createContext()
export const SearchContext = React.createContext()

function App() {


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

const { data, error } = useSWR(`/api/football/fixtures/?date=${date}` , getGamesInfo, {
  refreshInterval: 60000,
});

  if (error) return <div>خطا در دریافت اطلاعات</div>;

  return (
    <div className='appContainer'>
      <GamesContext.Provider value={data} >
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
