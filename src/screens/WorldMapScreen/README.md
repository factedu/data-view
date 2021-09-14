# Technolgy Stack
1. React JS
2. D3 JS

### Developer Contact
>Name : **Ravi S Singh**  
Email : **factedu@gmail.com**

### Data Courtsy
1. [World-atlas](https://github.com/topojson/world-atlas) TopoJSON format
### Refrence

1. [countries-50m.json](https://unpkg.com/world-atlas@2.0.2/countries-50m.json)
2. [topojson-client](https://www.npmjs.com/package/topojson-client)
3. [mapshaper](https://mapshaper.org/) To Convert map json to topojson, remove intersections and simplify map json
4. [world_map_topo.json](https://gist.githubusercontent.com/factedu/975c5256b68dbb0a243f6b9bc3bda5c3/raw/3a5f5aec538d02b1a811d4be94ea13829cab8dce/world_map_topo.json) Final data after simplification which can be used as map

> Thanks to Curran Kelleher and [VizHub](https://vizhub.com/)


# How to use

#### Install npm package 
```
yarn add topojson-client
```
or using npm
```
npm i topojson-client --save
```

#### Sample JSON

```json
{
    "feature":[
        [20.2,23,12,1],
        [12.1,34,34]
    ]
}
```

```js
import React from 'react'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `Just a link: https://reactjs.com.`

ReactDom.render(
  <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />,
  document.body
)
```

| Attribute | Description |
| -- | -- |
| height | number: Chart Height |
| weight | number: Chart Width |