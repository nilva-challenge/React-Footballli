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
            <Space className={styles.headerContainer} >
                <ClockCircleOutlined size={"large"} />
                <h3> نتایج زنده </h3>
            </Space>
            <SearchBox search = {search} setSearch={setSearch} />
            <TabBar  />
        </div>
     );
}
 
export default Header;