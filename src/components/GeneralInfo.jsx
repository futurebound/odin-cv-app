
// eslint-disable-next-line react/prop-types
function GeneralInfo({ name, email, phone, handleNameChange, handleEmailChange, handlePhoneChange }) {

	return (
		<div>
			General Info Section
			<label>
				Name
				<input type='text' value={name} onChange={handleNameChange}/>
			</label>
			<label>
				Email
				<input type='email' value={email} onChange={handleEmailChange}/>
			</label>
			<label>
				Phone Number
				<input type='tel' value={phone} onChange={handlePhoneChange}/>
			</label>
		</div>
	)
}

export default GeneralInfo;