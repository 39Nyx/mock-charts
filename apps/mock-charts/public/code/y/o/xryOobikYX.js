var series_data = [];
var colorList = [{
    "a": "rgba(137, 189, 27, 0.3)",
    "b": "rgb(137,189,27)",
}, {
    "a": "rgba(0, 136, 212, 0.3)",
    "b": "rgb(0,136,212)",
}, {
    "a": "rgba(219, 50, 51, 0.3)",
    "b": "rgb(219,50,51)",
}, {
    "a": "rgba(102,102,102, 0.3)",
    "b": "rgb(102,102,102)",
}, {
    "a": "rgba(0, 204, 153, 0.3)",
    "b": "rgb(0, 204, 153)",
}, {
    "a": "rgba(0, 204, 255, 0.3)",
    "b": "rgb(0, 204, 255)",
}, {
    "a": "rgba(102, 0, 0, 0.3)",
    "b": "rgb(102, 0, 0)",
}, {
    "a": "rgba(102,511,53, 0.3)",
    "b": "rgb(102,511,53)",
}, {
    "a": "rgba(102, 153, 153, 0.3)",
    "b": "rgb(102, 153, 153)",
}, {
    "a": "rgba(153, 153, 255, 0.3)",
    "b": "rgb(153, 153, 255)",
}, {
    "a": "rgba(255, 153, 51, 0.3)",
    "b": "rgb(255, 153, 51)",
}, {
    "a": "rgba(255, 255, 153, 0.3)",
    "b": "rgb(255, 255, 153)",
}];

// 模拟数据
var result = {
    "times": ["2018-04", "2018-05", "2018-06", "2018-07", "2018-08"],
    "legend": ["温度", "日照时间"],
    "data": [{
        "name": "温度",
        "data": ["22", "21", "15", "20", "20"]
    }, {
        "name": "降雨量",
        "data": ["10", "11", "12", "13", "12"]
    }]
}

var length = result.data.length;

for (var i = 0; i < length; i++) {
    var line_template = {
        name: result.data[i].name,
        type: 'line',
        smooth: true,
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 6,
        data: result.data[i].data,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: colorList[i].a
                    },
                    {
                        offset: 1,
                        color: colorList[i].a
                    }
                ], false)
            }
        },
        itemStyle: {
            normal: {
                color: colorList[i].b
            }
        },
        lineStyle: {
            normal: {
                width: 1
            }
        }
    };
    series_data.push(line_template);
}

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#ddd'
            }
        },
        backgroundColor: 'rgba(255,255,255,1)',
        padding: [5, 10],
        textStyle: {
            color: '#7588E4'
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    },
    legend: {
        right: 20,
        data: result.legend
    },
    xAxis: {
        type: 'category',
        data: result.times,
        boundaryGap: false,
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0.1)'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color: 'rgba(0,0,0,0.5)'
            }
        }
    },
    yAxis: [{
        name: '频率',
        type: 'value',
        minInterval: 1,
        boundaryGap: [0, 0.01],
        splitLine: {
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0.1)'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color: 'rgba(0,0,0,0.5)'
            }
        }
    }],
    series: series_data
};
// 打印 option
// console.log(JSON.stringify(option));