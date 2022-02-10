import { useEffect, useRef, useMemo } from "react";
import * as d3 from "d3";
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

export default function IconSvg({
    path,
    filePath,
    setFilePath
}) {
    const svgRef = useRef(null);
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

    
    const handleOnClick = () => {
        setFilePath(path);
    }

    useEffect(() => {
        const canvas = svgRef.current;
        const svg = d3.select(canvas)
            .data([null])
            .join("svg")
            .attr("width", 100)
            .attr("height", 100)
            .style("background", "transparent")
            .style("transform", "scale(0.3) translate(-100px,-100px)");

        d3.xml(icons[path])
        .then(data => {
            const nodes = Array.from(data.documentElement.childNodes);
            const icon = svg.selectAll(".group")
                .data([null])
                .join("g")
                .classed("g", true);

            nodes.forEach((node, ind) => {
                const nodeName = node.nodeName;
                if(nodeName === "#text") return;

                const elem = icon.selectAll(`.node${ind}`)
                .data([node])
                .join(nodeName)
                .classed(`node${ind}`, true)
                .style("fill", d => {
                    return path === filePath 
                    ? "#02E2AC"
                    : "#000000";
                });

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

        return () => {
            if (canvas) {
                while (canvas.firstChild) {
                    canvas.removeChild(canvas.firstChild);
                }
            }
        }
    }, [icons, path, filePath, setFilePath]);

    return (
        <div className="icon-svg">
            <svg
                ref={svgRef}
                onClick={handleOnClick}
            ></svg>
        </div>
    );
}
