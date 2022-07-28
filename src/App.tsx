import { lazy } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import green from '@mui/material/colors/green';
import DateComponent from './components/dateSelect';
import DateProvider from './context/DateState';
import './App.css';

const GameList = lazy(() => import('./components/games'))
const Header = lazy(() => import('./components/header'))
const Footer = lazy(() => import('./components/footer'))



const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: green[400],
    },
  },
  typography: {
    fontFamily: "Vazirmatn",
  },
});

function App() {
  return (
    <DateProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <DateComponent />
        <GameList />
        <Footer />
      </ThemeProvider>
    </DateProvider>

  );
}

export default App;
