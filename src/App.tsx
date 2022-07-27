import DateSelection from "./components/DateSelection";
import LeagueCard from "./components/LeagueCard";
import SearchInput from "./components/SearchInput";
import TopNav from "./components/TopNav";

function App() {
  return (
    <>
      <header>
        <TopNav />
        <SearchInput />
        <DateSelection />
      </header>
      <main className="bg-[#f5f6fb] h-[80vh] pt-8 px-4">
        <LeagueCard />
      </main>
    </>
  );
}

export default App;
