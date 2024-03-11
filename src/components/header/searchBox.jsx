import React, { useContext, useState } from "react";
import { Input } from "antd";
import styles from "./searchBox.module.css"
import { SearchContext } from "../../App";
import { BiSearch } from "react-icons/bi";
import { SearchOutlined } from '@ant-design/icons';

const SearchBox = () => {

    const {search ,setSearch} = useContext(SearchContext)

    const changeHandler = (e) => {
        setSearch(e.target.value)
    }

    

    return ( 
        <div className={styles.searchContainer} >
            <Input onChange={changeHandler} value={search} className={styles.searchInput} placeholder="جستجو ..." prefix={<SearchOutlined className={styles.searchIcon} />} />
        </div>
     );
}
 
export default React.memo(SearchBox);