/* eslint-disable react/prop-types */
import Input from './Input.jsx';

function WorkExperience({ data, onInputChange }) {
  return (
    <div>
      <h2>Work Experience Section</h2>
      <div className='info-input'>
        <Input
          label='Company name'
          type='text'
          value={data.companyName}
          onChange={(e) => onInputChange('companyName', e.target.value)}
        />
        <Input
          label='Position'
          type='text'
          value={data.position}
          onChange={(e) => onInputChange('position', e.target.value)}
        />
        <Input
          label='Responsibilities'
          type='text'
          value={data.responsibilities}
          onChange={(e) => onInputChange('responsibilities', e.target.value)}
        />
        <Input
          label='Start Date'
          type='date'
          value={data.startDate}
          onChange={(e) => onInputChange('startDate', e.target.value)}
        />
        <Input
          label='End Date'
          type='date'
          value={data.endDate}
          onChange={(e) => onInputChange('endDate', e.target.value)}
        />
      </div>
    </div>
  );
}

export default WorkExperience;
