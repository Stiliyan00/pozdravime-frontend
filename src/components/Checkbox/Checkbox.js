import './Checkbox.scss'

const Checkbox = ({ id, name, label, value, onChange }) => {
  return (
    <div className="Checkbox">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
