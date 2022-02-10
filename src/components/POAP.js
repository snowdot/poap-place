import { useEffect, useRef, useMemo } from "react";
import * as d3 from "d3";
import { SVG_PATHS } from "../helpers/constants";
import { createTextures, dataURLtoBlob } from "../helpers/functions";
import astronaut from "../assets/reshot-icon-astronaut-ZHUQ6FG2SL.svg";
import constellation from "../assets/reshot-icon-constellation-path-ZBCH4QR8L6.svg";
import point from "../assets/reshot-icon-path-point-vector-DZ9MF6KS2T.svg";
import planets from "../assets/reshot-icon-planets-2UQHJK4DRP.svg";
import saturn from "../assets/reshot-icon-planet-saturn-SFB7UQ3CEP.svg";
import stars from "../assets/reshot-icon-planets-stars-EHL2NPAJ4Y.svg";
import rocket from "../assets/reshot-icon-rocket-HX5DTSY4NG.svg";
import rocketStartup1 from "../assets/reshot-icon-rocket-startup-9G3KJHB8TF.svg";
import rocketStartup2 from "../assets/reshot-icon-rocket-startup-NGHXFD5MP8.svg";
import satellite from "../assets/reshot-icon-satellite-NKM576RFZS.svg";
import shuttle from "../assets/reshot-icon-shuttle-space-RM7ZTGFXNK.svg";
import alien2 from "../assets/reshot-icon-space-alien-AGNLYBKD3R.svg";
import asteroid from "../assets/reshot-icon-space-asteroid-rock-6T9FDWY3C7.svg";
import asteroid2 from "../assets/reshot-icon-space-asteroid-ZA6FNVRJGU.svg";
import galaxy from "../assets/reshot-icon-space-galaxy-7SKTPJW63C.svg";
import helmet from "../assets/reshot-icon-space-helmet-2WEN4UMAJG.svg";
import planetary from "../assets/reshot-icon-space-planetary-orbits-Y2SKXTFDJA.svg";
import planet from "../assets/reshot-icon-space-planet-R96YEB3WDN.svg";
import satellite2 from "../assets/reshot-icon-space-satellite-ULSNVF5ARY.svg";
import shipAndPlanet from "../assets/reshot-icon-spaceship-and-planet-A2KXEPYL4G.svg";
import shipAndPlanet2 from "../assets/reshot-icon-spaceship-and-planet-AEYMBZP8VT.svg";
import spaceship from "../assets/reshot-icon-space-spaceship-module-YE9BN2HMFZ.svg";
import spaceship2 from "../assets/reshot-icon-space-spaceship-ZN8BU6CD2R.svg";
import stars2 from "../assets/reshot-icon-space-stars-HC9P3RLZ4B.svg";
import weapon from "../assets/reshot-icon-space-weapon-GCSRT8J5VU.svg";
import telescope from "../assets/reshot-icon-telescope-AP7Z62QCXT.svg";
import telescope2 from "../assets/reshot-icon-telescope-YWQL2P7SBR.svg";
import certificate from "../assets/reshot-icon-certificate-EB4X2KCWDJ.svg";
import medal from "../assets/reshot-icon-medal-BLA9PK83WT.svg";
import certificate2 from "../assets/reshot-icon-certificate-SALNM45QVU.svg";
import award from "../assets/reshot-icon-award-banner-Y5SD43MG7X.svg";
import certificate3 from "../assets/reshot-icon-certificate-37T52MKPQR.svg";
import medal2 from "../assets/reshot-icon-medal-YVXC93ZKF7.svg";
import award2 from "../assets/reshot-icon-award-9T5NXYESA3.svg";
import award3 from "../assets/reshot-icon-shield-award-YB9AJRQPZT.svg";
import trophy from "../assets/reshot-icon-trophy-4DE68N5X3Y.svg";
import letter from "../assets/reshot-icon-letter-award-7ZTAK9VN8W.svg";
import trophy2 from "../assets/reshot-icon-trophy-T9BEXR75AS.svg";
import sticker from "../assets/reshot-icon-vote-sticker-YK9NJ7FL6A.svg";
import vote from "../assets/reshot-icon-giving-vote-CJB5PWTA72.svg";
import seminar from "../assets/reshot-icon-seminar-C8GKPYETLB.svg";
import debate from "../assets/reshot-icon-debate-SEBNL82FR4.svg";
import voters from "../assets/reshot-icon-voters-EBCTL837WF.svg";

