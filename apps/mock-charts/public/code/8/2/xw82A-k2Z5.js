var option = {
    backgroundColor: 'black',
    legend: {
        orient: 'vertical',
        right: '1%',
        data: ['昨天PR', '预测PR'],
        textStyle: {
            color: '#FFFFFF'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: '10px'
    },
    grid: {
        left: '3%',
        right: '8%',
        bottom: '3%',
        top: '15%',
        containLabel: true
    },
    calculable: true,
    xAxis: [{
        name: '',
        show: true,
        type: 'category',
        boundaryGap: false,
        data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
        ],
        axisLine: {
            lineStyle: {
                color: 'rgb(20,203,215,0.2)'
            }
        },
        //刻度线是否显示
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            rotate: 30,
            show: true
        },
        splitLine: {
            show: true,
            lineStyle: {
                // 使用深浅的间隔色
                color: 'rgb(20,203,215,0.2)'
            }
        }
    }],
    yAxis: [{
        type: 'value',
        name: 'PR',
        axisLine: {
            symbolOffset: [0, 10],
            lineStyle: {
                color: 'rgb(20,203,215,0.2)'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgb(20,203,215,0.2)'
            }
        }
    }],
    series: [{
        name: '昨天PR',
        type: 'line',
        symbol: 'none',
        itemStyle: {
            normal: {
                color: 'rgb(43,250,243)',
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [{
                                offset: 0,
                                color: 'rgb(43,250,243)'
                            },
                            {
                                offset: 0.5,
                                color: 'rgb(43,250,243)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(43,250,243)'
                            }
                        ]
                    )
                }
            }
        },
        data: [
            13,
            13,
            13,
            13,
            13,
            13,
            13
        ]
    }, {
        name: '预测PR',
        type: 'line',
        symbol: 'none',
        itemStyle: {
            normal: {
                color: 'rgb(107,66,220)',
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [{
                                offset: 0,
                                color: 'rgb(107,66,220)'
                            },
                            {
                                offset: 0.5,
                                color: 'rgb(107,66,220)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(107,66,220)'
                            }
                        ]
                    )
                }
            }
        },
        data: [
            12,
            12,
            11,
            4,
            9,
            3,
            10
        ]
    }]
}