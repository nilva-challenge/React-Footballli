//hooks and Custom hooks
import { useState, useRef, useCallback, useEffect } from "react";
import usePosts from "./hooks/usePosts";

//components
import Header from "./components/Header";
import MatchCalender from "./components/MatchCalendar";
import FooterMenu from "./components/FooterMenu";
import MatchScores from "./components/MatchScores";

//react-icons
import { LuClock7 as clockIcon } from "react-icons/lu";
import { LiaSearchSolid } from "react-icons/lia";

const App = () => {
  const [query, setQuery] = useState("");
  const [pageNum, setPageNum] = useState([]);

  const { isError, isLoading, results, error } = usePosts(query, pageNum);

  const intObserver = useRef();
  const lastContentRef = useCallback(
    (post) => {
      if (isLoading) return;
      if (intObserver.current) {
        intObserver.current.disconnect();
      }
      intObserver.current = new IntersectionObserver((posts) => {
        if ((posts[0].isIntersecting && pageNum) || query) {
          console.log("we are near the last league");
          setPageNum((prev) => prev + 1);
        }
      });
      if (post) intObserver.current.observe(post);
    },
    [query, isLoading, pageNum]
  );
  const filteredLeague = results.filter((item) =>
    item.leagueName.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  const content = filteredLeague.map((post, i) => {
    if (results.length === i + 1) {
      return <MatchScores data={post} ref={lastContentRef} />;
    }
    return <MatchScores data={post} />;
  });

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
      <div className='bg-white h-[500px] overflow-scroll min-w-full scrollbar-hidden px-3'>
        {content}
        {isLoading && <p>Loading more posts .... </p>}
      </div>
      <FooterMenu />
    </div>
  );
};

export default App;

