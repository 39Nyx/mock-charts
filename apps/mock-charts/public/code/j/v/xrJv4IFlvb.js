option = {
    title: {
        text: '折线图和柱状图对齐'
    },
    xAxis: [{
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    }, {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri',
        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        show: false
    }],
    yAxis: {},
    series: [{
        type: 'line',
        data: [220, '-', 191, '-', 290, '-', 220, '-', 191, '-', 290, '-'],
        connectNulls: true,
        xAxisIndex: 1
    }, {
        type: 'line',
        data: ['-', 191, '-', 290, '-', 200, '-', 220, '-', 191, '-', 290],
        connectNulls: true,
        xAxisIndex: 1
    }, {
        type: 'bar',
        data: [100, 40, 30, 400, 200, 100]
    }, {
        type: 'bar',
        data: [100, 40, 30, 400, 200, 100]
    }]
};