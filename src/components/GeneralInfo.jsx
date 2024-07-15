
// eslint-disable-next-line react/prop-types
function GeneralInfo({ name, email, phone }) {

	return (
		<div>
			General Info Section
			<label>
				Name
				<input type='text' value={name}/>
			</label>
			<label>
				Email
				<input type='email' value={email}/>
			</label>
			<label>
				Phone Number
				<input type='tel' value={phone}/>
			</label>
		</div>
	)
}

export default GeneralInfo;