option = {
    title: {
        text: '克拉币KTC七日态势',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis'
    },

    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7', '1-8', '1-9']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} ฿'
        }
    },
    series: [{
            name: '价格',
            type: 'line',
            data: [1, 3.12, 5.36, 18.54, 20.01, 25.21, 29.31, 39.31, 49.31],
            markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ]
            },
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        },

    ]
};