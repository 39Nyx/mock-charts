option = {
    title: {
        text: '热线呼入趋势',
        textStyle: {
            color: '#fff'
        },
        subtext: '热线呼入趋势',
        subtextStyle: {
            color: '#fff'
        }
    },
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: '130',
        y: '60',
        data: ['当日呼入量', '30日内平均呼入量'],
        textStyle: {
            color: '#fff'
        }
    },
    grid: {
        x: '6%',
        y: '15%',
        width: '400',
        height: '150'
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            interval: 0
        },
        data: ['8时前', '8时', '9时', '10时', '11时', '12时', '13时', '14时', '15时',
            '16时', '17时', '17时后'
        ]
    }],
    yAxis: [{
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
            },
        },
        {
            type: 'value',
            splitNumber: 10,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                }
            }
        }
    ],
    series: [{
            name: '当日呼入量',
            type: 'bar',
            // stack: '呼入量',
            data: [3, 15, 28, 25, 29, 14, 13, 28, 28, 22, 8, 0],
            barWidth: 15, // 设置柱状图的宽度
            label: {
                show: true,
                color: '#fff',
                fontSize: 12,
                formatter: '{c}'
            },
            itemStyle: {
                normal: { // 设置柱状图圆角
                    color: '#2ECAC6',
                    barBorderRadius: 3
                }
            }
        }, {
            name: '30日内平均呼入量',
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#DA7410'
                }
            },
            data: ["0.88", "6.13", "12.30", "13.23", "9.85", "4.55", "5.17", "9.42", "10.53", "10.45", "6.17",
                "7.07"
            ]
        },
        {
            type: 'bar',
            barWidth: '50%',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [0],
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            zlevel: 9
        },
    ]
};