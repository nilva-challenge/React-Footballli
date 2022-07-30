import { formatISO } from 'date-fns'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Information from './components/information.component'
import Layout from './components/layout.component'
import Phone from './components/phone.component'
import useMediaQuery from './hooks/use-media-query.hook'

const App: React.FC = () => {
    const navigate = useNavigate()

    const matches = useMediaQuery('(min-width: 600px)')

    useEffect(() => {
        navigate(
            `/results/${formatISO(new Date(), { representation: 'date' })}`
        )
    }, [])

    return <Layout>{matches ? <Information /> : <Phone />}</Layout>
}
export default App
