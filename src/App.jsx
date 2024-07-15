import { useState } from 'react'
import './App.css'

import Button from './components/Button'
import Education from './components/Education.jsx'
import EducationDisplay from './components/EducationDisplay.jsx'
import GeneralInfo from './components/GeneralInfo'
import GeneralInfoDisplay from './components/GeneralInfoDisplay.jsx'
import Work from './components/Work.jsx'
import WorkDisplay from './components/WorkDisplay.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>CV App</h1>
      <div className="input">
        <GeneralInfo />
        <Education type="education" />
        <Work type="work" />
        <Button type='edit' onButtonClick={() => console.log('edit')}/>
        <Button type='submit' onButtonClick={() => console.log('submit')}/>
      </div>
      <div className="display">
        <GeneralInfoDisplay />
        <EducationDisplay />
        <WorkDisplay />
      </div>
    </>
  )
}

export default App
