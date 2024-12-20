option = {
    backgroundColor: '#000',
    title: {
        // text: 'Sales Revenue of CAN-LAX 2016-2017',
        textStyle: {
            fontSize: 14
        }
    },

    tooltip: { // 提示框组件
        trigger: 'axis',
    },
    legend: {
        data: ['水量', '电量'],
        top: '18',
        textStyle: {
            color: '#fff'
        },
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        containLabel: true,
        show: false // 网格边框是否显示，上和右边框 
    },
    xAxis: {
        type: 'category',
        boundaryGap: true, // 坐标轴两边留白
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#fff'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#00A2FF',
                width: 2
            }
        },
        axisTick: {
            show: false
        },
        data: ['2019.01', '2019.02', '2019.03', '2019.04', '2019.05', '2019.06', ]
    },

    yAxis: [ // 双y坐标轴
        {
            name: '水量（t）',
            type: 'value',
            axisLabel: {
                formatter: '{value}',
                color: '#65F5FD',
                fontSize: 14
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#65F5FD',
                    // fontSize:33
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#385B71'
                }
            },
            axisTick: {
                show: false
            },
        },
        {
            name: '电量（kWh）',
            //nameLocation: 'start',
            axisLabel: {
                formatter: '{value}',
                color: '#65F5FD',
                fontSize: 14
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#65F5FD',
                    // fontSize:33
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            min: 0,
            max: 300, // growing rate upper limit
            type: 'value',
            //top:10,
            inverse: false
        }
    ],

    series: [{
            name: '水量',
            type: 'bar',
            color: '#00BFFF',
            //stack: '总量',
            barWidth:'20%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#6C4CF0'
                    }, {
                        offset: 1,
                        color: '#36ABF5'
                    }]),
                    // barBorderRadius: 10,
                }
            },
            data: [1741.9, 977, 1742.2, 1431.1, 1636.2, 1447, ]
        },
        {
            name: '电量',
            type: 'bar',
            color: '#DC143C',
            //stack: '总量',
            barWidth:'20%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#F60336'
                    }, {
                        offset: 1,
                        color: '#FE4D78'
                    }]),
                    // barBorderRadius: 10,
                }
            },
            data: [2609, 1162.9, 2942.9, 5174.6, 5114.4, 5065.8, ]
        }
    ]
};