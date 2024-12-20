option = {

    legend: {
        data: ['line', 'bar'],
        bottom:0,
    },
    xAxis: {
        data: ['出栏量', '存栏量', '蔬菜产量', '蔬菜种植面积'],

    },
    yAxis: {
        splitLine: {
            show: false
        },

        max: 150,
    },
    series: [{
        name: 'bar',
        type: 'bar',
        barWidth: '40%',
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: '#14c8d4'
                    }, {
                        offset: 1,
                        color: '#43eec6'
                    }]
                )
            }
        },
        data: [45, 87, 118, 98]
    }, {
        name: 'line',
        type: 'bar',
        barGap: '-110%',
        barWidth: '50%',

        z: -12,
        data: [100, 100, 118, 100, ]
    }]
};