import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { generate6DigitRandomNum, dataURLtoBlob } from "../helpers/functions";
import axios from "axios";
import Loading from "./Loading";

export default function List({
    setShowModal
}) {
    const [state, setState] = useState({
        loading: false,
        error: "",
        message: ""
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const formRef = useRef(null);
    const [editCode, setEditCode] = useState(generate6DigitRandomNum());

    const onSubmit = async (data) => {
        setState({
            loading: true,
            error: "",
            message: ""
        });
        data.event_template_id = 0;
        data.secret_code = editCode;
        data.year = new Date().getFullYear();

        let svg = document.body.getElementsByClassName("poap")[0];
        let svgData;

        if (typeof window.XMLSerializer != "undefined") {
            svgData = (new XMLSerializer()).serializeToString(svg);
        } else if (typeof svg.xml != "undefined") {
            svgData = svg.xml;
        }
    
        const canvas = document.createElement("canvas");
        const svgSize = svg.getBoundingClientRect();
        canvas.width = svgSize.width;
        canvas.height = svgSize.height;
        const ctx = canvas.getContext("2d");

        const img = document.createElement("img");
        img.setAttribute("src", "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData))));

        img.onload = function() {
            ctx.drawImage(img, 0, 0);
            const imgsrc = canvas.toDataURL("image/png");
            const file = dataURLtoBlob(imgsrc);
            data.image = file;

            let form = new FormData();
            form.append("image", data.image);
            form.append("name", data.name.toString());
            form.append("description", data.description.toString());
            form.append("start_date", data.start_date.toString());
            form.append("end_date", data.end_date.toString());
            form.append("expiry_date", data.expiry_date.toString());
            form.append("year", data.year.toString());
            form.append("city", data.city.toString());
            form.append("country", data.country.toString());
            form.append("event_url", data.event_url.toString());
            form.append("secret_code", data.secret_code.toString());
            form.append("email", data.email.toString());
            form.append("requested_codes", data.requested_codes.toString());
            form.append("virtual_event", data.virtual_event.toString());
            form.append("private_event", data.private_event.toString());

            const config = {
                method: "post",
                url: "https://api.poap.xyz/events",
                 headers: { "Content-Type": "multipart/form-data" },
                data: form
            };

            axios(config)
                .then(res => {
                    if(res.status === 200) {
                        setState({
                            loading: false,
                            error: "",
                            message: "The event was created!"
                        });
                    }
                })
                .catch(err => {
                    setState({
                        loading: false,
                        error: err.message,
                        message: ""
                    });
                })
                .finally(() => {
                    setTimeout(() => {
                        // Reset state and form
                        setState({
                            loading: false,
                            error: "",
                            message: ""
                        });
                        formRef.current.reset();
                        setEditCode(generate6DigitRandomNum());
                    }, 2000);
                });
        };
    }

    const handleOnClick = e => {
        setShowModal(false);
    }

    if(state.loading) return (
        <Loading />
    );

    if(state.error) return (
        <div className="error-form-message error">
            <div><strong>Error:</strong> {state.error}</div>
            <div>Make sure that the name is unique.</div>
        </div>
    );

    if(state.message) return (
        <div className="success-message success">
            <div><strong>Success:</strong> {state.message}</div>
            <div>Please check your email for details!</div>
        </div>
    );

    return (
        <form
            ref={formRef}
            className="form"
            onSubmit={handleSubmit(onSubmit)}
        >
                <div>
                    <h2>Create Event</h2>
                    <button
                        className="form__close-btn"
                        onClick={handleOnClick}
                    >x</button>
                    <div className="form__field">
                        <label>Name of the POAP*</label>
                        <div className={`form__field__input ${errors.name ? "error-form-message" : ""}`}>
                            <input
                                className="input"
                                type="text"
                                autoComplete="off"
                                {...register("name", { required: true, maxLength: 100 })}
                            />
                        </div>
                        {errors.name && errors.name.type === "required" && <p className="error-form-message">Name is required.</p>}
                        {errors.name && errors.name.type === "maxLength" && <p className="error-form-message">Max length exceeded.</p>}
                    </div>
                    <div className="form__field">
                        <label>Description*</label>
                        <div className={`form__field__input ${errors.description ? "error-form-message" : ""}`}>
                            <input
                                className="input"
                                type="text"
                                autoComplete="off"
                                {...register("description", { required: true, maxLength: 500 })}
                            />
                        </div>
                        {errors.description && errors.description.type === "required" && <p className="error-form-message">Description is required.</p>}
                        {errors.description && errors.description.type === "maxLength" && <p className="error-form-message">Max length exceeded.</p>}
                    </div>
                    <div className="display-grid-2">
                        <div className="form__field">
                            <div className={`form__field__input ${errors.virtual_event ? "error-form-message" : ""}`}>
                                <label className="label-checkmark">Virtual event
                                    <input
                                        className="input"
                                        type="checkbox"
                                        {...register("virtual_event", { required: false })}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className="form__field">
                            <div className={`form__field__input ${errors.private_event ? "error-form-message" : ""}`}>
                                <label className="label-checkmark">Private event
                                    <input
                                        className="input"
                                        type="checkbox"
                                        {...register("private_event", { required: false })}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="display-grid-2">
                        <div className="form__field">
                            <label>City</label>
                            <div className={`form__field__input ${errors.city ? "error-form-message" : ""}`}>
                                <input
                                    className="input"
                                    type="text"
                                    autoComplete="off"
                                    {...register("city", { required: false, maxLength: 100 })}
                                />
                            </div>
                            {errors.city && errors.city.type === "maxLength" && <p className="error-form-message">Max length exceeded.</p>}
                        </div>
                        <div className="form__field">
                            <label>Country</label>
                            <div className={`form__field__input ${errors.country ? "error-form-message" : ""}`}>
                                <input
                                    className="input"
                                    type="text"
                                    autoComplete="off"
                                    {...register("country", { required: false, maxLength: 100 })}
                                />
                            </div>
                            {errors.country && errors.country.type === "maxLength" && <p className="error-form-message">Max length exceeded.</p>}
                        </div>
                    </div>
                    <div className="display-grid-3">
                        <div className="form__field">
                            <label>Start date*</label>
                            <div className={`form__field__input ${errors.start_date ? "error-form-message" : ""}`}>
                                <input
                                    className="input"
                                    type="date"
                                    {...register("start_date", { required: true} )}
                                />
                                {errors.start_date && errors.start_date.type === "required" && <p className="error-form-message">Start date is required.</p>}
                            </div>
                        </div>
                        <div className="form__field">
                            <label>End date*</label>
                            <div className={`form__field__input ${errors.end_date ? "error-form-message" : ""}`}>
                                <input
                                    className="input"
                                    type="date"
                                    {...register("end_date", { required: true })}
                                />
                                {errors.end_date && errors.end_date.type === "required" && <p className="error-form-message">End date is required.</p>}
                            </div>
                        </div>
                        <div className="form__field">
                            <label>Expiry date*</label>
                            <div className={`form__field__input ${errors.expiry_date ? "error-form-message" : ""}`}>
                                <input
                                    className="input"
                                    type="date"
                                    {...register("expiry_date", { required: true })}
                                />
                                {errors.expiry_date && errors.expiry_date.type === "required" && <p className="error-form-message">Expiry date is required.</p>}
                            </div>
                        </div>
                    </div>
                    <div className="display-grid-2">
                        <div className="form__field">
                            <label>Website</label>
                            <div className={`form__field__input ${errors.event_url ? "error-form-message" : ""}`}>
                                <input
                                    className="input"
                                    type="text"
                                    {...register("event_url", { required: false })}
                                />
                            </div>
                        </div>
                        <div className="form__field">
                            <label>Template</label>
                            <div className={`form__field__input ${errors.event_template_id ? "error-form-message" : ""}`}>
                                <input
                                    className="input"
                                    type="number"
                                    {...register("event_template_id", { required: false })}
                                    placeholder="Standard Template"
                                    disabled={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="display-grid-2">
                        <div className="form__field">
                            <label>Email*</label>
                            <div className={`form__field__input ${errors.email ? "error-form-message" : ""}`}>
                                <input
                                    className="input"
                                    type="text"
                                    autoComplete="off"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && errors.email.type === "required" && <p className="error-form-message">Email is required.</p>}
                            </div>
                        </div>
                        <div className="form__field">
                            <label>Edit code*</label>
                            <div className={`form__field__input ${errors.secret_code ? "error-form-message" : ""}`}>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder={editCode}
                                    disabled={true}
                                    {...register("secret_code", { required: false })}
                                />
                                {errors.secret_code && errors.secret_code.type === "required" && <p className="error-form-message">Edit code is required.</p>}
                            </div>
                        </div>

                    </div>
                    <div className="form__field">
                        <label>Amount of links*</label>
                        <div className={`form__field__input ${errors.requested_codes ? "error-form-message" : ""}`}>
                            <input
                                className="input"
                                type="number"
                                autoComplete="off"
                                {...register("requested_codes", { required: true })}
                            />
                            {errors.requested_codes && errors.requested_codes.type === "required" && <p className="error-form-message">Amount of links is required.</p>}
                        </div>
                    </div>
                    <input className="action-btn" type="submit" />
                </div>
      </form>
    );
}
