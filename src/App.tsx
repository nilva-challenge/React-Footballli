import DateSelection from "./components/DateSelection/DateSelection";
import LeagueCard from "./components/LeagueCard/LeagueCard";
import SearchInput from "./components/SearchInput/SearchInput";
import TopNav from "./components/TopNav/TopNav";

function App() {
  return (
    <>
      <header>
        <TopNav />
        <SearchInput />
        <DateSelection />
      </header>
      <main className="bg-[#f5f6fb] h-[80vh] pt-1 px-4">
        <LeagueCard />
        <LeagueCard />
      </main>
    </>
  );
}

export default App;