export default function POAP({
    data,
    filePath,
    badgeStyle,
    text,
    setImgSize,
}) {
    const radius = 250;
    const width = 500;
    const height = 500;
    const svgRef = useRef(null);
    const imgRef = useRef(null);
    const iconRef = useRef(null);
    const icons = useMemo(() => {
        return {
            "reshot-icon-astronaut-ZHUQ6FG2SL": astronaut,
            "reshot-icon-constellation-path-ZBCH4QR8L6": constellation,
            "reshot-icon-path-point-vector-DZ9MF6KS2T": point,
            "reshot-icon-planets-2UQHJK4DRP": planets,
            "reshot-icon-planet-saturn-SFB7UQ3CEP": saturn,
            "reshot-icon-planets-stars-EHL2NPAJ4Y": stars,
            "reshot-icon-rocket-HX5DTSY4NG": rocket,
            "reshot-icon-rocket-startup-9G3KJHB8TF": rocketStartup1,
            "reshot-icon-rocket-startup-NGHXFD5MP8": rocketStartup2,
            "reshot-icon-satellite-NKM576RFZS": satellite,
            "reshot-icon-shuttle-space-RM7ZTGFXNK": shuttle,
            "reshot-icon-space-alien-AGNLYBKD3R": alien2,
            "reshot-icon-space-asteroid-rock-6T9FDWY3C7": asteroid,
            "reshot-icon-space-asteroid-ZA6FNVRJGU": asteroid2,
            "reshot-icon-space-galaxy-7SKTPJW63C": galaxy,
            "reshot-icon-space-helmet-2WEN4UMAJG": helmet,
            "reshot-icon-space-planetary-orbits-Y2SKXTFDJA": planetary,
            "reshot-icon-space-planet-R96YEB3WDN": planet,
            "reshot-icon-space-satellite-ULSNVF5ARY": satellite2,
            "reshot-icon-spaceship-and-planet-A2KXEPYL4G": shipAndPlanet,
            "reshot-icon-spaceship-and-planet-AEYMBZP8VT": shipAndPlanet2,
            "reshot-icon-space-spaceship-module-YE9BN2HMFZ": spaceship,
            "reshot-icon-space-spaceship-ZN8BU6CD2R": spaceship2,
            "reshot-icon-space-stars-HC9P3RLZ4B": stars2,
            "reshot-icon-space-weapon-GCSRT8J5VU": weapon,
            "reshot-icon-telescope-AP7Z62QCXT": telescope,
            "reshot-icon-telescope-YWQL2P7SBR": telescope2,
            "reshot-icon-certificate-EB4X2KCWDJ": certificate,
            "reshot-icon-medal-BLA9PK83WT": medal,
            "reshot-icon-certificate-SALNM45QVU": certificate2,
            "reshot-icon-award-banner-Y5SD43MG7X": award,
            "reshot-icon-certificate-37T52MKPQR": certificate3,
            "reshot-icon-medal-YVXC93ZKF7": medal2,
            "reshot-icon-award-9T5NXYESA3": award2,
            "reshot-icon-shield-award-YB9AJRQPZT": award3,
            "reshot-icon-trophy-4DE68N5X3Y": trophy,
            "reshot-icon-letter-award-7ZTAK9VN8W": letter,
            "reshot-icon-trophy-T9BEXR75AS": trophy2,
            "reshot-icon-vote-sticker-YK9NJ7FL6A": sticker,
            "reshot-icon-giving-vote-CJB5PWTA72": vote,
            "reshot-icon-seminar-C8GKPYETLB": seminar,
            "reshot-icon-debate-SEBNL82FR4": debate,
            "reshot-icon-voters-EBCTL837WF": voters
        }
    }, []);
    
    useEffect(() => {
        // Create textures
        const texturesBackground = createTextures();
        const texturesFrame = createTextures();
        const texturesBadge = createTextures();
        const texturesLogo = createTextures();
        const texturesTopText = createTextures();
        const texturesBotText = createTextures();

        const tBackground = texturesBackground[data.background.texture];
        (data.background.texture < 10 || data.background.texture > 17)
        ? tBackground
            .background(data.background.primary)
            .stroke(data.background.secondary)
        : tBackground
            .background(data.background.primary)
            .fill(data.background.secondary);

        const tFrame = texturesFrame[data.frame.texture];
        (data.frame.texture < 10 || data.frame.texture > 17)
        ? tFrame
            .background(data.frame.primary)
            .stroke(data.frame.secondary)
        : tFrame
            .background(data.frame.primary)
            .fill(data.frame.secondary);

        const tBadge = texturesBadge[data.badge.texture];
        (data.badge.texture < 10 || data.badge.texture > 17)
        ? tBadge
            .background(data.badge.primary)
            .stroke(data.badge.secondary)
        : tBadge
            .background(data.badge.primary)
            .fill(data.badge.secondary);

        const tLogo = texturesLogo[data.logo.texture];
        (data.logo.texture < 10 || data.logo.texture > 17)
        ? tLogo
            .background(data.logo.primary)
            .stroke(data.logo.secondary)
        : tLogo
            .background(data.logo.primary)
            .fill(data.logo.secondary);

        const tTopText = texturesTopText[data.topText.texture];
        (data.topText.texture < 10 || data.topText.texture > 17)
        ? tTopText
            .background(data.topText.primary)
            .stroke(data.topText.secondary)
        : tTopText
            .background(data.topText.primary)
            .fill(data.topText.secondary);

        const tBotText = texturesBotText[data.botText.texture];
        (data.botText.texture < 10 || data.botText.texture > 17)
        ? tBotText
            .background(data.botText.primary)
            .stroke(data.botText.secondary)
        : tBotText
            .background(data.botText.primary)
            .fill(data.botText.secondary);
        
        // Creation of the SVG
        const svgCanvas = svgRef.current;

        const svg = d3.select(svgCanvas)
            .data([null])
            .join("svg")
            .attr("width", width)
            .attr("height", height)
            .style("background", "transparent")
            .style("border-radius", "50%");

        svg.call(tBackground);
        svg.call(tFrame);
        svg.call(tBadge);
        svg.call(tLogo);
        svg.call(tTopText);
        svg.call(tBotText);

        svg.selectAll(".background")
            .data([null])
            .join("circle")
            .classed("background", true)
                .attr("r", radius)
                .attr("cx", width / 2)
                .attr("cy", height / 2)
                .style("fill", () => tBackground.url());

        svg.selectAll(".frame")
            .data([null])
            .join("circle")
            .classed("frame", true)
                .attr("r", radius)
                .attr("cx", width / 2)
                .attr("cy", height / 2)
                .style("fill", "transparent")
                .style("stroke-width", 160)
                .style("stroke", tFrame.url());

        svg.selectAll(".logo")
            .data([SVG_PATHS.logo.path, SVG_PATHS.logo.path])
            .join("path")
                .attr("d", d => d)
                .attr("fill-rule", "evenodd")
                .attr("clip-rule", "evenodd")
                .style("transform", function(d, i) {
                    const bbox = this.getBBox();
                    const w = bbox.width;
                    const h = bbox.height;
                    const x = (width - w) / 2;
                    const y = (height - h) / 2;
                    const moveX = x - bbox.x;
                    const moveY = y - bbox.y;
                    const s = 0.25;
                    const direction = i ? -210 : 210;
                    const transX = (1 - s) * w / 2 + moveX + 50 - direction;
                    const transY = (1 - s) * h / 2 + moveY + 25;
                    return `
                        translate(${transX}px, ${transY}px)
                        scale(${s})
                    `;
                })
                .style("fill", tLogo.url());

        svg.selectAll("#textpath-top")
            .data([null])
            .join("path")
            .attr("id", "textpath-top")
            .attr("d", getPathData(250, 500, 500, 1))
            .style("fill", "none");

        svg.selectAll("#text")
            .data([null])
            .join("text")
            .attr("id", "text")
                .append("textPath")
                .attr("xlink:href", "#textpath-top")
                .style("text-anchor","middle")
                .attr("startOffset", "50.5%")
                .text(text.topText)
                .style("fill", tTopText.url())
                .style("font-size", 50)
                .style("font-weight", 400)
                .style("font-family", "sans-serif")
                .style("letter-spacing", 0)
                .style("stroke-width", 1)
                .style("stroke", tTopText.url());

        svg.selectAll("#textpath-bot")
            .data([null])
            .join("path")
            .attr("id", "textpath-bot")
            .attr("d", getPathData(250, 500, 500, 0))
            .style("fill", "none");

        svg.selectAll("#text")
            .data([null])
            .join("text")
            .attr("id", "text")
                .append("textPath")
                .attr("xlink:href", "#textpath-bot")
                .style("text-anchor","middle")
                .style("alignment-baseline","hanging")
                .attr("startOffset", "50.5%")
                .text(text.botText)
                .style("fill", tBotText.url())
                .style("font-size", 46)
                .style("font-weight", 400)
                .style("font-family", "sans-serif")
                .style("letter-spacing", 0)
                .style("stroke-width", 1)
                .style("stroke", tBotText.url());

        async function drawIcon() {
            await d3.xml(icons[filePath])
            .then(data => {
                const nodes = Array.from(data.documentElement.childNodes);
                const badge = svg.selectAll(".badge")
                .data([null])
                .join("g")
                .classed("g", true)
                .style("transform", "scale(2) translate(75px,75px)")
    
                nodes.forEach((node, ind) => {
                    const nodeName = node.nodeName;
                    if(nodeName === "#text") return;
    
                    const elem = badge.selectAll(`.node${ind}`)
                    .data([node])
                    .join(nodeName)
                    .classed(`node${ind}`, true);
    
                    if(badgeStyle === "fill") {
                        elem
                            .style("fill", tBadge.url());
                    } else {
                        elem
                            .style("fill", "transparent")
                            .style("stroke", tBadge.url())
                            .style("stroke-width", 1)
                            .style("stroke-miterlimit", 3)
                            .style("stroke-linecap", "round")
                            .style("stroke-linejoin", "round");
                    }
    
                    if(nodeName === "path") {
                        elem
                            .attr("d", node.getAttribute("d"));
                    }
    
                    if(nodeName === "circle") {
                        elem
                            .attr("cx", node.getAttribute("cx"))
                            .attr("cy", node.getAttribute("cy"))
                            .attr("r", node.getAttribute("r"));
                    }
                });
            });
        }

        drawIcon();

        function getPathData(r, w, h, d) {
            const radius = r * 0.75;
            const startX = w / 2 - radius;
            return `m${startX},${h / 2} a${radius},${radius} 0 0 ${d} ${2 * radius},0`;
        }

        return () => {
            if (svgCanvas) {
                while (svgCanvas.firstChild) {
                    svgCanvas.removeChild(svgCanvas.firstChild);
                }
            }
        }

    }, [data, text, filePath, badgeStyle, icons]);

    useEffect(() => {
        // Get SVG data
        const svgCanvas = svgRef.current;
        let svgData;
        if (typeof window.XMLSerializer != "undefined") {
            svgData = (new XMLSerializer()).serializeToString(svgCanvas);
        } else if (typeof svgCanvas.xml != "undefined") {
            svgData = svgCanvas.xml;
        }

        // Creation of the Canvas for Image
        const imgCanvas = imgRef.current;
        imgCanvas.width = width;
        imgCanvas.height = height;
        const ctxImg = imgCanvas.getContext("2d");
        const img = document.createElement("img");
        img.setAttribute("src", "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData))));
        
        // Creation of the Canvas for Icon
        const iconCanvas = iconRef.current;
        iconCanvas.width = width;
        iconCanvas.height = height;
        const ctxIcon = iconCanvas.getContext("2d");
        const icon = document.createElement("img");
        icon.setAttribute("src", icons[filePath]);

        img.onload = function() {
            ctxImg.drawImage(img, 0, 0);
            const imgsrc = imgCanvas.toDataURL("image/png");
            const file = dataURLtoBlob(imgsrc);
            const size = file.size;

            const sizeKBImg = size / 1000;

            icon.onload = function() {
                ctxIcon.drawImage(icon, 0, 0);
                const iconsrc = iconCanvas.toDataURL("image/png");
                const file = dataURLtoBlob(iconsrc);
                const size = file.size;
    
                const sizeKBIcon = size / 1000;
                setImgSize(parseFloat(sizeKBImg + sizeKBIcon).toFixed(4));
            };
        };
    }, [data, text, filePath, badgeStyle, icons, setImgSize]);

    return (
        <div className="canvas">
            <svg className="poap" ref={svgRef}></svg>
            <canvas className="image" ref={imgRef}></canvas>
            <canvas className="image" ref={iconRef}></canvas>
        </div>
    );
}
