import Score from "./Score";

const MatchScores = ({ data }) => {
  return (
    <div className='w-full h-full flex justify-center transition-all max-h-[500px] overflow-scroll scrollbar-hidden'>
      <div className='flex flex-col gap-4 mt-6 w-80 h-11 rounded-lg'>
        {data.map((item) => (
          <Score league={item} />
        ))}
      </div>
    </div>
  );
};

export default MatchScores;
