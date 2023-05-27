import React, { useContext, useRef } from "react";
import { Button } from "antd";
import styles from "./tabBar.module.css";
import moment from "jalali-moment";
import { DateContext } from "../../App";

const TabBar = () => {

    const {date ,setDate} = useContext(DateContext)

    moment.locale('fa', { useGregorianParser: true });  

    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }
    const today = new Date().setDate(new Date().getDate());
    const yesterday = new Date().setDate(new Date().getDate() - 1);
    const thirtyDaysLater = new Date().setDate(new Date().getDate() + 10);

    
    const getDates = (startDate, stopDate) => {
        var dateArray = new Array();
        var currentDate = startDate;
        while (currentDate <= stopDate) {
            dateArray.push(new Date (currentDate));
            currentDate = new Date(currentDate).addDays(1);
        }
        return dateArray;
    }

    const dates = getDates(yesterday ,thirtyDaysLater)

    const selectDayHandler = (date) => {
        setDate(date)
    }

    return ( 
        <div className={styles.container}>
            {
                dates.map((date ,index) => {
                    return(
                        <button key={index} className={styles.btn} onClick={() => selectDayHandler(new Date(date).toISOString().split("T")[0])} >
                            {index === 0 ? "دیروز"  : index === 1 ? "امروز" : index === 2 ? 'فردا' :  moment(new Date(date).toISOString().split("T")[0]).format("YYYY/MM/DD")  }
                        </button>
                    )
                })
            }
        </div>
     );
}
 
export default TabBar;