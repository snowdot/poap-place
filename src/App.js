import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Modal from "./components/Modal";
import POAP from "./components/POAP";
import { DEFAULT_VALUES } from "./helpers/constants";
import ColorPalette from "./components/ColorPalette";
import TexturePalette from "./components/TexturePalette";
import TextInput from "./components/TextInput";
import IconPalette from "./components/IconPalette";
import StyleSelect from "./components/StyleSelect";
import CreateEventBtn from "./components/CreateEventBtn";
import DownloadBtn from "./components/DownloadBtn";
import SaveBtn from "./components/SaveBtn";
import Loading from "./components/Loading";
import LoginBtn from "./components/LoginBtn";
import WalletBtn from "./components/WalletBtn";

function App() {
    const [data, setData] = useState(DEFAULT_VALUES.data);
    const [filePath, setFilePath] = useState(DEFAULT_VALUES.filePath);
    const [badgeStyle, setBadgeStyle] = useState(DEFAULT_VALUES.badgeStyle);
    const [property, setProperty] = useState("background");
    const [text, setText] = useState({
        topText: "",
        botText: ""
    });
    const [imgSize, setImgSize] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [isTemplate, setIsTemplate] = useState(false);
    const [account, setAccount] = useState(null);
    const provider = window.ethereum;

    // ~~~ Check for template ~~~
    useEffect(() => {
        if(!account) return;

        axios
            .get(`https://poap.moonlabs.xyz/api/get_template?address=${account.toLowerCase()}`)
            .then(res => {
                const template = JSON.parse(res.data.data.attributes);
                if(template.data) {
                    setData(template.data);
                    setFilePath(template.filePath);
                    setBadgeStyle(template.badgeStyle);
                    setIsTemplate(true);
                }
            })
            .catch(err => {
                console.error(err.message);
            });
    }, [account]);

    const handleLogin = async () => {
        if (provider) {
            try {
                const res = await provider.request({
                    method: 'eth_requestAccounts',
                });
                setAccount(res[0]);
            } catch (error) {
                alert("Something went wrong. Please try again!");
            }
        } else {
            alert("Please install the MetaMask extension!");
        }
    }

    const handleLogout = async () => {
        setAccount(null);
        setData(DEFAULT_VALUES.data);
        setFilePath(DEFAULT_VALUES.filePath);
        setBadgeStyle(DEFAULT_VALUES.badgeStyle);
    }

    const handleOnClick = e => {
        setProperty(e.currentTarget.value);
    }

    if(!data.background) return (
        <Loading />
    );

    return (
        <main>
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
            />
            <nav>
                <div className="nav-links">
                {
                    Object.keys(data).map((elem, ind) => (
                        <button
                            key={ind}
                            className={`nav-btn ${elem === property ? "active" : ""}`}
                            value={elem}
                            onClick={handleOnClick}
                        >{elem}</button>
                    ))
                }
                </div>
                {
                    account &&
                    <WalletBtn
                        account={account}
                        handleLogout={handleLogout}
                    />
                }
                {
                    !account &&
                    <div className="login-btns">
                        <LoginBtn
                            label="Connect with MM"
                            handleLogin={handleLogin}
                        />
                    </div>
                }
            </nav>
            <section className="container">
                <div className="container__left">
                    <ColorPalette
                        data={data}
                        setData={setData}
                        title="PRIMARY"
                        property={property}
                        attribute="primary"
                    />
                    <hr></hr>
                    <ColorPalette
                        data={data}
                        setData={setData}
                        title="SECONDARY"
                        property={property}
                        attribute="secondary"
                    />
                    <hr></hr>
                    <TexturePalette
                        data={data}
                        setData={setData}
                        title="TEXTURE"
                        property={property}
                        attribute="texture"
                    />
                    <hr></hr>
                </div>
                <div className="container__middle">
                    <POAP
                        data={data}
                        text={text}
                        badgeStyle={badgeStyle}
                        filePath={filePath}
                        setImgSize={setImgSize}
                    />
                </div>
                <div className="container__right">
                    <div>
                        <TextInput
                            title="Top Text"
                            placeholder=""
                            text={text}
                            setText={setText}
                            property="topText"
                        />
                        <hr></hr>
                        <TextInput
                            title="Bottom Text"
                            placeholder=""
                            text={text}
                            setText={setText}
                            property="botText"
                        />
                        <hr></hr>
                        <IconPalette
                            title="Badge"
                            filePath={filePath}
                            setFilePath={setFilePath}
                            setBadgeStyle={setBadgeStyle}
                        />
                        <hr></hr>
                        <StyleSelect
                            title="Badge style"
                            badgeStyle={badgeStyle}
                            setBadgeStyle={setBadgeStyle}
                        />
                        <hr></hr>
                        <div className="container__right__checks">
                            <h3>Size check</h3>
                            <div>{imgSize} KB</div>
                        </div>
                        <hr></hr>
                    </div>
                    <div>
                        <SaveBtn
                            disabled={!Boolean(account)}
                            account={account}
                            data={data}
                            filePath={filePath}
                            badgeStyle={badgeStyle}
                            isTemplate={isTemplate}
                            setIsTemplate={setIsTemplate}
                        />
                        <CreateEventBtn
                            imgSize={imgSize}
                            setShowModal={setShowModal}
                        />
                        <DownloadBtn />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
