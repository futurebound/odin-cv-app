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
  const [personName, setPersonName] = useState('default name')
  const [email, setEmail] = useState('default@email.com')
  const [phone, setPhone] = useState('(888)888-8888')

  function handleNameChange(e) {
    setPersonName(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value)
  }

  return (
    <>
      <h1>CV App</h1>
      <div className="input">
        <GeneralInfo name={personName} email={email} phone={phone} 
          onNameChange={handleNameChange}
          onEmailChange={handleEmailChange}
          onPhoneChange={handlePhoneChange}/>
        <Education name={schoolName} field={field} date={graduationDate} />
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
