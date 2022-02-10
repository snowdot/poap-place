import { useState } from "react";
import { trimAddress } from "../helpers/functions";
import { RiWallet3Line } from "react-icons/ri";
import { MdLogout } from "react-icons/md";

export default function WalletBtn({
    account,
    handleLogout
}) {
    const [showMessage, setShowMessage] = useState(false);

    const handleOnMouseEnter = () => {
        setShowMessage(true);
    }

    const handleOnMouseLeave = () => {
        setShowMessage(false);
    }

    const handleOnClick = e => {
        handleLogout(e.currentTarget.value);
    }

    return (
        <div
            className={`wallet-btn ${showMessage ? "active" : ""}`}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            onClick={handleOnClick}
        >
            <button className="wallet-btn__address">
                <RiWallet3Line />
                {trimAddress(account, 4)}
                <MdLogout />
            </button>
            {
                showMessage &&
                <div className="tooltip">Click to disconnect.</div>
            }
        </div>
    );
}
