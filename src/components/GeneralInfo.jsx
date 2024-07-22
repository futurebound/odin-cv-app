/* eslint-disable react/prop-types */
import Input from './Input.jsx';
import '../styles/GeneralInfo.css';

function GeneralInfo({ data, onInputChange }) {
  return (
    <div className='general-input'>
      <h2>General Info Section</h2>
      <div className='info-input'>
        <Input
          label='Name'
          type='text'
          placeholder='School Name'
          value={data.name}
          onChange={(e) => onInputChange('name', e.target.value)}
        />
        <Input
          label='Email'
          type='email'
          placeholder='youremail@email.com'
          value={data.email}
          onChange={(e) => onInputChange('email', e.target.value)}
        />
        <Input
          label='Phone Number'
          type='tel'
          placeholder='(888)888-8888'
          value={data.phone}
          onChange={(e) => onInputChange('phone', e.target.value)}
        />
      </div>
    </div>
  );
}

export default GeneralInfo;
