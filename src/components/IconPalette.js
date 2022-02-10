import { ASSET_FILE_PATHS } from "../helpers/constants";
import IconSvg from "./IconSvg";

export default function IconPalette({
    title,
    filePath,
    setFilePath
}) {

    return (
        <div className="icon-palette">
            <h3 className="icon-palette__title">{title}</h3>
            <div className="display-grid-5">
            {
                ASSET_FILE_PATHS.map((path, ind) => (
                    <IconSvg
                        key={ind}
                        path={path}
                        filePath={filePath}
                        setFilePath={setFilePath}
                    />
                ))
            }
            </div>
        </div>
    );
}

