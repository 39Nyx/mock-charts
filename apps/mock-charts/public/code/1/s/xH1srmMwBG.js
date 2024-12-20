option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                boundaryGap:false,
    },
    yAxis: {
        type: 'value',

    },
    series: [{
        data: [820, 932, 0,0,0, 1330, 1320],
        areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }])
                }
        },
        type: 'line'
    }]
};
