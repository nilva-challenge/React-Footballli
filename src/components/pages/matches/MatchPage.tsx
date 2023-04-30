import { Tabs } from "antd";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { RelativeDays } from "../../../shared/enums/RelativeDays";
import { useRef } from "react";
import { TabLabel } from "./TabLabel";


const date = new DateObject(new Date());

console.log(date.subtract(-1, "day").format() ); 
const DATE_FORMAT="YYYY-MM-DD"
const tabsId=[ -1,0,1,2 ]



  // function nameLabels(id:number){

  //   if (RelativeDays.yesterday.id <=id && id <= RelativeDays.afterTomorrow.id){ 
  //     const relativeDaysValues = Object.values(RelativeDays)
  //     return relativeDaysValues.find(day=>day.id===id)!.label 
  //   }

  //   const PersianDate = new DateObject(
  //     {date: new Date(),
  //     calendar: persian, locale: persian_fa}
  //     );

  //   return PersianDate.add(id,'day').format("DD MMMM")
     
  // }

  function initTabs(){
    return new Array(10).fill(null).map((_, i,arr) => {

      let isFirstOrLast=(arr.length - 1 === i || i===0)
      const id = i - 5;

      return {
        label: <TabLabel id={id} isFirstOrLast={isFirstOrLast}/>, 
        key: String(id),
        children: `Content of tab ${id} `,
      };
    })
}

// function TabObj(label, key, children ) {
//   this.firstName = label;
//   this.lastName = key;
//   this.age = children;
 
// }

function addDays(){}
const MatchPage = () => {

    return (
    
      <Tabs
        
          defaultActiveKey="0"
          tabPosition='top'
          className='tabs'
          direction="rtl"
          items={initTabs()}
          // items={new Array(4).fill(null).map((_, i) => {
          //   const id =i-1;
          //   return {
          //     label: `${date.format()}`,
          //     // label: `روز${id}`,
          //     key: String(id),
          //     disabled: i === 28,
          //     children: `Content of tab ${id} `,
          //   };
          // })}
          /> 
  
    );
}
 
export default MatchPage;