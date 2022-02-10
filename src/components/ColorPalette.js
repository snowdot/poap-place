import { PALETTE } from "../helpers/constants";

export default function ColorPalette({
    title,
    property,
    attribute,
    data,
    setData
}) {
    const colors = Object.keys(PALETTE);

    const handleOnClick = e => {
        setData({
            ...data,
            [property]: {
                ...data[property],
                [attribute]: e.currentTarget.value
            }
        });
    }

    return (
        <div className="color-palette">
            <h3 className="color-palette__title">{title}</h3>
            {
                colors.map((elem, ind) => (
                    <div
                        key={ind}
                        className="color-palette__buttons"
                    >
                        {
                            PALETTE[elem].map((elem, ind) => (
                                <button
                                    key={ind}
                                    value={elem.hex}
                                    className="color-palette__button"
                                    style={{background: `${elem.hex}`}}
                                    onClick={handleOnClick}
                                ></button>
                            ))
                        }
                    </div>
                ))
            }
            <div
                className="color-palette__current"
                style={{background: `${data[property][attribute]}`}}
            ></div>
        </div>
    );
}
