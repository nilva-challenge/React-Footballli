import { formatISO } from 'date-fns'
import { Navigate, Route, Routes } from 'react-router-dom'
import ErrorComponent from './error.component'
import PhoneContainer from './phone-container.component'
import Results from './results.component'
import SectionContainer from './section-container.component'

const Phone: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<PhoneContainer />}>
                <Route path="results" element={<SectionContainer />}>
                    <Route
                        index
                        element={
                            <Navigate
                                to={`/results/${formatISO(new Date(), {
                                    representation: 'date',
                                })}`}
                                replace
                            />
                        }
                    />
                    <Route path=":date" element={<Results />} />
                </Route>
                <Route
                    path="*"
                    element={
                        <ErrorComponent
                            containerClassName="p-5 w-11/12 flex flex-col justify-center h-[200px] gap-4 bg-white/50 items-center rounded-md shadow-lg absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                            iconClassName="text-4xl text-red-500"
                            messageClassName="text-red-900 text-center"
                            message="This feature is not implemented."
                        />
                    }
                />
            </Route>
        </Routes>
    )
}

export default Phone
