import { AiFillClockCircle } from 'react-icons/ai'

const Header: React.FC = () => {
    return (
        <div className="flex items-center justify-between p-4 w-full text-neutral">
            <h1 className="text-base font-bold">Live Results</h1>
            <AiFillClockCircle className="text-lg" />
        </div>
    )
}

export default Header
