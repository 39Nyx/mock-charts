option = {
    grid: [{
            top: 10,
            bottom: 100,
            left: 0,
            width: '50%',
            height: '95%',
            containLabel: true,
        },
        {
            top: 10,
            bottom: 100,
            left: '50%',
            width: '50%',
            height: '95%',
            containLabel: true,
        },
    ],
    tooltip: {
        show: true,
    },
    axisPointer: {
        show: true,
        type: 'shadow',
    },
    xAxis: [{
            gridIndex: 0,
            type: 'category',
            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        {
            gridIndex: 1,
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7']
        },
    ],
    yAxis: [{
            gridIndex: 0,
            type: 'value',
        },
        {
            gridIndex: 1,
            type: 'value',
            axisLabel: {
                show: false,
            },
        }
    ],
    series: [
        {
            name: 'price',
            xAxisIndex: 0,
            yAxisIndex: 0,
            type: 'bar',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'sale',
            xAxisIndex: 1,
            yAxisIndex: 1,
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
    ]
};