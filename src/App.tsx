import DateSelection from "./components/DateSelection/DateSelection";
import Navbar from "./components/Navbar/Navbar";
import LeagueCard from "./components/LeagueCard/LeagueCard";
import SearchInput from "./components/SearchInput/SearchInput";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <header>
        <Header />
        <SearchInput />
        <DateSelection />
      </header>
      <main className="bg-[#f5f6fb] h-[80vh] pt-1 px-4">
        <LeagueCard />
        <LeagueCard />
      </main>
      <Navbar />
    </>
  );
}

export default App;
