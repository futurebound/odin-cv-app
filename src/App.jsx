import { useState } from 'react'
import './App.css'
import Experience from './components/Experience'
import GeneralInfo from './components/GeneralInfo'
import Button from './components/Button'

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
        <GeneralInfo type="name" />
        <GeneralInfo type="email" />
        <GeneralInfo type="phone" />
        <Experience type="work" />
        <Experience type="work" />
        <Experience type="work" />
        <Experience type="work" />
        <Button type='edit' onButtonClick={() => console.log('edit')}/>
        <Button type='submit' onButtonClick={() => console.log('submit')}/>
      </div>
    </>
  )
}

export default App
