import { Layout } from "antd";
import {UserOutlined} from '@ant-design/icons';
import { TFooterItems } from "../../types/TFooterItems";

const{Footer:AntFooter}=Layout;

const footerItems:TFooterItems=[
    {
    title:'پروفایل',
    icon:<UserOutlined />,
},
    {
    title:'پروفایل',
    icon:<UserOutlined />,
},
    {
    title:'پروفایل',
    icon:<UserOutlined />,
},
    {
    title:'پروفایل',
    icon:<UserOutlined />,
},
    {
    title:'پروفایل',
    icon:<UserOutlined />,
},
]
const Footer  = () => {

    function footerMaker(footerItems:TFooterItems){
        return (
            footerItems.map(item => <div className="footer-item">{item.icon}<span>{item.title}</span></div>)
        )
    }
    
    return ( 
    <AntFooter className="footer" >

    {footerMaker(footerItems)}
        
    </AntFooter>
     );
}

export default Footer;