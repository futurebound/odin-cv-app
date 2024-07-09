import { useState } from 'react'
import './App.css'
import WorkExperience from './components/WorkExperience'
import EducationExperience from './components/EducationExperience'
import GeneralInfo from './components/GeneralInfo'
import Button from './components/Button'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>CV App</h1>
      <div className="card">
        <GeneralInfo type="name" />
        <GeneralInfo type="email" />
        <GeneralInfo type="phone" />
        <EducationExperience type="education" />
        <WorkExperience type="work" />
        <Button type='edit' onButtonClick={() => console.log('edit')}/>
        <Button type='submit' onButtonClick={() => console.log('submit')}/>
      </div>
    </>
  )
}

export default App
