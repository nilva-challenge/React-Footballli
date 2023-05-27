import React, { useContext, useState } from "react";
import { Input } from "antd";
import styles from "./searchBox.module.css"
import { SearchContext } from "../../App";

const SearchBox = () => {

    const {search ,setSearch} = useContext(SearchContext)

    const changeHandler = (e) => {
        setSearch(e.target.value)
    }



    return ( 
        <div className={styles.searchContainer} >
            <Input onChange={changeHandler} value={search} className={styles.searchInput} placeholder="جستجو بر اساس لیگ" />
        </div>
     );
}
 
export default React.memo(SearchBox);