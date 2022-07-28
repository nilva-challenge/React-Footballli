import { format } from 'date-fns'
import { TMatch, TResult } from '../types/match.types'

interface IProps {
    result: TMatch
}

const MatchInfoCard: React.FC<IProps> = ({ result }) => {
    return (
        <div className="bg-white w-full p-4 px-3 rounded-md shadow-md flex items-center justify-between  min-h-[80px] relative">
            {Object.values(result.teams).map((resultObj: TResult) => (
                <div className="flex items-center gap-2">
                    <img
                        className="mask mask-circle object-contain object-center w-7 h-7"
                        src={resultObj.logo}
                    />
                    <span className="text-xs font-bold text-gray-700 max-w-[50px] text-center">
                        {resultObj.name.substring(0, 16)}
                    </span>
                </div>
            ))}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {result.goals.home !== null && result.goals.away !== null
                    ? `${result.goals.home} - ${result.goals.away}`
                    : format(new Date(result.fixture.date), 'p')}
            </span>
        </div>
    )
}

export default MatchInfoCard
