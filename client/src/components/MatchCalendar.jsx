const MatchCalender = ({ calender }) => {
  return (
    <div className='flex items-center gap-3 justify-around max-w-[300px] overflow-y-hidden scrollbar-hidden py-1'>
      <button className='border-b-4 border-green-700 p-1'>{calender}</button>
      <button>{calender}</button>
      <button>{calender}</button>
      <button>{calender}</button>
      <button>{calender}</button>
      <button>{calender}</button>
    </div>
  );
};

export default MatchCalender;
