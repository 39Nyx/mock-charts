let points = [];
let lines = [];
let lat = 15;
for (var i = -180; i < 180; i += 7.2) {
    points.push([i, lat, 0]);
    lines.push([
        [0, -90],
        [i, lat]
    ]);
};




option = {
    backgroundColor: '#000',
    globe: {
        show: false,
        viewControl: {
            autoRotate: false,
            distance: 200,
            alpha: 25,
            minAlpha: 25,
            maxAlpha: 25
        }
    },
    series: [{
        type: 'lines3D',
        polyline: true,
        lineStyle: {
            width: 2,
            color: 'blue',
            opacity: 1
        },
        data: lines
    }, {
        type: 'scatter3D',
        coordinateSystem: 'globe',
        symbolSize: 10,
        itemStyle: {
            color: 'red',
            opacity: 1
        },
        emphasis: {
            itemStyle: {
                color: 'green',
                opacity: 1
            },
        },
        data: points
    }, {
        type: 'scatter3D',
        coordinateSystem: 'globe',
        symbolSize: 30,
        itemStyle: {
            color: 'green',
            opacity: 1
        },
        data: [{
            name: 'showing',
            value: [0, 90, 0],
            label: {
                show: true,
                position: 'bottom',
                formatter: () => '信息资源的名称等等等等'
            }
        }]
    }]
};

myChart.on('click', (params) => {
    console.log(params)
})


/*points.push({
    name : 'showing',
    value: [0, 90, 0],
    symbolSize: 25,
    itemStyle: {
        color : 'pink'
    },
    label: {
        show: true,
        position: 'bottom',
        formatter: () => '信息资源的名称等等等等'
    }
});*/