var option = {
    backgroundColor: 'black',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['厂用电率', '厂用电量'],
        textStyle: {
            color: '#FFFFFF'
        }
    },
    textStyle: {
        color: '#32cbd7',
        fontSize: '10px'
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        top: '15%',
        containLabel: true
    },
    calculable: true,
    xAxis: [{
        show: true,
        type: 'category',
        boundaryGap: true,
        data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周日"
        ],
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
            name: '厂用电率',
            axisLine: {
                onZero: false,
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
        },
        {
            type: 'value',
            name: '厂用电量',
            axisLine: {
                show: true,
                symbol: ['none', 'arrow'],
                symbolSize: [10, 10],
                symbolOffset: [0, 10],
                lineStyle: {
                    color: 'rgb(20,203,215,0.2)'
                },
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {}
        }
    ],
    series: [{
        name: '厂用电率',
        type: 'line',
        symbol: 'none',
        itemStyle: {
            normal: {
                color: '#2cdece',
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [{
                                offset: 0,
                                color: '#2cdece'
                            },
                            {
                                offset: 0.5,
                                color: '#2cdece'
                            },
                            {
                                offset: 1,
                                color: '#2cdece'
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
    },{
        name: '厂用电量',
        type: 'bar',
        barWidth: '10px',
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                barBorderRadius: [30, 30, 0, 0],
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [{
                            offset: 0,
                            color: '#2cdece'
                        },
                        {
                            offset: 0.5,
                            color: '#12cbe0'
                        },
                        {
                            offset: 1,
                            color: '#12cbe0'
                        }
                    ]
                )
            }
        },
        data: [10, 52, 200, 334, 390, 330, 220]
    }]
};