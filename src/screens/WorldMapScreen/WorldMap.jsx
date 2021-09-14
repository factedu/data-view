import React from 'react'
import Marks from './Marks';
import { useData } from './useData';
import './styles.css'
function WorldMap() {
    const width = 960;
    const height = 500;
    const data = useData();
    if (!data) {
        return <div style={{height:height,width:width,display:'flex',justifyContent:'center',alignItems:'center'}}>Loading map...</div>
    }
    return (
        <svg width={width} height={height} >
            <Marks data={data} />
        </svg>
    )
}

export default WorldMap
