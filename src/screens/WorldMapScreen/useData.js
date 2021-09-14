import React, { useState, useEffect } from 'react'
import { json } from 'd3';
import { feature, mesh } from 'topojson-client';
// const jsonUrl ='https://gist.githubusercontent.com/factedu/975c5256b68dbb0a243f6b9bc3bda5c3/raw/3a5f5aec538d02b1a811d4be94ea13829cab8dce/world_map_topo.json';
const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';
export const useData = () => {
    const [data, setData] = useState();
    // console.log(data);
    useEffect(() => {
        json(jsonUrl).then(topojsonData => {
            const { countries,land } = topojsonData.objects;
            // setData(feature(topojsonData,countries))
            setData({
                countries: feature(topojsonData, land),// land is more efficent then country .. 
                interiors: mesh(topojsonData, countries, (a, b) => a !== b)
            })
        });
    }, [])
    return data;
}