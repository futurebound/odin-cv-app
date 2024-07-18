/* eslint-disable react/prop-types */
import Input from './Input.jsx';

function WorkExperience({
  name,
  position,
  responsibilities,
  startDate,
  endDate,
  onNameChange,
  onPositionChange,
  onResponsibilitiesChange,
  onStartChange,
  onEndChange,
}) {
  return (
    <div>
      <h2>Work Experience Section</h2>
      <div className='info-input'>
        <Input
          label='Company name'
          type='text'
          value={name}
          onChange={onNameChange}
        />
        <Input
          label='Position'
          type='text'
          value={position}
          onChange={onPositionChange}
        />
        <Input
          label='Responsibilities'
          type='text'
          value={responsibilities}
          onChange={onResponsibilitiesChange}
        />
        <Input
          label='Start Date'
          type='date'
          value={startDate}
          onChange={onStartChange}
        />
        <Input
          label='End Date'
          type='date'
          value={endDate}
          onChange={onEndChange}
        />
      </div>
    </div>
  );
}

export default WorkExperience;
