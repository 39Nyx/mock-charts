option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        },

        // formatter: function (a) {
        //     return (
        //         a[0]['axisValueLabel'] + "<br>" +
        //         '<span style="display: inline-block; margin-right: 5px; border-radius: 10px; width: 9px; height: 9px; background-color: ' + a[0]['color'] + '"></span>' +
        //         a[0]['seriesName'] + ': ' + a[0]['value'] + 'value' + "<br>" +
        //         '<span style="display: inline-block; margin-right: 5px; border-radius: 10px; width: 9px; height: 9px; background-color: ' + a[1]['color'] + '"></span>' +
        //         a[1]['seriesName'] + ': ' + a[1]['value'] + '万小时'
        //     );
        // }
    },
    color: ['#fbad0b', '#0696ff', '#4ecb73'],
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        }
    },
    legend: {
        show: true,
        data: ['volt', 'temp', 'speed']
    },
    grid: [{
        left: '9%',
        right: '4%',
        top: '30',
        height: '160',
    }, {
        left: '9%',
        right: '4%',
        top: '240',
        height: '160',
    }, {
        left: '9%',
        right: '4%',
        top: '450',
        height: '160',
    }, ],
    dataZoom: [{
        type: 'slider',
        // top: baseTop + gridHeight * 4 + 20,
        xAxisIndex: [0, 1, 2]
    }],
    xAxis: [{
            type: 'category',
            boundaryGap: true,
            axisLine: {
                onZero: true,
                lineStyle: {
                    color: '#888888'
                }
            },
            data: ["8", "9", "10", "11", "12", "13", "8", "9", "10", "11", "12", "13"],
            axisLabel: {
                textStyle: {
                    color: '#888888',
                    fontSize: '10'
                },
            },

        },
        {
            gridIndex: 1,
            type: 'category',
            boundaryGap: true,
            axisLine: {
                onZero: true,
                lineStyle: {
                    color: '#888888'
                }
            },
            data: ["8", "9", "10", "11", "12", "13", "8", "9", "10", "11", "12", "13"],

        },
        {
            gridIndex: 2,
            type: 'category',
            boundaryGap: true,
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: '#888888'
                }
            },
            data: ["8", "9", "10", "11", "12", "13", "8", "9", "10", "11", "12", "13"],
            axisLabel: {
                textStyle: {
                    color: '#888888',
                    fontSize: '10'
                },
            },
        }
    ],
    yAxis: [{
            name: '',
            type: 'value',
            nameTextStyle: {
                color: '#888888',
                fontSize: 10
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#e6e6e6'
                }
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: '#888888'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#888888',
                    fontSize: '10'
                },
            },
        },
        {
            gridIndex: 1,
            name: '',
            type: 'value',
            nameTextStyle: {
                color: '#888888',
                fontSize: 10
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: '#888888'
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#e6e6e6'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#888888',
                    fontSize: '10'
                },
            },
        },
        {
            gridIndex: 2,
            name: '',
            type: 'value',
            nameTextStyle: {
                color: '#888888',
                fontSize: 10
            },
            inverse: false,
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#e6e6e6'
                }
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: '#888888'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#888888',
                    fontSize: '10'
                },
            },
        }
    ],
    series: [{
            name: 'volt',
            type: 'line',
            data: [60, 55, 50, 40, 48, 46, 60, 55, 50, 40, 48, 46],
        },
        {
            name: 'temp',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [20, 20, 23, 25, 24, 20, 60, 55, 50, 40, 48, 46],

        },
        {
            name: 'speed',
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: [60, 30, 80, 40, 50, 30, 60, 55, 50, 40, 48, 46],
        }
    ]
};