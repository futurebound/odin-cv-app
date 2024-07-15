
// eslint-disable-next-line react/prop-types
function Education({ name, field, date, handleSchoolChange, handleFieldChange, handleGraduationChange }) {

	return (
		<div>
			Education Experience Section
			<h3>School Name</h3>
			<input type="text" value={name} onChange={handleSchoolChange} />
			<h3>Field of Study</h3>
			<input type="text" value={field} onChange={handleFieldChange} />
			<h3>Graduation Date</h3>
			<input type="date" value={date} onChange={handleGraduationChange} />
		</div>
	)
}

export default Education;