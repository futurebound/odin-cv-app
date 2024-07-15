
// eslint-disable-next-line react/prop-types
function Education({ name, field, date }) {

	return (
		<div>
			Education Experience Section
			<p>School Name</p>
			<input type="text" value={name} />
			<p>Field of Study</p>
			<input type="text" value={field} />
			<p>Graduation Date</p>
			<input type="date" value={date} />
		</div>
	)
}

export default Education;