import { csv } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/yuzhang21/afd1af3a28631a12dfd8eee37520309f/raw/ILINet02.csv';

export const getData = async () => {
    const data = await csv(csvUrl);

    // Have a look at the attributes available in the console!
    console.log(data[data.length-1]);

    return {table:data};
};