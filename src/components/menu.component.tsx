import { AiOutlineCompass } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { TbReportAnalytics } from 'react-icons/tb'
import MenuItem from './menu-item.component'

const menuData = [
    {
        id: 1,
        name: 'Results',
        Icon: TbReportAnalytics,
    },
    {
        id: 2,
        name: 'Explore',
        Icon: AiOutlineCompass,
    },
    {
        id: 3,
        name: 'Profile',
        Icon: BsPerson,
    },
]

const Menu: React.FC = () => {
    return (
        <div className="w-full h-16 bg-white ring-1 ring-slate-400 absolute bottom-0 flex items-center justify-evenly">
            {menuData.map(item => (
                <MenuItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default Menu
