var data = [{
    name: ['大', '较大', '一般', '较小', '小'],
    value: [500, 400, 600, 200, 800]
}];

var maxValue = 800;
var colorList = ['#ee2228', '#fb8b1d', '#297fff', '#00f8ff', '#5ec79c'];

var areaColor = colorList[data[0].value.indexOf(maxValue)];

option = {
    radar: [{
            zlevel: 0,
            indicator: [{
                    "color": "#000",
                    "text": data[0].name[0],
                    "max": maxValue
                },
                {
                    "color": "#000",
                    "text": data[0].name[1],
                    "max": maxValue
                },
                {
                    "color": "#000",
                    "text": data[0].name[2],
                    "max": maxValue
                },
                {
                    "color": "#000",
                    "text": data[0].name[3],
                    "max": maxValue
                },
                {
                    "color": "#000",
                    "text": data[0].name[4],
                    "max": maxValue
                }
            ],
            nameGap: 14,
            center: ['50%', '50%'], //位置
            radius: '80%', //半径
            startAngle: 90,
            splitNumber: 8,
            shape: 'circle',
            splitArea: {
                areaStyle: {
                    color: '#fff',
                    shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#333'
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dotted',
                    color: '#333',
                    opacity: 0.5
                }
            }
        },
        {
            zlevel: 1,
            indicator: [{
                    "color": "#000",
                    "text": '',
                    "max": maxValue
                },
                {
                    "color": "#000",
                    "text": '',
                    "max": maxValue
                },
                {
                    "color": "#000",
                    "text": '',
                    "max": maxValue
                },
                {
                    "color": "#000",
                    "text": '',
                    "max": maxValue
                },
                {
                    "color": "#000",
                    "text": '',
                    "max": maxValue
                }
            ],
            nameGap: 8,
            center: ['50%', '50%'], //位置
            radius: '70%', //半径
            startAngle: 90,
            splitNumber: 7,
            shape: 'circle',
            splitArea: {
                areaStyle: {
                    color: '#fff',
                    // shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#333'
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dotted',
                    color: '#333',
                    opacity: 0.5
                }
            }
        }

    ],
    series: [{
            radarIndex: 0,
            type: 'radar',
            silent: true,
            data: [{
                    value: [maxValue, '', '', '', ''],
                    symbol: 'circle',
                    symbolSize: 14,
                    lineStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: colorList[0]
                        }
                    }
                },
                {
                    value: ['', maxValue, '', '', ''],
                    symbol: 'circle',
                    symbolSize: 14,
                    lineStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: colorList[1]
                        }
                    }
                },
                {
                    value: ['', '', maxValue, '', ''],
                    symbol: 'circle',
                    symbolSize: 14,
                    lineStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: colorList[2]
                        }
                    }
                },
                {
                    value: ['', '', '', maxValue, ''],
                    symbol: 'circle',
                    symbolSize: 14,
                    lineStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: colorList[3]
                        }
                    }
                },
                {
                    value: ['', '', '', '', maxValue],
                    symbol: 'circle',
                    symbolSize: 14,
                    lineStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: colorList[4]
                        }
                    }
                }
            ],
        },
        {
            radarIndex: 1,
            zlevel: 1,
            silent: true,
            type: 'radar',
            symbolSize: 0,
            textStyle: {
                color: '#000'
            },
            lineStyle: {
                show: false,
                normal: {
                    color: areaColor,
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: areaColor
                }
            },
            data: data
        }
    ]
};