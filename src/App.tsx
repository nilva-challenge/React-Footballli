import { useState } from 'react' 
import './assets/styles/index.scss'
import { DatePicker } from '../node_modules/antd/es/index'
import Layout from './components/layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
     
    <Layout>
 
      <div>
        <a href="https://vitejs.dev" target="_blank"> 
        </a>
        <a href="https://react.dev" target="_blank"> 
        </a>
      </div>
      <h1>Vite + React</h1>
      <DatePicker />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </Layout>
     
  )
}

export default App
