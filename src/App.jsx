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
  const [graduationDate, setGraduationDate] = useState('default grad date')

  const [companyName, setCompanyName] = useState('default company')
  const [position, setPosition] = useState('default position')
  const [responsibilities, setResponsibilities] = useState('default position')
  const [startDate, setStartDate] = useState('default start date')
  const [endDate, setEndDate] = useState('default end date')

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

  // Work handlers
  function handleCompanyChange(e) {
    setCompanyName(e.target.value)
  }

  function handlePositionChange(e) {
    setPosition(e.target.value)
  }

  function handleResponsibilitiesChange(e) {
    setResponsibilities(e.target.value)
  }

  function handleStartDateChange(e) {
    setStartDate(e.target.value)
  }

  function handleEndDateChange(e) {
    setEndDate(e.target.value)
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
        <Work name={companyName} position={position} responsibilities={responsibilities} startDate={startDate} endDate={endDate} 
          onNameChange={handleCompanyChange}
          onPositionChange={handlePositionChange}
          onResponsibilitiesChange={handleResponsibilitiesChange}
          onStartChange={handleStartDateChange}
          onEndChange={handleEndDateChange}
        />
        <Button type='edit' onButtonClick={() => console.log('edit')}/>
        <Button type='submit' onButtonClick={() => console.log('submit')}/>
      </div>
      <div className="display">
        <GeneralInfoDisplay name={personName} email={email} phone={phone} />
        <EducationDisplay name={schoolName} field={field} date={graduationDate} />
        <WorkDisplay name={companyName} position={position} responsibilities={responsibilities} startDate={startDate} endDate={endDate} />
      </div>
    </>
  )
}

export default App
