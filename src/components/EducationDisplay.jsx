
// eslint-disable-next-line react/prop-types
function EducationDisplay({ name, field, date }) {
	return (
		<div>
			<h3>School Name</h3>
			<p>{name}</p>
			<h3>Field of Study</h3>
			<p>{field}</p>
			<h3>Graduation Date</h3>
			<p>{date}</p>
		</div>
	)
}

export default EducationDisplay;