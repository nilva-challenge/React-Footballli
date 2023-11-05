//components
import Header from "./components/Header";
import Input from "./components/Input";

//react-icons
import { LuClock7 as clockIcon } from "react-icons/lu";
import { LiaSearchSolid as searchIcon } from "react-icons/lia";
import MatchCalender from "./components/MatchCalendar";
import MatchScores from "./components/MatchScores";

const App = () => {
  return (
    <div className='flex flex-col max-w-[450px] min-w-[370px] h-[750px] rounded-3xl bg-gray-100 border-2  border-black items-center justify-center gap-3 mt-5 scrollbar-hidden relative'>
      <Header title={"نتایج زنده"} Icon={clockIcon} />
      <Input type={"search"} Icon={searchIcon} placeholder={"جستجو"} />
      <MatchCalender calender='امروز' />
      <MatchScores />
    </div>
  );
};

export default App;
