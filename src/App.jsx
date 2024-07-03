import { useState } from 'react'
import './App.css'
import Experience from './components/Experience'
import GeneralInfo from './components/GeneralInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Experience />
        <GeneralInfo />
      </div>
    </>
  )
}

export default App
