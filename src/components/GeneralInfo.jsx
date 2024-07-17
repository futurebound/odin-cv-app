/* eslint-disable react/prop-types */
import Input from './Input.jsx';

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
      General Info Section
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
  );
}

export default GeneralInfo;
