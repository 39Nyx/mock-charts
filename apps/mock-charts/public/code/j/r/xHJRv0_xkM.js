app.title = '环形图';

option = {
    polar:{},
    angleAxis: {
        show: true,
        max: 360,
    },
    radiusAxis: {
        max: 100,
        show: true
    },
    graphic: [{
        type: 'circle',
        shape: {
            cx: 100,
            cy: 20,
            r: 15,
        },
        style: {
            fill: 'yellow'
        }
    }],
    series: [{
        type: 'custom',
        coordinateSystem: 'polar',
        renderItem (params, api) {
            const pos = api.coord([30, 120])
            return {
                type: 'circle',
                shape: {
                    cx: pos[0],
                    cy: pos[1],
                    r: 5,
                },
                style: {
                    fill: 'red'
                }
            }
        },
        data: [
            [1,2,3]
        ]
    }]
};
