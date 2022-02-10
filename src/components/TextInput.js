export default function TextInput({
    title,
    placeholder,
    text,
    setText,
    property
}) {

    const handleOnChange = e => {
        setText({
            ...text,
            [property]: e.currentTarget.value
        });
    }

    return (
        <div className="text-input">
            <h3 className="text-input__title">{title}</h3>
            <input
                placeholder={placeholder}
                autoComplete="off"
                type="text"
                value={text[property]}
                onChange={handleOnChange}
            >
            </input>
        </div>
    );
}
