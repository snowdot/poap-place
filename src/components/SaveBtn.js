import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";

export default function SaveBtn({
    disabled,
    account,
    data,
    filePath,
    badgeStyle,
    isTemplate,
    setIsTemplate
}) {
    const [state, setState] = useState({
        loading: false,
        error: "",
        message: ""
    });

    const handleOnClick = e => {
        setState({
            loading: true,
            error: "",
            message: ""
        });

        const template = {
            data: data,
            filePath: filePath,
            badgeStyle: badgeStyle,
        }

        let form = new FormData();
        form.append("attributes", JSON.stringify(template));
        form.append("address", account.toLowerCase());

        const config = {
            method: "post",
            url: "https://poap.moonlabs.xyz/api/template",
            headers: { "Content-Type": "multipart/form-data" },
            data: form
        };

        axios(config)
            .then(res => {
                if (res.status === 200) {
                    setState({
                        loading: false,
                        error: "",
                        message: "Success!"
                    });
                    setIsTemplate(true);
                }
            })
            .catch(err => {
                setState({
                    loading: false,
                    error: "Error!",
                    message: ""
                });
            })
            .finally(() => {
                setTimeout(() => {
                    setState({
                        loading: false,
                        error: "",
                        message: ""
                    });
                }, 2000);
            });
    }

    if (state.loading) return (
        <button className="action-btn" disabled={true}>
            <Loading />
        </button>
    );

    if (state.error) return (
        <button className="action-btn" disabled={true}>
            <div className="error">{state.error}</div>
        </button>
    );

    if (state.message) return (
        <button className="action-btn" disabled={true}>
            <div className="success">{state.message}</div>
        </button>
    );

    return (
        <button
            className="save-btn action-btn"
            onClick={handleOnClick}
            disabled={disabled}
        >
            {(account && isTemplate) ? "Update template" : "Save template"}
        </button>
    );
}
