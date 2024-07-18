/* eslint-disable react/prop-types */
import Input from './Input.jsx';

function Education({
  name,
  field,
  date,
  onSchoolChange,
  onFieldChange,
  onGraduationChange,
}) {
  return (
    <div>
      <h2>Education Experience</h2>
      <Input
        label='School Name'
        type='text'
        value={name}
        onChange={onSchoolChange}
      />
      <Input
        label='Field of Study'
        type='text'
        value={field}
        onChange={onFieldChange}
      />
      <Input
        label='Graduation Date'
        type='date'
        value={date}
        onChange={onGraduationChange}
      />
    </div>
  );
}

export default Education;
