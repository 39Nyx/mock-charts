option = {
    backgroundColor: '#000000',
    xAxis: {
        //show: false,
    },
    yAxis: {
        //show: false,
    },
    series: [{
        type: 'line',
        data: [{
            name: 'a',
            value: [0, 6]
        },{
            name: 'aa',
            value: [5.5, 3.6]
        }]
    }, {
        type: 'lines',
          itemStyle: {
            normal: {
                color: '#7a00e9',
                opacity: 1,
                borderWidth: 1,
                shadowBlur: 8,
                shadowColor: '#fff'
            }
        },
        coordinateSystem: 'cartesian2d',
        //zlevel: 2,
        effect: {
            show: true,
            constantSpeed: 200,
            trailLength: 0.02,
            symbolSize: 2,
        },
        lineStyle: {
            normal: {
                color: '#ff00f',
                opacity: 0,
                curveness: 0
            }
        },
        data: [{
            coords: [
                [3, 1],
                [6, 5]
            ]
        }, {
            coords: [
                [2, 3],
                [4, 0]
            ]
        }]
    }]
};