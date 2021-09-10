import vl from 'vega-lite-api'
export const viz = vl
    .markLine({size:3})
    .transform(
        vl
            .aggregate(vl.sum('ILITOTAL').as('ILITOTAL'))
            .groupby(['YEAR', 'REGION', 'WEEK'])
    )
    .encode(
        vl
            .y()
            .fieldQ('ILITOTAL')
            .title('Flu Cases in US')
            .aggregate('average'),
        vl
            .x()
            .fieldQ('WEEK')
            .scale({ nice: false })
            .title('Week of Year'),
        vl
            .color()
            .fieldN('YEAR')
            .scale({ domain: [2015, 2016, 2017, 2018, 2019] })
            .title('Year'),
        vl.tooltip().fieldN('YEAR')
    );