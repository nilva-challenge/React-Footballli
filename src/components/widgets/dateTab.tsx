import { checkDateAndConvert, yesterday } from "@/utils/checkDateAndConver";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";
import { Dispatch, SetStateAction, forwardRef } from "react";
interface IProps {
  day: string;
  index: number;
  activeTab: number;
  dateRang: string[];
  setActiveTab:Dispatch<SetStateAction<number>>
}
const DateTab = forwardRef<HTMLSpanElement, IProps>(function DateTab(
  { day, index, dateRang,setActiveTab,activeTab },
  ref
) {


  return (
    <Link href={`/competitions/${day}`} className="mx-6">
      <span
      onClick={()=>setActiveTab(index)}
        ref={
          index - 3 === dateRang.indexOf(formatDate(yesterday, "en-UK"))
            ? ref
            : null
        }
        className="text-gray1 text-base
      font-bold hover:text-dark
       focus:text-dark min-w-max block"
      >
        {" "}
        {checkDateAndConvert(new Date(day))}{" "}
      </span>
      <span className={`${activeTab===index?"block":"hidden"} w-full h-2 bg-secondary rounded-t-lg`}></span>
    </Link>
  );
});

export default DateTab;
