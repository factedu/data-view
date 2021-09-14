import React from 'react'
import { geoEqualEarth, geoNaturalEarth1, geoPath, geoGraticule } from 'd3';

const projection = geoEqualEarth();
const path = geoPath(projection);
const graticule = geoGraticule();

function Marks({ data: { countries, interiors } }) {
    return (
        <g className="marks">
            <path className="sphere" d={path({ type: 'Sphere' })} />
            <path className="graticule" d={path(graticule())} />
            {
                countries.features.map((feature, i) => {
                    return (
                        <path className="country" key={i + '' + feature.id} d={path(feature)} />
                    )
                })
            }
            <path className="interior" d={path(interiors)} />
        </g>
    )
}

export default Marks
