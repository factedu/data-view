import React, { useState, useCallback, useEffect } from 'react'
import { csv, arc, pie } from 'd3'

const csvUrl = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv';

const width = document.body.clientWidth;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const pieArc = arc()
    .innerRadius(0)
    .outerRadius(width)

function D3One() {
    const [data, setData] = useState(null);
    useEffect(() => {
        csv(csvUrl).then(res => {
            console.log(res[0])
            return setData(res);
        })
    }, []);
    if (!data) {
        return <pre>Loading....</pre>
    }

    const colorPie = pie().value(1);

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${centerX},${centerY})`}>
                {
                    // data.map((d,i)=>{
                    //     return (
                    //         <path fill={d['RGB hex value']} d={pieArc({
                    //             startAngle:i/data.length*2*Math.PI,
                    //             endAngle: (i+1) / data.length * 2 * Math.PI
                    //         })} />
                    //     )
                    // })
                    colorPie(data).map((d,i) => {
                        return (
                            <path key={i+d.data['RGB hex value']} fill={d.data['RGB hex value']} d={pieArc(d)} />
                        )
                    })
                }
            </g>
        </svg>
    )
}

export default D3One
