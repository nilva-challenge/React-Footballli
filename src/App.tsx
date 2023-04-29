import { useState } from 'react' 
import './assets/styles/index.scss' 
import Layout from './components/layout/Layout'
import MatchPage from './components/pages/matches/MatchPage'

function App() {
  const [count, setCount] = useState(0)

  return (
     
    <Layout>
      
      <MatchPage/>
     
    </Layout>
     
  )
}

export default App
