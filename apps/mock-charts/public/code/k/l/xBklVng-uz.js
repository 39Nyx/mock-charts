var data = {
    ProductionTime: 69222, //     "生产时间"     DB7.REAL256 ,   float
    MonthProductionTime: 22, // "月生产时间"   DB50.REAL180 ,  float
    YearProductionTime: 125, //   "年生产时间"   DB50.REAL184 ,  float
    TotalProductionTime: 888, //  "总生产时间"   DB50.REAL188 ,  float
};

var gauge_name = '运行时间';
var min = 0;

function getcolor(value, max) {
    let color;
    let percent = value / max;
    if (percent < 0.2) {
        color = '#9CD6CE';
    } else if (percent < 0.4) {
        color = '#7CBB55';
    } else if (percent < 0.6) {
        color = '#DDBD4D';
    } else if (percent < 0.8) {
        color = '#E98E2C';
    } else {
        color = '#E43F3D';
    }
    return [percent, color];
}

var day = {
    value: data.ProductionTime,
    unit: '秒',
    color: getcolor(data.ProductionTime, 86400),
    max: 86400
};
var month = {
    value: data.MonthProductionTime,
    color: getcolor(data.MonthProductionTime, 31),
    unit: '天',
    max: 31
};
var year = {
    value: data.YearProductionTime,
    color: getcolor(data.YearProductionTime, 366),
    unit: '天',
    max: 366
};
var total = {
    value: data.TotalProductionTime,
    color: getcolor(data.TotalProductionTime, Math.ceil(data.TotalProductionTime * 1.1)),
    unit: '天',
    max: Math.ceil(data.TotalProductionTime * 1.1)
};

var ProductionColor = getcolor(data.ProductionTime);
var ProductionUnit = getcolor(data.ProductionTime);
option = {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 5000,
            data: ['日', '月', '年', '总']
        },
        series: [{
                name: gauge_name,
                type: 'gauge',
                startAngle: 180,
                endAngle: 0,
                radius: 116,
                splitNumber: 1,
                center: ['50%', '68%'], // 默认全局居中  
                min: min,
                axisLine: {
                    show: false,
                    lineStyle: {
                        width: 45,
                        shadowBlur: 0,
                        color: [
                            [1, '#ccc']
                        ]
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                    length: 20
                },
                axisLabel: {
                    show: true,
                    padding: [20, 0, 0, 0],
                    fontSize: 12,
                    distance: -2
                },
                pointer: {
                    show: false
                },
                detail: {
                    offsetCenter: [0, -15],
                    textStyle: {
                        fontSize: 34,
                        fontWeight: '',
                        color: '#ccc'
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#323232",
                    }
                }
            },
            {
                name: gauge_name,
                type: 'gauge',
                startAngle: 180,
                endAngle: 0,
                radius: 116,
                center: ['50%', '68%'], // 默认全局居中  
                min: min,
                axisLine: {
                    show: false,
                    lineStyle: {
                        width: 45,
                        shadowBlur: 0
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                pointer: {
                    show: false
                },
                detail: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: "#323232",
                    }
                },
            }
        ]
    },
    options: [{
            series: [{
                    max: day.max,
                    detail: {
                        formatter: function(value) {
                            return value + day.unit;
                        }
                    },
                    data: [{
                        name: "",
                        value: Math.floor(day.value)
                    }]
                },
                {
                    max: day.max,
                    axisLine: {
                        lineStyle: {
                            color: [day.color, [1, '#ccc']]
                        }
                    },
                    data: [{
                        name: "",
                        value: Math.floor(day.value)
                    }]
                }
            ]
        },
        {
            series: [{
                    max: month.max,
                    detail: {
                        formatter: function(value) {
                            return value + month.unit;
                        }
                    },
                    data: [{
                        name: "",
                        value: Math.floor(month.value)
                    }]
                },
                {
                    max: month.max,
                    axisLine: {
                        lineStyle: {
                            color: [month.color, [1, '#ccc']]
                        }
                    },
                    data: [{
                        name: "",
                        value: Math.floor(month.value)
                    }]
                }
            ]
        },
        {
            series: [{
                    max: year.max,
                    detail: {
                        formatter: function(value) {
                            return value + year.unit;
                        }
                    },
                    data: [{
                        name: "",
                        value: Math.floor(year.value)
                    }]
                },
                {
                    max: year.max,
                    axisLine: {
                        lineStyle: {
                            color: [year.color, [1, '#ccc']]
                        }
                    },
                    data: [{
                        name: "",
                        value: Math.floor(year.value)
                    }]
                }
            ]
        },
        {
            series: [{
                    max: total.max,
                    detail: {
                        formatter: function(value) {
                            return value + total.unit;
                        }
                    },
                    data: [{
                        name: "",
                        value: Math.floor(total.value)
                    }]
                },
                {
                    max: total.max,
                    axisLine: {
                        lineStyle: {
                            color: [total.color, [1, '#ccc']]
                        }
                    },
                    data: [{
                        name: "",
                        value: Math.floor(total.value)
                    }]
                }
            ]
        }
    ]
};