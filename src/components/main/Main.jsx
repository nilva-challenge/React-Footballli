import React ,{useContext} from "react";
import { GamesContext } from "../../App";
import { Collapse ,Divider } from "antd";
import moment from "jalali-moment"

import styles from "./main.module.css";

const { Panel } = Collapse;

const Main = () => {

moment.locale('fa', { useGregorianParser: true });  

    const getTehranTime = (h ,m) => {
        const iranH = +h + 3 > 24 ? (+h+3)-24 : +h+3
        const iranM = +m + 30 > 60 ? (+m+30) - 60 : +m+30 == 60 ? "00" : +m+30
        return `${iranH}:${iranM}`
    }

    const data = useContext(GamesContext)

    return ( 
        <div className={styles.container}>
            {
                data?.all?.map((item) => {
                    return(
                        <Collapse key={item.api_id} className={styles.accordion}>
                            <Panel  header={
                                <div  className={styles.accordionTitle}  >
                                    <img src={item?.logo} alt="league logo" />
                                    <p> {item?.name} </p>
                                </div>
                            } key="1">
                                {
                                    item?.fixtures?.map(game => {
                                        return(
                                            <div className={styles.accordionDescriptionContainer} >
                                                <p> {game?.away?.name} </p>
                                                <img src={game?.away?.logo} alt="away team logo" />
                                                <p> {getTehranTime(moment(game?.start_time).format().split("T")[1].split("+")[0].split(":")[0] ,moment(game?.start_time).format().split("T")[1].split("+")[0].split(":")[1])} </p>
                                                <img src={game?.home?.logo} alt="away team logo" />
                                                <p> {game?.home?.name} </p>
                                            </div>
                                        )
                                    })

                                }
                            </Panel>
                        </Collapse>
                    )
                })
            }
        </div>
     );
}
 
export default Main;