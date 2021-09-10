import React,{useState,useEffect} from 'react'
import { VegaLite } from 'react-vega'
import { getData } from './getData';

const initialSpec = {
    width: 400,
    height: 800,
    mark: 'bar',
    encoding: {
        x: { field: 'YEAR', type: 'ordinal' },
        y: { field: 'TOTAL PATIENTS', type: 'quantitative' },
    },
    data: { name: 'table' }, // note: vega-lite data attribute is a plain object instead of an array
};


function FlusServeillance() {
    const [spec,setSpec]=useState();
    const [data,setData]=useState();
    useEffect(()=>{
        getData().then(data=>{
            setSpec(initialSpec)
            setData(data);
        })
    },[])
    return (
        <div>
            {data&&<VegaLite spec={spec} data={data} />}
        </div>
    )
}

export default FlusServeillance
