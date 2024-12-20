option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        orient: 'vertical',
        left: '50%',
        top: '10%',
        borderWidth: '1',
        borderColor: '#000000',
        data: [{
                name: 'RUS-priority',
                textStyle: {
                    fontSize: 18
                }
            },
            {
                name: '4G-priority',
                textStyle: {
                    fontSize: 18
                }
            },
            {
                name: 'BUS-priority',
                textStyle: {
                    fontSize: 18
                }
            },
            {
                name: 'BNCD',
                textStyle: {
                    fontSize: 18
                }
            },
        ]
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar', 'stack', 'tiled']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: [{
                value: '6',
                textStyle: {
                    fontSize: '18'
                }
            },
            {
                value: '8',
                textStyle: {
                    fontSize: '18'
                }
            },
            {
                value: '10',
                textStyle: {
                    fontSize: '18'
                }
            },
            {
                value: '12',
                textStyle: {
                    fontSize: '18'
                }
            },
            {
                value: '14',
                textStyle: {
                    fontSize: '18'
                }
            },
            {
                value: '16',
                textStyle: {
                    fontSize: '18'
                }
            },
            {
                value: '18',
                textStyle: {
                    fontSize: '18'
                }
            },
            {
                value: '20',
                textStyle: {
                    fontSize: '18'
                }
            },
        ],
        name: 'Utility decrease speed',
        nameLocation: 'middle',
        nameGap: '30',
        nameTextStyle: {
            fontSize: '20'
        },
        axisTick: {
            inside: 'true'
        },

    }],
    yAxis: [{
        type: 'value',
        name: 'Satisfaction of user',
        nameLocation: 'middle',
        nameGap: '70',
        nameTextStyle: {
            fontSize: '20'
        },
        axisTick: {
            inside: 'true'
        },
        axisLabel: {
            fontSize: '18'
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
            name: 'RUS-priority',
            type: 'line',
            symbol: 'circle',
            symbolSize: '15',
            data: [2500, 2100, 1750, 1550, 1450, 1300, 1200, 1100]
        },
        {
            name: '4G-priority',
            type: 'line',
            symbol: 'diamond',
            symbolSize: '15',
            data: [2050, 1964, 1850, 1740, 1660, 1520, 1350, 1250]
        },

        {
            name: 'BUS-priority',
            type: 'line',
            symbol: 'rect',
            symbolSize: '15',
            data: [2500, 2150, 1950, 1800, 1700, 1550, 1400, 1300]
        },

        {
            name: 'BNCD',
            type: 'line',
            symbol: 'triangle',
            symbolSize: '15',
            data: [2500, 2300, 2000, 1850, 1770, 1630, 1480, 1380]
        },
    ]
};