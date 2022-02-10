import { v4 as uuidv4 } from "uuid";

export default function DownloadBtn() {

    const handleOnClick = () => {
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
            const a = document.createElement("a");
            a.download = `POAP-${uuidv4()}.png`;
            a.href = imgsrc;
            a.click();
        };
    }

    return (
        <button
            className="download-btn action-btn"
            onClick={handleOnClick}
        >
            Download PNG
        </button>
    );
}
