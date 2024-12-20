var Xdata = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
var data1 = [60, 70, 60, 70, 60, 70, 60, 70, 60, 70, 60, 70];
var data2 = [20, 30, 40, 20, 30, 56, 60, 48, 38, 30, 50, 60];
option = {
    backgroundColor: 'rgb(20, 58, 110)',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        show: false,
    },
    grid: {
        left: '3%',
        right: '10%',
        top: '10%',
        bottom: '5%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            data: Xdata,
            axisTick: {
                alignWithLabel: true,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(27,63,129,.4)',
                },
            },
            axisLabel: {
                //坐标轴刻度标签的相关设置。
                interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                margin: 15,
                textStyle: {
                    color: '#6B9DD7',
                    fontStyle: 'normal',
                    fontSize: 14,
                },
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                //坐标轴刻度标签的相关设置。
                interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                margin: 15,
                textStyle: {
                    color: '#6B9DD7',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 14,
                },
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(27,63,129,.4)',
                },
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(27,63,129,.4)',
                },
            },
        },
        {
            name: '比率(%)',
            // 单位 显示位置
            // nameLocation: 'start',

            type: 'value',
            axisLabel: {
                //坐标轴刻度标签的相关设置。
                interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                margin: 15,
                formatter: '{value}%',
                textStyle: {
                    color: '#6B9DD7',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 14,
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#1B3F81',
                },
            },
            splitLine: {
                lineStyle: {
                    color: '#1B3F81',
                },
            },
        },
    ],
    series: [
        // 已完成

        {
            name: '已完成',
            type: 'pictorialBar',
            symbolSize: [12, 6],
            symbolOffset: [0, -4],
            symbolPosition: 'end',
            z: 12,
            label: {
                show: false,
            },
            data: data1,
            color: '#28ADFF',
            tooltip: {
                show: false,
            },
        },
        {
            name: '已完成',
            type: 'pictorialBar',
            symbolSize: [12, 6],
            symbolOffset: [0, 5],
            z: 12,
            data: data1,
            color: '#28ADFF',
            tooltip: {
                show: false,
            },
        },
        {
            type: 'bar',
            name: '已完成',
            itemStyle: {
                normal: {
                    color: function (params) {
                        if (params.dataIndex < 3) {
                            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(38,170,255,.6)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(59,199,255,.6)',
                                },
                            ]);
                        } else if (params.dataIndex > 8) {
                            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(38,170,255,.6)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(59,199,255,.6)',
                                },
                            ]);
                        }else{ return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(38,170,25,.6)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(59,199,25,.6)',
                                },
                            ]);
                        }
                    },
                    opacity: 0.7,
                },
            },
            barWidth: '12',
            data: data1,
        },

        {
            name: '第一季度指标',
            type: 'line',
            symbolSize: 0,
            data: ['10'],
            markLine: {
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#F87E0C',
                        },
                    },
                },
                data: [
                    {
                        type: 'average',
                        name: '第一季度指标',
                        label: {
                            position: 'end',
                            formatter: '{b}',
                            color: '#6B9DD7',
                            // formatter: "{b}\n {c}"
                        },
                    },
                ],
            },
        },
        {
            name: '第二季度指标',
            type: 'line',
            symbolSize: 0,
            data: ['30'],
            markLine: {
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#F87E0C',
                            width: 2,
                        },
                    },
                },
                data: [
                    {
                        type: 'average',
                        name: '第二季度指标',
                        label: {
                            position: 'end',
                            formatter: '{b}',
                            color: '#F87E0C',
                            // formatter: "{b}\n {c}"
                        },
                    },
                ],
            },
        },
        {
            name: '第三季度指标',
            type: 'line',
            symbolSize: 0,
            data: ['45'],
            markLine: {
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#F87E0C',
                        },
                    },
                },
                data: [
                    {
                        type: 'average',
                        name: '第三季度指标',
                        label: {
                            position: 'end',
                            formatter: '{b}',
                            color: '#6B9DD7',
                            // formatter: "{b}\n {c}"
                        },
                    },
                ],
            },
        },
        {
            name: '年度指标',
            type: 'line',
            symbolSize: 0,
            data: ['60'],
            markLine: {
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#F87E0C',
                        },
                    },
                },
                data: [
                    {
                        type: 'average',
                        name: '年度指标',
                        label: {
                            position: 'end',
                            formatter: '{b}',
                            color: '#6B9DD7',
                            // formatter: "{b}\n {c}"
                        },
                    },
                ],
            },
        },
        {
            name: '同比率',
            type: 'line',
            data: data2,
            yAxisIndex: 1,
            z: 99,
            symbol: 'none',
            color: '#D13163',
            lineStyle: {
                width: 4,
                shadowColor: 'rgba(65,11,11,.6)', //设置折线阴影
                shadowBlur: 2,
                shadowOffsetY: 8,
            },
        },
    ],
};
