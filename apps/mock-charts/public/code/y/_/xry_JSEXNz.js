var now = new Date()
var forecastPoint = now.getHours()
console.log('forecastPoint:', forecastPoint)
var dimensions = Array.apply(null, {
    length: forecastPoint + 4
}).map((v, index) => {
    return {
        dimension: index,
        forecast: index > forecastPoint
    }
})
function generateData() {
    return Array.apply(null, {length: forecastPoint + 4}).map((v, index) => Math.round(Math.random() * 80 + 20))
}
var data1 = generateData()
var data2 = generateData()
console.log(data)
option = {
    backgroundColor: '#262A35',
    grid: [{
        left: '3%',
        width: (forecastPoint / (forecastPoint + 4) * 100 - 3) + '%'
    }, {
        left: (forecastPoint / (forecastPoint + 4) * 100) + '%',
        right: '3%'
    }],
    xAxis: [{
        gridIndex: 0,
        boundaryGap: false,
        data: dimensions.slice(0, forecastPoint + 1).map(item => item.dimension),
        axisLabel: {
            color: '#51637D',
            formatter: (value) => {
                return +value === forecastPoint ? '' : value;
            }
        },
        axisLine: {
            lineStyle: {
                color: '#51637D'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#51637D'
            }
        }
    }, {
        gridIndex: 1,
        boundaryGap: false,
        data: dimensions.slice(forecastPoint).map(item => item.dimension),
        axisLabel: {
            color: '#51637D'
        },
        axisLine: {
            lineStyle: {
                color: '#51637D'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#51637D'
            }
        }
    }],
    yAxis: [
        {
            show: false,
            type: 'value',
            gridIndex: 0,
            min: 0,
            max: 100
        },
        {
            show: false,
            type: 'value',
            gridIndex: 1,
            min: 0,
            max: 100
        }
    ],
    series: [
        {
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            symbolSize: 0,
            smooth: true,
            smoothMonotone: 'x',
            itemStyle: {
                normal: {
                    color: '#F6C93F'
                }
            },
            lineStyle: {
                normal: {
                    shadowBlur: 8,
                    shadowColor: '#F6C93FA0'
                }
            },
            data: data1.slice(0, forecastPoint + 1),
            markLine: {
                silent: true,
                symbolSize: 0,
                lineStyle: {
                    normal: {
                        color: '#C0CCDA',
                        type: 'solid',
                        shadowBlur: 4,
                        shadowColor: 'rgba(255,255,255,0.8)'
                    }
                },
                label: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {
                        xAxis: forecastPoint
                    }
                ]
            },
            markPoint: {
                silent: true,
                data: [
                    {
                        coord: [forecastPoint, data1[forecastPoint]],
                        symbol: 'circle',
                        symbolSize: 20,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.RadialGradient(0.5,0.5,1, [
                                    {offset: 0, color: '#fff'},
                                    {offset: 0.2, color: '#fff'},
                                    {offset: 0.2, color: '#F6C93Fff'},
                                    {offset: 0.7, color: '#F6C93F33'},
                                    {offset: 1, color: '#F6C93Fff'},
                                ]),
                            }
                        },
                        label: {
                            normal: {
                                show: false
                            }
                        }
                    }
                ]
            },
            animationDuration: 2000
        },
        {
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 0,
            smooth: true,
            smoothMonotone: 'x',
            lineStyle: {
                normal: {
                    type: 'dotted',
                    shadowBlur: 8,
                    shadowColor: '#F6C93FA0'
                }
            },
            itemStyle: {
                normal: {
                    color: '#F6C93F'
                }
            },
            data: data1.slice(forecastPoint),
            animationDelay: 2000
        },
        {
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            symbolSize: 0,
            smooth: true,
            smoothMonotone: 'x',
            itemStyle: {
                normal: {
                    color: '#F63F72'
                }
            },
            lineStyle: {
                normal: {
                    shadowBlur: 8,
                    shadowColor: '#F63F72A0'
                }
            },
            data: data2.slice(0, forecastPoint + 1),
            markPoint: {
                silent: true,
                data: [
                    {
                        coord: [forecastPoint, data2[forecastPoint]],
                        symbol: 'circle',
                        symbolSize: 20,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.RadialGradient(0.5,0.5,1, [
                                    {offset: 0, color: '#fff'},
                                    {offset: 0.2, color: '#fff'},
                                    {offset: 0.2, color: '#F63F72FF'},
                                    {offset: 0.6, color: '#F63F7233'},
                                    {offset: 1, color: '#F63F72FF'},
                                ]),
                            }
                        },
                        label: {
                            normal: {
                                show: false
                            }
                        }
                    }
                ]
            },
            animationDuration: 2000
        },
        {
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 0,
            smooth: true,
            smoothMonotone: 'x',
            lineStyle: {
                normal: {
                    type: 'dotted',
                    shadowBlur: 8,
                    shadowColor: '#F63F72A0'
                }
            },
            itemStyle: {
                normal: {
                    color: '#F63F72'
                }
            },
            data: data2.slice(forecastPoint),
            animationDelay: 2000
        }
    ]
};