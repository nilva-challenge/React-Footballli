import { leagues } from "../data";
import Score from "./Score";

const MatchScores = () => {
  return (
    <div className='w-full h-full flex justify-center transition-all max-h-[500px] overflow-scroll scrollbar-hidden'>
      <div className='flex flex-col gap-4 mt-6 w-80 h-11 rounded-lg'>
        {leagues.map((league) => (
          <Score league={league} />
        ))}
      </div>
    </div>
  );
};

export default MatchScores;
