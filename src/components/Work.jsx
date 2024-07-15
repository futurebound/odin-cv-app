
// eslint-disable-next-line react/prop-types
function WorkExperience({ name, position, responsibilities, startDate, endDate, onNameChange, onPositionChange, onResponsibilitiesChange, onStartChange, onEndChange }) {

	return (
		<div>
			Work Experience Section
			<h3>Company Name</h3>
			<input type="text" value={name} onChange={onNameChange}/>
			<h3>Position</h3>
			<input type="text" value={position} onChange={onPositionChange}/>
			<h3>Responsibilities</h3>
			<input type="text" value={responsibilities} onChange={onResponsibilitiesChange} />
			<h3>Start Date</h3>
			<input type="date" value={startDate} onChange={onStartChange} />
			<h3>End Date</h3>
			<input type="date" value={endDate} onChange={onEndChange} />
		</div>
	)
}

export default WorkExperience;