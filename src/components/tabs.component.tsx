import { format, formatISO } from 'date-fns'
import { Link, useParams } from 'react-router-dom'
import { getDays } from '../helpers/dates.helper'

const daysData = [
    {
        id: 1,
        name: 'Yesterday',
        date: getDays(new Date(), -1),
    },
    {
        id: 2,
        name: 'Today',
        date: getDays(new Date(), 0),
    },
    {
        id: 3,
        name: 'Tomorrow',
        date: getDays(new Date(), 1),
    },
    {
        id: 4,
        name: format(getDays(new Date(), 2), 'eeee'),
        date: getDays(new Date(), 2),
    },
    {
        id: 5,
        name: format(getDays(new Date(), 3), 'eeee'),
        date: getDays(new Date(), 3),
    },
    {
        id: 6,
        name: format(getDays(new Date(), 4), 'eeee'),
        date: getDays(new Date(), 4),
    },
    {
        id: 7,
        name: format(getDays(new Date(), 5), 'eeee'),
        date: getDays(new Date(), 5),
    },
]

const Tabs: React.FC = () => {
    const { date } = useParams()
    return (
        <div className="pt-4">
            <div className="tabs flex-nowrap overflow-x-auto overflow-y-hidden  horizontal-scroll">
                {daysData.map(day => (
                    <Link
                        to={`/results/${formatISO(new Date(day.date), {
                            representation: 'date',
                        })}`}
                        key={day.id}
                        className={`tab tab-bordered w-max ${
                            formatISO(new Date(day.date), {
                                representation: 'date',
                            }) === date && 'tab-active'
                        }`}
                    >
                        {day.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Tabs
