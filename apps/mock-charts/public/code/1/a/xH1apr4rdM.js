option = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        top: 20,
        bottom: 65,
        right: 50
    },
    legend: {
        right: 30,
        bottom: 10,
        itemWidth: 30,
        itemHeight: 10,
        data: ['德施曼', '凯迪仕', '亚太天能']
    },
    color: ['#ff4200', '#4fa8f9', '#6ec71e'],
    xAxis: {
        type: 'category',
        data: ['2018-01-01', '2018-01-02', '2018-01-03', '2018-01-04', '2018-01-05'],
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#7b8191'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false,
            lineStyle: {
                color: ['#7b8191']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#7b8191'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },
    series: [{
        name: '德施曼',
        type: 'line',
        smooth: true, //曲线
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        data: ['1200', '1100', '1500', '800', '1200', '1000'],
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(255, 255, 255, 1, [{
                    offset: 0,
                    color: 'rgba(255, 666, 0, 0.7)'
                }, {
                    offset: 1,
                    color: 'rgba(255, 666, 0, 0.3)'
                }], false)
            }
        },
        itemStyle: {
            normal: {

            }
        },
        lineStyle: {
            normal: {
                width: 2
            }
        }
    }, {
        name: '凯迪仕',
        type: 'line',
        smooth: true, //曲线
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        data: ['900', '800', '1000', '1200', '1100', '1500'],
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(255, 255, 255, 1, [{
                    offset: 0,
                    color: 'rgba(79, 168, 249, 0.7)'
                }, {
                    offset: 1,
                    color: 'rgba(79, 168, 249, 0.3)'
                }], false)
            }
        },
        itemStyle: {
            normal: {

            }
        },
        lineStyle: {
            normal: {
                width: 2
            }
        }
    }, {
        name: '亚太天能',
        type: 'line',
        smooth: true, //曲线
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        data: ['1000', '900', '800', '1000', '1300', '1600'],
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(255, 255, 255, 1, [{
                    offset: 0,
                    color: 'rgba(110, 199, 30, 0.7)'
                }, {
                    offset: 1,
                    color: 'rgba(110, 199, 30, 0.3)'
                }], false)
            }
        },
        itemStyle: {
            normal: {

            }
        },
        lineStyle: {
            normal: {
                width: 2
            }
        }
    }]
};