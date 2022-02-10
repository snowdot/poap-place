export default function StyleSelect({
    badgeStyle,
    setBadgeStyle,
}) {

    const handleOnClick = e => {
        setBadgeStyle(e.currentTarget.value);
    }

  return (
        <div className="style-select">
            <h3 className="style-select__title">Badge Style</h3>
            <div>
                <button
                    className={`style-select__button ${badgeStyle === "fill" ? "active" : ""}`}
                    value="fill"
                    onClick={handleOnClick}
                >Fill</button>
                <button
                    className={`style-select__button ${badgeStyle === "stroke" ? "active" : ""}`}
                    value="stroke"
                    onClick={handleOnClick}
                >Stroke</button>
            </div>
        </div>
    );
}
