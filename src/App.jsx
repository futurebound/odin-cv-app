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

  return (
    <div className='app'>
      {isEditing ? (
        <div className='input'>
          <h1>CV Info Input</h1>
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
          <Work
            data={formData.work}
            onInputChange={(field, value) =>
              handleInputChange('work', field, value)
            }
          />
          <Button type='submit' onButtonClick={handleSubmit} />
        </div>
      ) : (
        <div className='display'>
          <h1>CV Info Display</h1>
          <GeneralInfoDisplay data={formData.general} />
          <EducationDisplay data={formData.education} />
          <WorkDisplay data={formData.work} />
          <Button type='edit' onButtonClick={handleEdit} />
        </div>
      )}
    </div>
  );
}

export default App;
