import './Input.scss'

const Input = ({ id, name, label, value, onChange }) => {
  return (
    <div className="Input">
      <label htmlFor={id}>{label}</label>
      <input type="text" name={name} id={id} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
