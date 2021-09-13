import React, { useState, useEffect } from 'react'
import { csv, max, scaleBand, scaleLinear } from 'd3'

const csvUrl = "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv";

const width = 960;
const height = 500;
const margin = { top: 20, right: 20, bottom: 20, left: 200 };
const innerHeight = height - margin.top - margin.bottom;

const innerWidth = width - margin.left - margin.right;

function WithAxisBarChart() {
    const [data, setData] = useState();
    useEffect(() => {
        const row = d => {
            d.Population = +d['2020'];
            return d;
        }
        csv(csvUrl, row).then(data => {
            setData(data.slice(0, 20))
        });
    }, [])


    if (!data) {
        return (
            <div>
                Loading Data..
            </div>
        )
    }
    const yScale = scaleBand()
        .domain(data.map(d => d.Country))
        .range([0, innerHeight]);

    const xScale = scaleLinear()
        .domain([0, max(data, d => d.Population)])
        .range([0, innerWidth]);




    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left},${margin.top})`}>
                {xScale.ticks().map(tickValue => (
                    <g key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
                        <line
                            x1={0}
                            y1={0}
                            x2={0}
                            y2={innerHeight}
                            stroke="red"
                        />
                        <text dy=".71em" style={{ textAnchor: 'middle' }} fill="red" y={innerHeight + 3}>{tickValue}</text>
                    </g>
                ))}
                {yScale.domain().map(tickValue => (
                    <g key={tickValue} transform={`translate(0,${yScale(tickValue) + yScale.bandwidth() / 2})`}>
                        <text dy=".32em" x={-9} style={{ textAnchor: 'end' }} fill="red">{tickValue}</text>
                    </g>
                ))}
                {data.map(d => (
                    <g>
                        <rect key={d.Country} stroke="white" fill={'rgba(0,0,0,0.5)'} x={0} y={yScale(d.Country)} width={xScale(d.Population)} height={yScale.bandwidth()} />
                        <text x={10} y={yScale(d.Country)+16} >{d.Population}</text>
                    </g>
                ))}
            </g>
        </svg>
    )
}

export default WithAxisBarChart
