import { GrCaretNext } from 'react-icons/gr'
import { IoMdDoneAll } from 'react-icons/io'

interface IProps {
    setTabStatus: (status: 'finished' | 'upNext') => void
    tabStatus: 'finished' | 'upNext'
    isDisabledUpNext: boolean
    isDisabledFinished: boolean
}
const StatusTabs: React.FC<IProps> = ({
    setTabStatus,
    tabStatus,
    isDisabledFinished,
    isDisabledUpNext,
}) => {
    const handleChangeStatus = (status: 'finished' | 'upNext') =>
        setTabStatus(status)

    return (
        <div className="btn-group w-full flex items-center">
            <button
                disabled={isDisabledFinished}
                onClick={() => handleChangeStatus('finished')}
                className={`btn btn-sm btn-outline flex-1 flex items-center gap-2 ${
                    tabStatus === 'finished' && 'btn-active'
                } ${isDisabledFinished && 'btn-disabled'}`}
            >
                <IoMdDoneAll className="text-base" size="1rem" /> Finished
            </button>
            <button
                onClick={() => handleChangeStatus('upNext')}
                disabled={isDisabledUpNext}
                className={`btn btn-sm btn-outline flex-1 flex items-center gap-2 ${
                    tabStatus === 'upNext' && 'btn-active'
                } ${isDisabledUpNext && 'btn-disabled'}`}
            >
                <GrCaretNext className="text-base" size="1rem" />
                Up Next
            </button>
        </div>
    )
}

export default StatusTabs
