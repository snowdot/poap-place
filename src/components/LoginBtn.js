import mmIcon from "../assets/mm-logo.png";

export default function LoginBtn({ label, handleLogin }) {

    const handleOnClick = e => {
        handleLogin(e.currentTarget.value);
    }

    return (
        <button
            className="login-btn"
            onClick={handleOnClick}
        >
            <img src={mmIcon} alt="mm icon"></img>
            {label}     
        </button>
    );
}
