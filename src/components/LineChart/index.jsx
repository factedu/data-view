import React, { useState, useEffect, useRef } from 'react'
import { csv, scaleTime, scaleLinear, axisBottom, axisLeft, timeFormat, extent, max, min, line, select } from "d3"
import chroma from 'chroma-js';

function LineChart({ width = 900, height = 600, margin = { top: 20, right: 5, bottom: 20, left: 100 } }) {
    const csvUrl = 'https://gist.githubusercontent.com/factedu/3b41e485796936281c246e11512eeb2f/raw/ec8f3462c49f8bdb22095a81ba5c2c2a25e1b608/india_covid_cases_over_time.csv';
    const red = '#eb6a5b';
    const green = "#b6e86f";
    const blue = '#52b6ca';
    const colors = chroma.scale([blue, green, red]);
    const [confirmedCases, setConfirmedCases] = useState();
    const [recoveredCases, setRecoveredCases] = useState();
    const [data, setData] = useState();
    const xAxisEl = useRef(null);
    const yAxisEl = useRef(null);
    const xGridEl = useRef(null);
    const yGridEl = useRef(null);

    const xScale = scaleTime().range([margin.left, width - margin.right]);
    const yScale = scaleLinear().range([0, height - margin.top - margin.bottom]);

    const xAxis = axisBottom().scale(xScale).ticks(10).tickSize(10).tickFormat(timeFormat('%Y-%m-%d'));
    const yAxis = axisLeft().scale(yScale).ticks(10)

    useEffect(() => {
        csv(csvUrl).then(res => {

            const cleanData = res.map(d => {
                return {
                    Confirmed: parseInt(d.Confirmed),
                    Date: +Date.parse(d.Date),
                    Deaths: parseInt(d.Deaths),
                    Recovered: parseInt(d.Recovered)
                }
            })
            setData(cleanData);
        })
    }, [])

    useEffect(() => {
        if (!data) return;
        console.log(data[0]);
        initChart();
        select(xAxisEl.current).call(xAxis);
        select(yAxisEl.current).call(yAxis);
        select(xGridEl.current).call(makeXGridLines().tickSize(-width).tickFormat("")).style('color', 'grey');
        select(yGridEl.current).call(makeYGridLines().tickSize(-width).tickFormat("")).style('color', 'grey');
    }, [data])

    const lineGenerator = line();

    const initChart = () => {
        if (!data) return;
        // upadate scales
        const timeDomain = extent(data, (d) => {
            return d.Date;
        })
        const confirmedMax = max(data, d => d.Confirmed);
        xScale.domain(timeDomain);
        yScale.domain([confirmedMax, min(data, d => d.Confirmed)]);

        lineGenerator.x(d => xScale(d.Date));
        lineGenerator.y(d => yScale(d.Confirmed));

        const tmpConfirmedCases = lineGenerator(data);
        setConfirmedCases(tmpConfirmedCases);

        lineGenerator.y(d => yScale(d.Recovered));
        setRecoveredCases(lineGenerator(data));
    }

    const makeXGridLines = () => {
        return axisBottom(xScale).ticks(10);
    }

    const makeYGridLines = () => {
        return axisLeft(yScale).ticks(10);
    }

    if (!data) {
        return (
            <div>Loading data...</div>
        )
    }

    return (
        <svg width={width} height={height}>
            <path d={confirmedCases} fill='none' stroke='red' strokeWidth={4} />
            <path d={recoveredCases} fill='none' stroke='green' strokeWidth={4} />

            <g ref={xGridEl} transform={`translate(0,${height - margin.bottom - margin.top})`} />
            <g ref={yGridEl} transform={`translate(${margin.left},0)`} />

            <g>
                <g ref={xAxisEl} transform={`translate(0,${height - margin.bottom - margin.top})`} />
                <g ref={yAxisEl} transform={`translate(${margin.left},${0})`} />
            </g>
        </svg>
    )
}

export default LineChart
