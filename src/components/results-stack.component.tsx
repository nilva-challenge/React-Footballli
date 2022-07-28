import { useQuery } from '@tanstack/react-query'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { getMatchInfo } from '../api/config.api'
import ErrorComponent from './error.component'
import MatchInfoCard from './match-info-card.component'

interface IProps {
    tabStatus: 'finished' | 'upNext'
}

const ResultsStack: React.FC<IProps> = ({ tabStatus }) => {
    const { date } = useParams()

    const {
        isLoading,
        isError,
        data: resultsData,
    } = useQuery(['matches', date, tabStatus], () =>
        getMatchInfo(date as string, tabStatus === 'finished' ? 'FT' : 'NS')
    )

    return (
        <>
            {isLoading && (
                <div>
                    <Skeleton
                        count={3}
                        className="bg-white w-full p-4 px-3 rounded-md shadow-md flex items-center justify-between min-h-[60px]"
                    />
                </div>
            )}
            {isError && (
                <ErrorComponent
                    containerClassName="p-5 flex flex-col justify-center h-[200px] gap-4 bg-white/50 items-center rounded-md shadow-lg"
                    iconClassName="text-4xl text-red-500"
                    messageClassName="text-red-900"
                />
            )}
            {resultsData && resultsData.length > 0 ? (
                <div className="space-y-4 overflow-y-scroll h-[235px] horizontal-scroll">
                    {resultsData.slice(0, 20).map(result => (
                        <MatchInfoCard key={uuidv4()} result={result} />
                    ))}
                </div>
            ) : isLoading ? null : (
                <ErrorComponent
                    containerClassName="p-5 flex flex-col justify-center h-[200px] gap-4 bg-white/50 items-center rounded-md shadow-lg"
                    iconClassName="text-yellow-600 text-xl"
                    message="API rate limit exceeded."
                    messageClassName="text-yellow-600 text-center"
                />
            )}
        </>
    )
}

export default ResultsStack
