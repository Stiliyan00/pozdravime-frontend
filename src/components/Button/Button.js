import './Button.scss';

const Button = ({ label, onClick }) => {
    return <button className="Button" onClick={onClick}>{label}</button>
};

export default Button;