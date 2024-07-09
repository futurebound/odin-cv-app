
// eslint-disable-next-line react/prop-types
function GeneralInfo({ name, type }) {

	return (
		<div>
			{name} General Info Section
			<input type={type} />
		</div>
	)
}

export default GeneralInfo;