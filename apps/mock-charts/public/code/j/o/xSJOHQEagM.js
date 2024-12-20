var actualAndPlanDataA = [181, 220, '协议总量'];
var actualAndPlanDataB = [95, 120, '汽车冷轧板协议量'];
var actualAndPlanDataC = [86, 100, '酸洗协议量'];
var timeData = ['1701', '1702', '1703', '1704', '1705', '1706', '1707', '1708', '1709', '1710', '1711', '1712'];
timeData = timeData.map(function(str) {
    return str.replace('17', '') + '月';
});
var typeData = ['数据A', '数据B', '数据C'];
var dataA = [67, 68, 67, 68, 69, 70, 71, 72, 73, 72, 70, 71];
var dataB = [55, 60, 70, 75, 73, 72, 70, 71, 70, 69, 68, 67];
var dataC = [45, 54, 64, 80, 57, 66, 62, 49, 55, 59, 63, 59];
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(data) {
            var _str = "";
            var nameX = data[0].axisValue;
            var seriesX = data[0].seriesType;
            console.log(data);
            if (seriesX == 'line') {
                _str = nameX + "<br>" + data[0].seriesName + "：" + data[0].data + "<br>" + data[1].seriesName + "：" + data[1].data + "<br>" + data[2].seriesName + "：" + data[2].data;
            } else {
                var dataX = [];
                if (nameX == actualAndPlanDataA[2]) {
                    dataX = actualAndPlanDataA;
                } else if (nameX == actualAndPlanDataB[2]) {
                    dataX = actualAndPlanDataB;
                } else if (nameX == actualAndPlanDataC[2]) {
                    dataX = actualAndPlanDataC;
                }
                _str = dataX[2] + "<br>";
                _str += "实际量： " + dataX[0] + " 万吨<br>";
                _str += "计划量： " + dataX[1] + " 万吨<br>";
                _str += "完成率： " + (dataX[0] * 100 / dataX[1]).toFixed(2) + " %<br>";
            }
            return _str;
        }
    },
    legend: [{
        show: true,
        bottom: '1%',
        data: typeData
    }],
    grid: [{
        left: '5%',
        right: '5%',
        bottom: '82%',
        top: '10%'
    }, {
        left: '5%',
        right: '5%',
        bottom: '69%',
        top: '23%'
    }, {
        left: '5%',
        right: '5%',
        bottom: '56%',
        top: '36%'
    }, {
        left: '5%',
        right: '5%',
        bottom: '8%',
        top: '50%'
    }],
    xAxis: [{
        type: 'value',
        show: false,
        gridIndex: 0
    }, {
        type: 'value',
        show: false,
        gridIndex: 1
    }, {
        type: 'value',
        show: false,
        gridIndex: 2
    }, {
        type: 'category',
        show: true,
        gridIndex: 3,
        data: timeData
    }],
    yAxis: [{
        type: 'category',
        show: false,
        position: "left",
        gridIndex: 0,
        data: [actualAndPlanDataA[2]]
    }, {
        type: 'category',
        show: false,
        position: "left",
        gridIndex: 0,
        data: [actualAndPlanDataA[2]]
    }, {
        type: 'category',
        show: false,
        position: "left",
        gridIndex: 1,
        data: [actualAndPlanDataB[2]]
    }, {
        type: 'category',
        show: false,
        position: "left",
        gridIndex: 1,
        data: [actualAndPlanDataB[2]]
    }, {
        type: 'category',
        show: false,
        position: "left",
        gridIndex: 2,
        data: [actualAndPlanDataC[2]]
    }, {
        type: 'category',
        show: false,
        position: "left",
        gridIndex: 2,
        data: [actualAndPlanDataC[2]]
    }, {
        type: 'value',
        show: true,
        gridIndex: 3
    }],
    graphic: [{
            type: 'text',
            z: 100,
            top: '7%',
            right: '5%',
            style: {
                fill: '#000000',
                text: actualAndPlanDataA[2] + '：' + actualAndPlanDataA[1] + '万吨',
                font: 'bolder 14px Microsoft YaHei'
            }
        }, {
            type: 'text',
            z: 100,
            top: '7%',
            left: '5%',
            style: {
                fill: '#000000',
                text: '当前完成：' + actualAndPlanDataA[0] + '万吨',
                font: 'bolder 14px Microsoft YaHei'
            }
        }, {
            type: 'text',
            z: 100,
            top: '20%',
            right: '5%',
            style: {
                fill: '#000000',
                text: actualAndPlanDataB[2] + '：' + actualAndPlanDataB[1] + '万吨',
                font: 'bolder 14px Microsoft YaHei'
            }
        }, {
            type: 'text',
            z: 100,
            top: '20%',
            left: '5%',
            style: {
                fill: '#000000',
                text: '当前完成：' + actualAndPlanDataB[0] + '万吨',
                font: 'bolder 14px Microsoft YaHei'
            }
        }, {
            type: 'text',
            z: 100,
            top: '33%',
            right: '5%',
            style: {
                fill: '#000000',
                text: actualAndPlanDataC[2] + '：' + actualAndPlanDataC[1] + '万吨',
                font: 'bolder 14px Microsoft YaHei'
            }
        }, {
            type: 'text',
            z: 100,
            top: '33%',
            left: '5%',
            style: {
                fill: '#000000',
                text: '当前完成：' + actualAndPlanDataC[0] + '万吨',
                font: 'bolder 14px Microsoft YaHei'
            }
        }

    ],
    series: [{
        name: '计划量',
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 0,
        label: {
            normal: {
                show: true,
                formatter: '100%',
                position: 'insideRight'
            }
        },
        itemStyle: {
            normal: {
                color: '#aaa'
            }
        },
        data: [100]
    }, {
        name: '实际量',
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                formatter: function(data) {
                    return actualAndPlanDataA[0] + " 万吨 (" + (actualAndPlanDataA[0] * 100 / actualAndPlanDataA[1]).toFixed(2) + " %) ";
                },
                position: 'insideRight'
            }
        },
        itemStyle: {
            normal: {
                color: '#FF7500'
            }
        },
        data: [parseInt(actualAndPlanDataA[0] / actualAndPlanDataA[1] * 100)]
    }, {
        name: '计划量',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 2,
        label: {
            normal: {
                show: true,
                formatter: '100%',
                position: 'insideRight'
            }
        },
        itemStyle: {
            normal: {
                color: '#aaa'
            }
        },
        data: [100]
    }, {
        name: '实际量',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 3,
        label: {
            normal: {
                show: true,
                formatter: function(data) {
                    return actualAndPlanDataB[0] + " 万吨 (" + (actualAndPlanDataB[0] * 100 / actualAndPlanDataB[1]).toFixed(2) + " %) ";
                },
                position: 'insideRight'
            }
        },
        itemStyle: {
            normal: {
                color: '#4ABFBF'
            }
        },
        data: [parseInt(actualAndPlanDataB[0] / actualAndPlanDataB[1] * 100)]
    }, {
        name: '计划量',
        type: 'bar',
        xAxisIndex: 2,
        yAxisIndex: 4,
        label: {
            normal: {
                show: true,
                formatter: '100%',
                position: 'insideRight'
            }
        },
        itemStyle: {
            normal: {
                color: '#aaa'
            }
        },
        data: [100]
    }, {
        name: '实际量',
        type: 'bar',
        xAxisIndex: 2,
        yAxisIndex: 5,
        label: {
            normal: {
                show: true,
                formatter: function(data) {
                    return actualAndPlanDataC[0] + " 万吨 (" + (actualAndPlanDataC[0] * 100 / actualAndPlanDataC[1]).toFixed(2) + " %) ";
                },
                position: 'insideRight'
            }
        },
        itemStyle: {
            normal: {
                color: '#FFB800'
            }
        },
        data: [parseInt(actualAndPlanDataC[0] / actualAndPlanDataC[1] * 100)]
    }, {
        name: typeData[0],
        type: 'line',
        symbolSize: 8,
        xAxisIndex: 3,
        yAxisIndex: 6,
        hoverAnimation: false,
        data: dataA,
        itemStyle: {
            normal: {
                barBorderRadius: 0,
            }
        }
    }, {
        name: typeData[1],
        type: 'line',
        symbolSize: 8,
        xAxisIndex: 3,
        yAxisIndex: 6,
        hoverAnimation: false,
        data: dataB,
        itemStyle: {
            normal: {
                barBorderRadius: 0,
            }
        }
    }, {
        name: typeData[2],
        type: 'line',
        symbolSize: 8,
        xAxisIndex: 3,
        yAxisIndex: 6,
        hoverAnimation: false,
        data: dataC,
        itemStyle: {
            normal: {
                barBorderRadius: 0,
            }
        }
    }]
};