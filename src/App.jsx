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

  const [schoolName, setSchoolName] = useState('default school name')
  const [field, setField] = useState('default field of study')
  const [graduationDate, setGraduationDate] = useState('june 2024')

  // GeneralInfo handlers
  function handleNameChange(e) {
    setPersonName(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value)
  }

  // Education handlers
  function handleSchoolChange(e) {
    setSchoolName(e.target.value)
  }

  function handleFieldChange(e) {
    setField(e.target.value)
  }

  function handleGraduationChange(e) {
    setGraduationDate(e.target.value)
  }


  return (
    <>
      <h1>CV App</h1>
      <div className="input">
        <GeneralInfo name={personName} email={email} phone={phone} 
          onNameChange={handleNameChange}
          onEmailChange={handleEmailChange}
          onPhoneChange={handlePhoneChange}
        />
        <Education name={schoolName} field={field} date={graduationDate} 
          onNameChange={handleSchoolChange}
          onFieldChange={handleFieldChange}
          onDateChange={handleGraduationChange}
        />
        <Work type="work" />
        <Button type='edit' onButtonClick={() => console.log('edit')}/>
        <Button type='submit' onButtonClick={() => console.log('submit')}/>
      </div>
      <div className="display">
        <GeneralInfoDisplay name={personName} email={email} phone={phone} />
        <EducationDisplay name={schoolName} field={field} date={graduationDate} />
        <WorkDisplay />
      </div>
    </>
  )
}

export default App
