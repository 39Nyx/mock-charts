option = {
    title: {
        text: '多资产单指标静态示意图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['gei1-1', 'gei1-2', 'gei1-3']
    },
    grid: {

        containLabel: true
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        name: '时间',
        type: 'category',
        boundaryGap: false,
        data: ['2018-01-01 12:00:00', '2018-01-01 12:15:00', '2018-01-01 12:30:00', '2018-01-01 12:45:00', '2018-01-01 13:00:00', '2018-01-01 13:15:00', '2018-01-01 13:30:00', '2018-01-01 13:45:00', '2018-01-01 14:00:00', '2018-01-01 14:15:00', '2018-01-01 14:30:00', '2018-01-01 14:45:00', '2018-01-01 15:00:00']
    },
    yAxis: {
        name: '字节数',
        type: 'value'
    },

    dataZoom: [{
        startValue: '2018-01-01 12:00:00',
        endValue: '2018-01-01 13:00:00'
    }, {
        type: 'inside'
    }],
    series: [{
            markLine: {
                label: {
                    normal: {
                        formatter: '闲'
                    }
                },
                data: [{
                    yAxis: '200'
                }]
                
            },
            name: 'gei1-1',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210, 123, 230, 132, 101, 134, 90]
        },
        {
            markLine: {
                label: {
                    normal: {
                        formatter: '忙'
                    }
                },
                data: [{
                    yAxis: '400'
                }]
                
            },
            name: 'gei1-2',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310, 213, 230, 182, 191, 234, 290]
        },
        {
            name: 'gei1-3',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310, 322, 230, 182, 191, 234, 290]
        }
    ]
};;