import udIcon from "../assets/ud-logo.png";
import mmIcon from "../assets/mm-logo.png";

export default function LoginBtn({ value, label, handleLogin }) {

    const handleOnClick = e => {
        handleLogin(e.currentTarget.value);
    }

    return (
        <button
            className="login-btn"
            onClick={handleOnClick}
            value={value}
        >
            {
                value === "ud" &&
                <img src={udIcon} alt="ud icon"></img>
            }            
            {
                value === "mm" &&
                <img src={mmIcon} alt="mm icon"></img>
            }
            {label}     
        </button>
    );
}
