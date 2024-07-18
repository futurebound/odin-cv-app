/* eslint-disable react/prop-types */
import Input from './Input.jsx';
import '../styles/GeneralInfo.css';

function GeneralInfo({
  name,
  email,
  phone,
  onNameChange,
  onEmailChange,
  onPhoneChange,
}) {
  return (
    <div>
      <h2>General Info Section</h2>
      <div className='info-input'>
        <Input label='Name' type='text' value={name} onChange={onNameChange} />
        <Input
          label='Email'
          type='email'
          value={email}
          onChange={onEmailChange}
        />
        <Input
          label='Phone Number'
          type='tel'
          value={phone}
          onChange={onPhoneChange}
        />
      </div>
    </div>
  );
}

export default GeneralInfo;
