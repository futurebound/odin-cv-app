
// eslint-disable-next-line react/prop-types
function Button({ type, onButtonClick }) {

	return (
		<button onClick={onButtonClick}>
			{type}
		</button>
	)
}

export default Button;