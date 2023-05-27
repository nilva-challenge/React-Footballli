import { Grid  ,Space} from "antd"
import { ClockCircleOutlined } from "@ant-design/icons"
import SearchBox from "./searchBox";
import TabBar from "./tabBar";
import { useState } from "react";
import styles from './header.module.css'

const Header = () => {

    const [search ,setSearch] = useState();
    const {sm} = Grid.useBreakpoint();

    return ( 
        <div className={styles.mainContainer} >
            <div className={styles.headerContainer} >
                <ClockCircleOutlined style={{ fontSize: '150%'}} />
                <h3> نتایج زنده </h3>
            </div>
            <SearchBox search = {search} setSearch={setSearch} />
            <TabBar  />
        </div>
     );
}
 
export default Header;