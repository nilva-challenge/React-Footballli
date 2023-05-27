
import React from "react";
import styles from "./footer.module.css";
import {TbSoccerField  ,GiTrophyCup ,AiOutlineUser ,RiCompassDiscoverLine ,IoFootball} from "react-icons/all"

const Footer = () => {
    return ( 
        <div className={styles.footerContainer} >
            <button>
                <TbSoccerField size={"small"} />
                <p>مسابقات</p>
            </button>
            <button>
                <RiCompassDiscoverLine size={"small"} />
                <p>اکتشاف</p>
            </button>
            <button>
                <IoFootball size={"small"} />
                <p>فوتبال</p>
            </button>
            <button>
                <GiTrophyCup size={"small"} />
                <p>لیگ</p>
            </button>
            <button>
                <AiOutlineUser size={"small"} />
                <p>پروفایل</p>
            </button>
        </div> 
    );
}
 
export default Footer;