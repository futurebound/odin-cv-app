import '../styles/Input.css';

// eslint-disable-next-line react/prop-types
function Input({ label, type, value, onChange }) {
  return (
    <label>
      <span>{label}</span>
      <input type={type} value={value} onChange={onChange} />
    </label>
  );
}

export default Input;
