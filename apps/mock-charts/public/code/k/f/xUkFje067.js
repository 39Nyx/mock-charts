option = {
    title: {
        show: false,
        x: "center",
        text: '',
    },
    backgroundColor: '#ffffff',
    tooltip: {
        show: false,
        backgroundColor: '#F7F9FB',
        borderColor: '#92DAFF',
        borderWidth: '1px',
        textStyle: {
            color: 'red'
        },

    },
    series: [{
            name: '',
            type: 'gauge',
            radius: '53%',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 30,
                    shadowBlur: 0,
                    color: [
                        [
                            1, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: 'rgba(249,169,234, 1)',
                                    },
                                    {
                                        offset: 0.5,
                                        color: 'rgba(223,145,232, 1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(201,121,230, 1)',
                                    }
                                ]
                            )
                        ],

                    ]
                }
            },
            axisTick: {
                show: true,
                splitNumber: 1
            },
            splitLine: {
                show: true,
                length: 30,
                lineStyle: {
                    color: 'white'
                },
            },
            axisLabel: {
                show: false,
                textStyle: {
                    fontSize: 14
                }
            },

            pointer: {
                show: true,
                width: 8,
                length: '70%',

            },
            detail: {
                offsetCenter: [0, 60],
                formatter: function(param) {

                    var x = param / 100;
                    var y = x.toString();
                    var z = y.indexOf('.');
                    if (z < 0) {
                        z = y.length;
                        y += '.';
                    }
                    while (y.length <= z + 2) {
                        y += '0';
                    }
                    return `{a|曝光度:  }` + y + '(' + param + `%)`;
                },
                rich: {
                    a: {
                        color: '#333333',
                        lineHeight: 55,
                        fontSize: 16,
                        fontWeight: 700
                    }
                },
                textStyle: {
                    fontSize: 16,
                    color: "#3ca2f8"
                },
            },
            data: [{
                name: "%",
                value: 0
            }]
        },
        {
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '53%',
            splitNumber: 10,
            min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, 'white']
                    ]
                }
            }, //仪表盘轴线

            //刻度样式
            splitLine: {
                show: false,
                length: 12,
                lineStyle: {
                    width: 1,

                }
            }, //分隔线样式
            axisLabel: {
                show: true,
                distance: 20,
                textStyle: {
                    color: '#999999',
                    fontSize: '12',
                }
            },
            pointer: {
                show: 0
            },
            detail: {
                show: 0
            }
        },
    ]
};