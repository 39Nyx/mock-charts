var data = {
    zone1Temp: [],
    zone2Temp: [],
    zone3Temp: [],
    zone4Temp: [],
    zone5Temp: []
};
var data2 = {
    zone1Temp: [],
    zone2Temp: [],
    zone3Temp: [],
    zone4Temp: [],
    zone5Temp: []
};
var now = new Date();
var date, num;
for (var i = 0, leni = 50; i < leni; i++) {
    date = now.getTime() + i * 1000 * 60 * 60;
    num = Math.round(153 * Math.random());
    data.zone1Temp.push({
        name: date,
        value: [date, num]
    });
    num = Math.round(152 * Math.random());
    data.zone2Temp.push({
        name: date,
        value: [date, num]
    });
    num = Math.round(152 * Math.random());
    data.zone3Temp.push({
        name: date,
        value: [date, num]
    });
    num = Math.round(152 * Math.random());
    data.zone4Temp.push({
        name: date,
        value: [date, num]
    });
    num = Math.round(152 * Math.random());
    data.zone5Temp.push({
        name: date,
        value: [date, num]
    });


    num = Math.round(153 * Math.random());
    data2.zone1Temp.push({
        name: date,
        value: [date, num]
    });
    num = Math.round(152 * Math.random());
    data2.zone2Temp.push({
        name: date,
        value: [date, num]
    });
    num = Math.round(152 * Math.random());
    data2.zone3Temp.push({
        name: date,
        value: [date, num]
    });
    num = Math.round(152 * Math.random());
    data2.zone4Temp.push({
        name: date,
        value: [date, num]
    });
    num = Math.round(152 * Math.random());
    data2.zone5Temp.push({
        name: date,
        value: [date, num]
    });
}

var seriesNameList = ['挤胶筒', '挤胶筒出口', '挤胶软管', '挤胶喷咀', '挤胶感温器'];

var baseTop = 40;
var gridHeight = 80;
var unit = '%';

function makeGrid(top, opt) {
    return echarts.util.merge({
        left: '5%',
        right: '5%',
        top: top,
        height: gridHeight
    }, opt || {}, true);
}

function makeXAxis(gridIndex, opt) {
    return echarts.util.merge({
        type: 'time',
        position: 'top',
        gridIndex: gridIndex,
        axisLine: {
            onZero: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisPointer: {
                show: true,
                lineStyle: {
                    color: '#478cf1',
                    width: 1.5
                }
            }
    }, opt || {}, true);
}

function makeYAxis(gridIndex, opt) {
    return echarts.util.merge({
        type: 'value',
        gridIndex: gridIndex,
        nameLocation: 'middle',
        nameTextStyle: {
            color: '#333'
        },
        boundaryGap: ['30%', '30%'],
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    }, opt || {}, true);
}

var timeFormat = function(num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}
var lineColor = '#9CD6CE';

option = {
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#fff',
        borderColor: 'rgba(0, 0, 200, 0.2)',
        borderWidth: 1,
        borderRadius: 0,
        padding: 10,
        formatter: function(params) {
            if (params.length) {
                console.log(params);
                var label = '<span style="color:#333">'+params[0].axisValueLabel+':装药机1/装药机2'+'</span><br>';
                var str = echarts.util.map(seriesNameList, function(seriesName) {
                    var value;
                    var style;
                    for (var i = 0; i < params.length; i++) {
                        var param = params[i];
                        if (param.seriesName === seriesName) {
                            if (value) {
                                value = value + ' / ' + param.value[1] +unit;
                            } else {
                                style = 'color: ' + param.color;
                                value = param.value[1] + unit;
                            }
                        }
                    }
                    return '<span style="' + style + '">' +
                        seriesName +
                        '：</span><span style="' +
                        style + '">' + value + '</span>';
                }).join('<br>');
                return label+ str;
            }
        }
    },
    axisPointer: {
        link: [{
            xAxisIndex: 'all'
        }],
        snap: true
    },
    xAxis: [makeXAxis(0,{
            position: 'top',
            axisLine: {
                show: true,
                onZero: false
            },
            splitLine: {
                show: true
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#555'
                }
            },
            
        }), makeXAxis(1), makeXAxis(2), makeXAxis(3), makeXAxis(4), makeXAxis(5)],
    yAxis: [
        makeYAxis(0,{name: seriesNameList[0]}),
        makeYAxis(1,{name: seriesNameList[1]}),
        makeYAxis(2,{name: seriesNameList[2]}),
        makeYAxis(3,{name: seriesNameList[3]}),
        makeYAxis(4,{name: seriesNameList[4]}),
        makeYAxis(5,{axisLine: {show:false},})
        ],
    grid: [
        makeGrid(baseTop),
        makeGrid(baseTop + gridHeight),
        makeGrid(baseTop + gridHeight * 2),
        makeGrid(baseTop + gridHeight * 3),
        makeGrid(baseTop + gridHeight * 4),
        makeGrid(baseTop + gridHeight * 5)
    ],
    series: [{
            name: seriesNameList[0],
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data.zone1Temp,
            lineStyle: {
                normal: {
                    width: 2
                }
            }
        },
        {
            name: seriesNameList[0],
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data2.zone1Temp,
            lineStyle: {
                normal: {
                    width: 2
                }
            }
        },
        {
            name: seriesNameList[1],
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data.zone2Temp,
            xAxisIndex: 1,
            yAxisIndex: 1,
            lineStyle: {
                normal: {
                    width: 2
                }
            }
        },
        {
            name: seriesNameList[1],
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data2.zone2Temp,
            xAxisIndex: 1,
            yAxisIndex: 1,
            lineStyle: {
                normal: {
                    width: 2
                }
            }
        },
        {
            name: seriesNameList[2],
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data.zone3Temp,
            xAxisIndex: 2,
            yAxisIndex: 2,
            lineStyle: {
                normal: {
                    width: 2
                }
            }
        },
        {
            name: seriesNameList[2],
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data2.zone3Temp,
            xAxisIndex: 2,
            yAxisIndex: 2,
            lineStyle: {
                normal: {
                    width: 2
                }
            }
        },
        {
            name: seriesNameList[3],
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data.zone4Temp,
            xAxisIndex: 3,
            yAxisIndex: 3,
            lineStyle: {
                normal: {
                    width: 2
                }
            }
        },
        {
            name: seriesNameList[3],
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data2.zone4Temp,
            xAxisIndex: 3,
            yAxisIndex: 3,
            lineStyle: {
                normal: {
                    width: 2
                }
            }
        },
        {
            name: seriesNameList[4],
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data.zone5Temp,
            xAxisIndex: 4,
            yAxisIndex: 4,
            lineStyle: {
                normal: {
                    width: 2
                }
            }
        },
        {
            name: seriesNameList[4],
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data2.zone5Temp,
            xAxisIndex: 4,
            yAxisIndex: 4,
            lineStyle: {
                normal: {
                    width: 2
                }
            }
        },
        {
            name: 'more',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            xAxisIndex: 5,
            yAxisIndex: 5
        }
    ]
};