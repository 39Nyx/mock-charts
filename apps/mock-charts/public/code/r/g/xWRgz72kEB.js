var option = {
    backgroundColor: 'black',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        orient:'vertical',
        data: ['逆变器输出电量', '逆变器输入电量'],
        right:'1%',
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
        axisLine: {
            lineStyle: {
                color: 'rgb(53,55,104'
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
            show: false,
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
            onZero: false,
            show: true,
            symbol: ['none', 'arrow'],
            symbolSize: [10, 10],
            symbolOffset: [0, 10],
            lineStyle: {
                color: 'rgb(53,55,104)'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgb(53,55,104)'
            }
        }
    }],
    series: [{
        name: '逆变器输出电量',
        barWidth: '10px',
        type: 'bar',
        itemStyle: {
            normal: {
                barBorderRadius: [30, 30, 0, 0],
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [{
                            offset: 0,
                            color: '#4b71b9'
                        },
                        {
                            offset: 0.5,
                            color: '#46b5f6'
                        },
                        {
                            offset: 1,
                            color: '#46b5f6'
                        }
                    ]
                )
            }
        },
        data: [
            100,
            3,
            5,
            6,
            3,
            13,
            11
        ]
    }, {
        name: '逆变器输入电量',
        type: 'bar',
        barWidth: '10px',
        itemStyle: {
            normal: {
                barBorderRadius: [30, 30, 0, 0],
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [{
                            offset: 0,
                            color: '#23cf99'
                        },
                        {
                            offset: 0.5,
                            color: '#12dfc9'
                        },
                        {
                            offset: 1,
                            color: '#12dfc9'
                        }
                    ]
                )
            }
        },
        data: [10, 52, 200, 334, 390, 330, 220]
    }]
};