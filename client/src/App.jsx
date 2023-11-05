//hooks
import { useState } from "react";

//components
import Header from "./components/Header";
import MatchCalender from "./components/MatchCalendar";
import FooterMenu from "./components/FooterMenu";

//react-icons
import { LuClock7 as clockIcon } from "react-icons/lu";
import { LiaSearchSolid } from "react-icons/lia";
import { useEffect } from "react";
import axios from "axios";
import MatchScores from "./components/MatchScores";

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000/?q=${query}`);
      setData(res.data);
    };
    if (query.length >= 3 || query.length === 0) {
      fetchUsers();
    }
  }, [query]);

  return (
    <div className='flex flex-col max-w-[450px] min-w-[370px] h-[750px] rounded-3xl bg-gray-100 border-2  border-black items-center justify-center gap-3 mt-5 scrollbar-hidden relative'>
      <Header title={"نتایج زنده"} Icon={clockIcon} />
      <div className='flex bg-white shadow-md shadow-gray-200 p-1 items-center rounded my-2 w-80 '>
        <LiaSearchSolid className={"text-lg text-gray-500 pt-1"} />
        <input
          onChange={(e) => setQuery(e.target.value)}
          type='search'
          placeholder={"جستجو"}
          className='placeholder:px-2 w-full focus:outline-none px-3'
        />
      </div>
      <MatchCalender calender='امروز' />
      <MatchScores data={data} />
      <FooterMenu />
    </div>
  );
};

export default App;
