import React from "react";
import { Input } from "antd";
import styles from "./searchBox.module.css"
const SearchBox = ({search ,setSearch}) => {

    const changeHandler = (e) => {
        setSearch(e.target.value)
    }

    return ( 
        <div className={styles.searchContainer} >
            <Input onChange={changeHandler} value={search} className={styles.searchInput} placeholder="جستجو" />
        </div>
     );
}
 
export default React.memo(SearchBox);