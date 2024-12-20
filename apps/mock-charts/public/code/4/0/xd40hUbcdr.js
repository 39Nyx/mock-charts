var option = {
    backgroundColor: 'black',
    legend: {
        orient:'vertical',
        right:'1%',
        data: ['逆变器输出电量', '逆变器输入电量'],
        textStyle: {
            color: 'rgb(174,237,255)'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    textStyle: {
        color: '#32cbd7',
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
        name: '时间',
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
            show: true,
            symbol: ['none', 'arrow'],
            symbolSize: [10, 10],
            symbolOffset: [0, 10],
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
        name: '电量/KWh',
        axisLine: {
            show: true,
            symbol: ['none', 'arrow'],
            symbolSize: [10, 10],
            symbolOffset: [0, 10],
            lineStyle: {
                color: 'rgb(20,203,215,0.2)'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgb(20,203,215,0.2)'
            }
        }
    }],
    series: [{
        name: '逆变器输入电量',
        type: 'line',
        symbol: 'none',
        itemStyle: {
            normal: {
                color: 'rgb(174,237,255)',
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [{
                                offset: 0,
                                color: 'rgb(174,237,255)'
                            },
                            {
                                offset: 0.5,
                                color: 'rgb(174,237,255)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(148,135,255)'
                            }
                        ]
                    )
                }
            }
        },
        data: [
            1,
            3,
            5,
            6,
            3,
            13,
            11
        ]
    }, {
        name: '逆变器输出电量',
        type: 'line',
        itemStyle: {
            normal: {
                color: 'rgb(174,237,255)',
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 0, 0,
                        [{
                                offset: 0,
                                color: 'rgb(174,237,255,0.01)'
                            },
                            {
                                offset: 0.5,
                                color: 'rgb(148,135,255,0.2)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(148,135,255,0.6)'
                            }
                        ]
                    )
                },
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [{
                                offset: 0,
                                color: 'rgb(174,237,255)'
                            },
                            {
                                offset: 0.5,
                                color: 'rgb(174,237,255)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(148,135,255)'
                            }
                        ]
                    )
                }
            }
        },
        data: [
            120,
            132,
            101,
            134,
            90,
            230,
            210
        ]
    }]
};