import React from "react";
import { Button } from "antd";
import styles from "./tabBar.module.css"

const TabBar = () => {

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
    // console.log(dates);

    return ( 
        <div className={styles.container}>
            {
                dates.map((date ,index) => {
                    return(
                        <button className={styles.btn} >
                            {index === 0 ? "دیروز"  : index === 1 ? "امروز" : index === 2 ? 'فردا' : new Date(date).toISOString().split("T")[0].replaceAll("-","/") }
                        </button>
                    )
                })
            }
        </div>
     );
}
 
export default TabBar;