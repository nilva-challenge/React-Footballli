import { formatISO } from 'date-fns'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDays } from '../helpers/dates.helper'
import ResultsStack from './results-stack.component'
import StatusTabs from './status-buttons.component'

const Results: React.FC = () => {
    const { date } = useParams()

    const [tabStatus, setTabStatus] = useState<'finished' | 'upNext'>(
        'finished'
    )

    const isDisabledUpNext =
        date === formatISO(getDays(new Date(), -1), { representation: 'date' })

    const isDisabledFinished = Date.now() < new Date(date as string).getTime()

    useEffect(() => {
        if (isDisabledFinished) setTabStatus('upNext')
        else setTabStatus('finished')
    }, [date])

    return (
        <div className="p-3 w-full space-y-5">
            <StatusTabs
                isDisabledUpNext={isDisabledUpNext}
                isDisabledFinished={isDisabledFinished}
                tabStatus={tabStatus}
                setTabStatus={setTabStatus}
            />
            <ResultsStack tabStatus={tabStatus} />
        </div>
    )
}

export default Results
