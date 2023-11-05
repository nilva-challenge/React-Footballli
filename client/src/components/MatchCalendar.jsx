import { Button } from "./Button";

const MatchCalender = ({ calender }) => {
  return (
    <div className='flex items-center gap-3 justify-around max-w-[300px] overflow-y-hidden scrollbar-hidden py-1'>
      <Button>
        <p>دیروز</p>
      </Button>
      <Button className='border-b-4 border-green-700'>
        <p>امروز</p>
      </Button>
      <Button>فردا</Button>
      <Button>
        <p className='text-sm w-10'>15 آبان</p>
      </Button>
      <Button>
        <p className='text-sm w-10'>16 آبان</p>
      </Button>
      <Button>
        <p className='text-sm w-10'>17 آبان</p>
      </Button>
    </div>
  );
};

export default MatchCalender;
