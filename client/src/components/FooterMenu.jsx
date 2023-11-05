import { Button } from "./Button";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { TfiCup } from "react-icons/tfi";
import { IoFootballOutline } from "react-icons/io5";
import { GiSoccerField } from "react-icons/gi";

const FooterMenu = () => {
  return (
    <footer className='w-full  items-center flex justify-around gap-2 h-fit bg-white absolute  bottom-0 rounded-b-3xl '>
      <Button className='flex flex-col gap-1 items-center text-gray-500' variant={"ghost"}>
        <FaRegUser className='text-2xl' />
        <p className='text-xs'>پروفایل</p>
      </Button>
      <Button className='flex flex-col gap-1 items-center text-gray-500 ' variant={"ghost"}>
        <TfiCup className='text-2xl' />
        <p className='text-xs'>لیگ ها</p>
      </Button>
      <Button className='flex flex-col gap-1 items-center text-gray-500' variant={"ghost"}>
        <IoFootballOutline className='text-2xl' />
        <p className='text-xs'>فوتبال</p>
      </Button>
      <Button className='flex flex-col gap-1 items-center text-gray-500' variant={"ghost"}>
        <MdOutlineExplore className='text-2xl' />
        <p className='text-xs'>اکتشاف</p>
      </Button>
      <Button className='flex flex-col gap-1 items-center text-green-600' variant={"ghost"}>
        <GiSoccerField className='text-2xl' />
        <p className='text-xs'>مسابقات</p>
      </Button>
    </footer>
  );
};

export default FooterMenu;
