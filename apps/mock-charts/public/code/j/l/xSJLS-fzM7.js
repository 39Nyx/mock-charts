let costChange = {
    changeDate: ['17-04', '17-05', '17-06', '17-07', '17-08', '17-09', '17-10', '17-11', '17-12', '18-01', '18-02', '18-03'],
    cost: [13200, 14100, 15200, 15001, 13000, 14200, 15091, 14000, 17032, 18091, 20034, 19000]
};

let data = costChange.cost;
let chartData = {
    xAxisNames: costChange.changeDate,
    seriesData: data,
    name: '费用',
    seriesDash: true,
    dashStart: 5
};

let seriesData = [];
if (chartData.seriesDash) {
    let len = chartData.xAxisNames.length;
    let minusArr = [];
    for (let i = 0; i < len; i++) {
        minusArr.push('-');
    }
    seriesData = [{
            name: chartData.name,
            symbol: 'circle',
            symbolSize: 12,
            type: 'line',
            smooth: false,
            itemStyle: {
                normal: {
                    color: '#2d8cf0'
                }
            },
            data: (chartData.seriesData.slice(0, chartData.dashStart)).concat(minusArr.slice(0, len - chartData.dashStart))
        },
        {
            name: chartData.name,
            symbol: 'emptyCircle',
            symbolSize: 6,
            type: 'line',
            smooth: false,
            itemStyle: {
                normal: {
                    color: '#2d8cf0'
                }
            },
            data: (chartData.seriesData.slice(0, chartData.dashStart)).concat(minusArr.slice(0, len - chartData.dashStart))
        },
        {
            name: chartData.name,
            symbol: 'circle',
            symbolSize: 12,
            type: 'line',
            smooth: false,
            itemStyle: {
                normal: {
                    color: '#8fc3f7',
                    lineStyle: {
                        width: 2,
                        type: 'dashed'
                    }
                }
            },
            data: (minusArr.slice(0, chartData.dashStart - 1)).concat(chartData.seriesData.slice(chartData.dashStart - 1, len))
        },
        {
            name: chartData.name,
            symbol: 'circle',
            symbolSize: 6,
            type: 'line',
            smooth: false,
            itemStyle: {
                normal: {
                    color: '#2d8cf0',
                    lineStyle: {
                        width: 2,
                        type: 'dotted'
                    }
                }
            },
            data: (minusArr.slice(0, chartData.dashStart - 1)).concat(chartData.seriesData.slice(chartData.dashStart - 1, chartData.xAxisNames.length))
        },
        {
            name: chartData.name,
            symbol: 'circle',
            symbolSize: 12,
            type: 'line',
            smooth: false,
            itemStyle: {
                normal: {
                    color: '#2d8cf0'
                }
            },
            data: (minusArr.slice(0, chartData.dashStart - 1)).concat(chartData.seriesData.slice(chartData.dashStart - 1, chartData.dashStart)).concat(minusArr.slice(0, len - chartData.dashStart))
        },
        {
            name: chartData.name,
            symbol: 'emptyCircle',
            symbolSize: 6,
            type: 'line',
            smooth: false,
            itemStyle: {
                normal: {
                    color: '#2d8cf0'
                }
            },
            data: (minusArr.slice(0, chartData.dashStart - 1)).concat(chartData.seriesData.slice(chartData.dashStart - 1, chartData.dashStart)).concat(minusArr.slice(0, len - chartData.dashStart))
        }
    ];
} else {
    seriesData = [{
            name: chartData.name,
            symbol: 'circle',
            symbolSize: 12,
            type: 'line',
            data: chartData.seriesData
        },
        {
            name: chartData.name,
            symbol: 'emptyCircle',
            symbolSize: 6,
            type: 'line',
            data: chartData.seriesData
        }
    ];
}

option = {
    backgroundColor: '#00265f',
    color: '#2d8cf0',
    tooltip: {
        axisPointer: {
            tyle: 'line',
            lineStyle: {
                type: 'dashed',
                color: '#2d8cf0'
            }
        },
        trigger: 'axis',
        formatter: function(params, ticket, callback) {
            callback;
            var htmlStr = '';
            var valMap = {};
            for (var i = 0; i < params.length; i++) {
                var param = params[i];
                var xName = param.name;
                var seriesName = param.seriesName;
                var value = param.value;
                // var color = param.color;
                if (value === '-') {
                    continue;
                }
                if (valMap[seriesName] === value) {
                    continue;
                }
                htmlStr += '20' + xName + '-01';
                if (chartData.dashStart && params[0].dataIndex >= chartData.dashStart) {
                    htmlStr += '预估';
                }
                htmlStr += '<br/><div>';
                htmlStr += seriesName + '：' + value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
                htmlStr += '</div>';
                valMap[seriesName] = value;
            }
            return htmlStr;
        }
    },
    legend: {
        show: false
    },
    grid: {
        left: 80,
        bottom: 80,
        top: 80,
        right: 80,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: chartData.xAxisNames,
        axisLabel: {
            color: '#2d8cf0'
        },
        axisLine: {
            lineStyle: {
                color: '#2d8cf0'
            }
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: '#2d8cf0'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#2d8cf0'
            }
        }
    },
    series: seriesData
};