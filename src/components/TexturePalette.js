import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { createTextures } from "../helpers/functions";

export default function TexturePalette({
    data,
    setData,
    title,
    property,
    attribute,
}) {
    const radius = 15;
    const width = 200;
    const height = 245;
    const svgRef = useRef(null);

    useEffect(() => {
        const textures = createTextures();

        const canvas = svgRef.current;
        const svg = d3.select(canvas)
            .data([null])
            .join("svg")
            .attr("width", width)
            .attr("height", height)
            .style("background", "transparent");

        svg.selectAll(".texture")
            .data(textures)
            .join("circle")
            .classed("texture", true)
                .attr("r", radius)
                .attr("cx", (d, i) => {
                    return (i % 5) * 40 + 22.5;
                })
                .attr("cy", (d, i) => {
                    return Math.trunc(i / 5) * 40 + 20;       
                })
                .style("fill", (d, i) => {
                    const t = textures[i]
                        .background("#ffffff")
                        .stroke("#000000");
                    svg.call(t);
                    return t.url();
                })
                .style("cursor", "pointer")
                .on("click", function(e, d) {
                    setData({
                        ...data,
                        [property]: {
                            ...data[property],
                            [attribute]: textures.indexOf(d)
                        }
                    });
                });
        
        svg.selectAll(".current")
            .data([null])
            .join("rect")
            .classed("current", true)
                .attr("x", 0)
                .attr("y", 215)
                .attr("rx", 6)
                .attr("width", 200)
                .attr("height", 30)
                .style("fill", () => {
                    const t = textures[data[property][attribute]]
                        .background("#ffffff")
                        .stroke("#000000");
                    svg.call(t);
                    return t.url();
                });

        return () => {
            if (canvas) {
                while (canvas.firstChild) {
                    canvas.removeChild(canvas.firstChild);
                }
            }
        }

    }, [data, setData, property, attribute]);

    return (
        <div className="texture-palette">
            <h3 className="texture-palette__title">{title}</h3>
            <svg ref={svgRef}></svg>
        </div>
    );
}
