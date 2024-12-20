var timeData = [8, 9, 10, 11, 12];
var timeData1 = [14, 15, 16, 17, 18]
var color = "#189cbb";
var scale = 1;
var chartData = [{
    name: "上午场",
    value: [10, 15, 25, 17, 10]
}, {
    name: "下午场",
    value: [20, 25, 15, 17, 10]
}]
var markArea = [{
    silent: true,
    label: {
        normal: {
            position: ['10%', '50%']
        }
    },
    data: [
        [{
            name: '',
            yAxis: 0,
            itemStyle: {
                normal: {
                    color: 'rgba(11,78,112,0.5)'
                }
            }
        }, {
            yAxis: 50
        }],
    ]
}, {
    silent: true,
    label: {
        normal: {
            position: ['10%', '50%']
        }
    },
    data: [
        [{
            name: '',
            yAxis: 0,
            itemStyle: {
                normal: {
                    color: 'rgba(17,85,142,0.2)'
                }
            }
        }, {
            yAxis: 50
        }],
    ]
}];

option = {
    backgroundColor: '#031f2d',
    // title: {
    //     text: '多空对比图',
    //     subtext: '云期策略',
    //     x: 'center'
    // },
    tooltip: {
        show:false,
        trigger: 'axis',
        formatter: function(params) {
            return params[0].name + '<br/>' +
                params[0].seriesName + ' : ' + params[0].value + ' (m^3/s)<br/>';
        },
        axisPointer: {
            animation: false
        }
    },
    color: ["#ffc72b", "#2bff8f"],
    legend: {
        formatter: function(name) {
            var sum = 0;
            chartData.forEach(function(value, index, array) {
                if (name == value.name) {
                    var num = value.value;
                    num.forEach(function(value, index, array) {
                        sum += value;
                    })
                }
            });
            return name + ':  ' + sum;
        },
        data: ['上午场', '下午场'],
        itemGap: 50,
        x: 'center',
        y: 'top',
        icon: 'circle',
        textStyle: {
            color: "#fff",
            fontSize: 16*scale
        }
    },
    grid: [{
        left: 50,
        right: 50,
        height: '35%'
    }, {
        left: 50,
        right: 50,
        top: '43%',
        height: '35%'
    }],
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            onZero: true
        },
        data: timeData,
        axisLabel: {
            inside: true,
            padding: [0, 0, 12, 0],
            textStyle: {
                color: color,
                fontSize: 16*scale,
            }
        },
        axisTick: {
            lineStyle: {
                color: color,
                width: 0
            }
        },
        axisLine: {
            lineStyle: {
                color: color,
                width: 0
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(80,224,255,0.3)',
                type: 'dashed',
            }
        },
        name: '时间/h',
        nameTextStyle: {
            color: "#fff",
            fontSize: 16*scale,
            padding: [0, 0, -50, -100]
        },
    }, {
        gridIndex: 1,
        type: 'category',
        boundaryGap: false,
        axisLine: {
            onZero: true
        },
        data: timeData1,
        position: 'top',
        axisLabel: {
            inside: true,
            padding: [12, 0, 0, 0],
            textStyle: {
                color: color,
                fontSize: 16*scale,
            }
        },
        axisTick: {
            lineStyle: {
                color: color,
                width: 0
            }
        },
        axisLine: {
            lineStyle: {
                color: color,
                width: 0
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(80,224,255,0.3)',
                type: 'dashed',
            },
            show: false
        },
    }],
    yAxis: [{
        type: 'value',
        max: 50,
        axisLabel: {
            // inside:true,
            textStyle: {
                color: color,
                fontSize: 16*scale,
            },
            padding: [0, 20, 0, 0],
        },
        axisTick: {
            lineStyle: {
                color: color,
                width: 0
            }
        },
        axisLine: {
            lineStyle: {
                color: color,
                type: 'dashed'
            },
            show:false,
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(80,224,255,0.3)',
                type: 'dashed',
            },
            show: false
        },
        name: '场次',
        nameTextStyle: {
            color: "#fff",
            fontSize: 16*scale,
            padding: [0, 0, 10, 0]
        },
    }, {
        gridIndex: 1,
        max: 50,
        type: 'value',
        inverse: true,
        axisLabel: {
            showMinLabel: false,
            textStyle: {
                color: color,
                fontSize: 16*scale,
            },
            padding: [0, 20, 0, 0],
        },
        axisTick: {
            lineStyle: {
                color: color,
                width: 0
            }
        },
        axisLine: {
            lineStyle: {
                // color: color,
                type: 'dashed'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(80,224,255,0.3)',
                type: 'dashed',
            },
            show: false
        },
    }],
    series: [{
        name: '上午场',
        type: 'line',
        smooth: true, //这句就是让曲线变平滑的
        symbolSize: 8,
        hoverAnimation: false,
        symbol: 'none', //拐点样式
        data: chartData[0].value,
        markArea: markArea[0],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: "#ffc72b",
                    width:2*scale
                }
            }
        }
    }, {
        name: '下午场',
        type: 'line',
        smooth: true, //这句就是让曲线变平滑的
        symbol: 'none', //拐点样式
        xAxisIndex: 1,
        yAxisIndex: 1,
        symbolSize: 8,
        hoverAnimation: false,
        data: chartData[1].value,
        markArea: markArea[1],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: "#2bff8f",
                    width:2*scale
                }
            }
        }
    }]
};