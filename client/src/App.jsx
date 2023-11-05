import Header from "./components/Header";
import { LuClock7 as clockIcon } from "react-icons/lu";

const App = () => {
  return (
    <div className='flex flex-col max-w-[450px] min-w-[370px] h-[750px] rounded-3xl bg-gray-100 border-2  border-black items-center justify-center gap-3 mt-5 scrollbar-hidden relative'>
      <Header title={"نتایج زنده"} Icon={clockIcon} />
    </div>
  );
};

export default App;
