import { useState } from 'react';
import './styles/App.css';

import Button from './components/Button';
import Education from './components/Education.jsx';
import EducationDisplay from './components/EducationDisplay.jsx';
import GeneralInfo from './components/GeneralInfo';
import GeneralInfoDisplay from './components/GeneralInfoDisplay.jsx';
import Work from './components/Work.jsx';
import WorkDisplay from './components/WorkDisplay.jsx';

function App() {
  const [formData, setFormData] = useState({
    general: { name: '', email: '', phone: '' },
    education: { schoolName: '', field: '', graduationDate: '' },
    work: {
      companyName: '',
      position: '',
      responsibilities: '',
      startDate: '',
      endDate: '',
    },
  });

  const [isEditing, setIsEditing] = useState(true);

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  // const [companyName, setCompanyName] = useState('default company');
  // const [position, setPosition] = useState('default position');
  // const [responsibilities, setResponsibilities] = useState('default position');
  // const [startDate, setStartDate] = useState('default start date');
  // const [endDate, setEndDate] = useState('default end date');

  // Work handlers
  // function handleCompanyChange(e) {
  //   setCompanyName(e.target.value);
  // }

  // function handlePositionChange(e) {
  //   setPosition(e.target.value);
  // }

  // function handleResponsibilitiesChange(e) {
  //   setResponsibilities(e.target.value);
  // }

  // function handleStartDateChange(e) {
  //   setStartDate(e.target.value);
  // }

  // function handleEndDateChange(e) {
  //   setEndDate(e.target.value);
  // }

  return (
    <div className='app'>
      {isEditing ? (
        <>
          <h1>CV Info Input</h1>
          <div className='input'>
            <GeneralInfo
              data={formData.general}
              onInputChange={(field, value) =>
                handleInputChange('general', field, value)
              }
            />
            <Education
              data={formData.education}
              onInputChange={(field, value) =>
                handleInputChange('education', field, value)
              }
            />
            <Button type='submit' onButtonClick={handleSubmit} />
          </div>
        </>
      ) : (
        <>
          <div className='display'>
            <h1>CV Display</h1>
            <GeneralInfoDisplay data={formData.general} />
            <EducationDisplay data={formData.education} />
            <Button type='edit' onButtonClick={handleEdit} />
          </div>
        </>
      )}
      {/* 
        <Work
          name={companyName}
          position={position}
          responsibilities={responsibilities}
          startDate={startDate}
          endDate={endDate}
          onNameChange={handleCompanyChange}
          onPositionChange={handlePositionChange}
          onResponsibilitiesChange={handleResponsibilitiesChange}
          onStartChange={handleStartDateChange}
          onEndChange={handleEndDateChange}
        /> */}
      {/* 
        <WorkDisplay
          name={companyName}
          position={position}
          responsibilities={responsibilities}
          startDate={startDate}
          endDate={endDate}
        /> */}
    </div>
  );
}

export default App;
