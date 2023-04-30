import { Tabs } from "antd";
import DateObject from "react-date-object"; 
import { TabLabel } from "./components/TabLabel";
import { useAppSelector } from "../../../state/reduxHooks";
import { TabContent } from "./components/TabContent";


const date = new DateObject(new Date());

console.log(date.subtract(-1, "day").format() ); 

 
function onTabclick(key: string){

}

const MatchPage = () => {
  const {tabs,numberOfprevDays} = useAppSelector((state) => state.matches);
  
  function makeTabs(){
    return tabs.map((_, i,arr) => {

      let isFirst =( i === 0)
      let isLast =(arr.length - 1 === i )
      const id = i - numberOfprevDays;

      return {
        label: <TabLabel id={id} isFirst ={isFirst} isLast={isLast}/>, 
        key: String(id),
        children: <TabContent />,
   
      };
    })
}
 
    return (
   
      <Tabs
        
          defaultActiveKey="0"
          tabPosition='top'
          className='tabs'
          direction="rtl"
          items={makeTabs()}
          onTabClick={onTabclick}
          destroyInactiveTabPane
           
          /> 
  
    );
}
 
export default MatchPage;