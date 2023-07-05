import './TextArea.scss'

const TextArea = ({ id, name, label, value, onChange }) => {
  return (
    <div className="TextArea">
      <label htmlFor={id}>{label}</label>
      <textarea rows="7" cols="60"  name={name} id={id} value={value} onChange={onChange} />
    </div>
  );
};

export default TextArea;
