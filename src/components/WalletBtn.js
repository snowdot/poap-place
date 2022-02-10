import { useState } from "react";
import { trimAddress } from "../helpers/functions";
import { RiWallet3Line } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import udIcon from "../assets/ud-logo.png";

export default function WalletBtn({
    domain,
    domainImg,
    handleLogout
}) {
    const [showMessage, setShowMessage] = useState(false);
    const domainCheck = domain?.split("").indexOf(".") !== -1;

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
                {
                    domainCheck &&
                    !domainImg &&
                    <img src={udIcon} alt="ud logo"></img>
                }
                {
                    domainCheck &&
                    domainImg &&
                    <img src={domainImg} alt="domain"></img>
                }
                {
                    !domainCheck &&
                    <RiWallet3Line />
                }
                {trimAddress(domain, 6)}
                <MdLogout />
            </button>
            {
                showMessage &&
                <div className="tooltip">Click to disconnect.</div>
            }
        </div>
    );
}
