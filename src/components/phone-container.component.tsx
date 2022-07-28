import { Outlet } from 'react-router-dom'
import Menu from './menu.component'

const PhoneContainer: React.FC = () => {
    return (
        <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
                <div className="artboard artboard-demo phone-1 flex flex-col items-center justify-start bg-gray-200 relative">
                    <Outlet />
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default PhoneContainer
