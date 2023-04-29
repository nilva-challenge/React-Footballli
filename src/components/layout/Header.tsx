import { Layout } from "antd";
import { ReactComponent as ClockIcon } from '../../assets/icons/ClockIcon.svg'

const{Header:AntHeader}=Layout;

const Header = () => {
    return ( <AntHeader  >
        <ClockIcon style={{'fill':'white'}}/>
        نتایج زنده
        
        </AntHeader> );
}
 
export default Header;