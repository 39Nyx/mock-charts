let value = 55.33;
let int = value.toFixed(2);
let num = 50 * value/100;

option = {
    backgroundColor: '#000',
    title: {
        text: '{num|' + int + '}%',
        x: 'center',
        y: 'center',
        textStyle: {
            color:'#fff',
            fontSize:12,
            rich: {
                num: {
                    fontSize: 48,
                    color: '#29EEF3',
                }
            },
        },
    },
    series: [
        {
            type: 'gauge',
            radius: '85%',
            startAngle: 180,
            endAngle: 0,
            clockwise: true,
            splitNumber: 30,
            zlevel: 10,
            detail: {
                offsetCenter: [0, -20],
                formatter: ' ',
            },
            pointer: {
                show: true,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: [[
                            1, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#8520DA',
                                    },
                                    {
                                        offset: 1,
                                        color: '#12D9FD',
                                    }
                                ]
                            )
                        ],],
                    width: 20,
                },
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: '#012c93',
                    width: 4,
                },
            },
            axisLabel: {
                show: false,
            },
            data:{
                value: 55.33
            }
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['79%', '85%'],
            hoverAnimation: false,
            zlevel: 2,
            clockWise: true,
            startAngle: 180,
            itemStyle: {
                normal: {
                    color: '#09dafd',
                },
            },
            label: {
                show: false,
            },
            data: [
                {
                    value: num,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#8520DA',
                                    },
                                    {
                                        offset: 1,
                                        color: '#12D9FD',
                                    }
                                ]),
                        },
                    },
                },
                {
                    value: 50-num,
                    itemStyle: {
                        normal: {
                            color: '#21449B',
                        },
                    },
                },
                {
                    value: 50,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                    },
                },
            ],
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['87%', '88%'],
            hoverAnimation: false,
            zlevel: 2,
            clockWise: true,
            startAngle: 180,
            itemStyle: {
                normal: {
                    color: '#09dafd',
                },
            },
            label: {
                show: false,
            },
            data: [
                {
                    value: 50,
                    itemStyle: {
                        normal: {
                            color: '#09dafd',
                        },
                    },
                },
                {
                    value: 50,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                    },
                },
            ],
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['92%', '94%'],
            hoverAnimation: false,
            zlevel: 2,
            clockWise: true,
            startAngle: '180',
            itemStyle: {
                normal: {
                    color: '#07b6e3',
                },
            },
            label: {
                show: false,
            },
            data: [
                {
                    value: 50,
                    itemStyle: {
                        normal: {
                            color: '#07b6e3',
                        },
                    },
                },
                {
                    value: 50,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                    },
                },
            ],
        },
        {
            type: 'pie',
            name: '内层环',
            radius: ['80%', '100%'],
            startAngle: '180',
            hoverAnimation: false,
            clockWise: true,
            zlevel: 0,
            itemStyle: {
                normal: {
                    color: '#012c93',
                },
            },
            label: {
                show: false,
            },
            data: [
                {
                    value: 50,
                    itemStyle: {
                        normal: {
                            color: '#012c93',
                        },
                    },
                },
                {
                    value: 50,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                    },
                },
            ],
        },
    ],
};
