/* eslint-disable react/prop-types */
import Input from './Input.jsx';

function Education({ data, onInputChange }) {
  return (
    <div>
      <h2>Education Experience</h2>
      <div className='info-input'>
        <Input
          label='School Name'
          type='text'
          placeholder='School Name'
          value={data.name}
          onChange={(e) => onInputChange('schoolName', e.target.value)}
        />
        <Input
          label='Field of Study'
          type='text'
          placeholder='Field of Study'
          value={data.field}
          onChange={(e) => onInputChange('field', e.target.value)}
        />
        <Input
          label='Graduation Date'
          type='date'
          placeholder=''
          value={data.date}
          onChange={(e) => onInputChange('graduationDate', e.target.value)}
        />
      </div>
    </div>
  );
}

export default Education;
