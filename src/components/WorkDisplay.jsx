
// eslint-disable-next-line react/prop-types
function WorkDisplay({ name, position, responsibilities, startDate, endDate  }) {
	return (
		<div>
			<h1>Work Experience</h1>
			<p>Company Name: {name}</p>
			<p>Position: {position}</p>
			<p>Responsibilities: {responsibilities}</p>
			<p>Start Date: {startDate}</p>
			<p>End Date: {endDate}</p>
		</div>
	)
}

export default WorkDisplay;