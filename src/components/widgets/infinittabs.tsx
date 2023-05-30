'use client';

import { memo, useEffect, useMemo, useRef, useState} from "react";
import { getDatesInRange } from "@/utils/getDaysRange";
import { formatDate } from "@/utils/formatDate";
import DateTab from './dateTab';
const InfintiTabs = memo(function InfintiTabs (){
  const todayRef = useRef<HTMLSpanElement>(null);
  const [activeTab, setActiveTab] = useState<number>(10);
  const d1 = new Date('2022-01-1');
  const d2 = new Date('2024-06-30');
const dateRang=useMemo(() => {
  return getDatesInRange(d1, d2)
}, [d1,d2]);
const currentIndex= dateRang.indexOf(formatDate(new Date(), "en-UK"))
useEffect(() => {
  setActiveTab(currentIndex);
  todayRef.current?.scrollIntoView();
}, [])

    
      return (
        <div className='bg-white py-4 pr-4 flex overflow-x-auto hideScrollbar'>
        {dateRang.map((day,index)=>{
              return <DateTab key={index} activeTab={activeTab} setActiveTab={setActiveTab} day={day} index={index} dateRang={dateRang}   ref={todayRef}/>
   
            })}
 
        </div>
      )
    }
)

export default InfintiTabs