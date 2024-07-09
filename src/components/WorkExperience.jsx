
// eslint-disable-next-line react/prop-types
function WorkExperience({ type }) {

	return (
		<div>
			{type} Experience Section
			<p>Company Name</p>
			<input type="text" />
			<p>Position</p>
			<input type="text" />
			<p>Responsibilities</p>
			<input type="text" />
			<p>Start Date</p>
			<input type="date" />
			<p>End Date</p>
			<input type="date" />
		</div>
	)
}

export default WorkExperience;