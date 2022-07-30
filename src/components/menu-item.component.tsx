import { IconType } from 'react-icons'
import { Link, useLocation } from 'react-router-dom'
interface IProps {
    item: {
        id: number
        name: string
        Icon: IconType
    }
}

const MenuItem: React.FC<IProps> = ({ item }) => {
    const { Icon, name } = item
    const { pathname } = useLocation()

    return (
        <Link to={name.toLowerCase()}>
            <div
                className={`flex flex-col w-full items-center p-2 cursor-pointer ${
                    pathname.startsWith('/' + name.toLowerCase()) &&
                    'text-primary'
                }`}
            >
                <Icon size="1.2rem" />
                <span>{name}</span>
            </div>
        </Link>
    )
}

export default MenuItem
