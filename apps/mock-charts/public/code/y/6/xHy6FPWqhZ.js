var  sc_data0 = [
    [28604, 77, 17096869, 'Australia', 1990],
    [31163, 77.4, 27662440, 'Canada', 1990],
    [1516, 68, 1154605773, 'China', 1990],
    [13670, 74.7, 10582082, 'Cuba', 1990],
    [28599, 75, 4986705, 'Finland', 1990],
    [29476, 77.1, 56943299, 'France', 1990],
    [31476, 75.4, 78958237, 'Germany', 1990],
    [28666, 78.1, 254830, 'Iceland', 1990],
    [1777, 57.7, 870601776, 'India', 1990],
    [29550, 79.1, 122249285, 'Japan', 1990],
    [2076, 67.9, 20194354, 'North Korea', 1990],
    [12087, 72, 42972254, 'South Korea', 1990],
    [24021, 75.4, 3397534, 'New Zealand', 1990],
    [43296, 76.8, 4240375, 'Norway', 1990],
    [10088, 70.8, 38195258, 'Poland', 1990],
    [19349, 69.6, 147568552, 'Russia', 1990],
    [10670, 67.3, 53994605, 'Turkey', 1990],
    [26424, 75.7, 57110117, 'United Kingdom', 1990],
    [37062, 75.4, 252847810, 'United States', 1990]
];

var  sc_data = [
    [28604, 77],
    [31163, 77.4],
    [1516, 68],
    [13670, 74.7],
    [28599, 75],
    [29476, 77.1],
    [31476, 75.4],
    [28666, 78.1],
    [1777, 57.7],
    [29550, 79.1],
    [2076, 67.9],
    [12087, 72],
    [24021, 75.4],
    [43296, 76.8],
    [10088, 70.8],
    [19349, 69.6],
    [10670, 67.3],
    [26424, 75.7],
    [37062, 75.4],
    [44056, 81.8],
    [43294, 81.7],
    [13334, 76.9],
    [21291, 78.5],
    [38923, 80.8],
    [37599, 81.9],
    [44053, 81.1],
    [42182, 82.8],
    [5903, 66.8],
    [36162, 83.5],
    [1390, 71.4],
    [34644, 80.7],
    [34186, 80.6],
    [64304, 81.6],
    [24787, 77.3],
    [23038, 73.13],
    [19360, 76.5],
    [38225, 81.4],
    [53354, 79.1]
];

// See https://github.com/ecomfe/echarts-stat
var myRegression = ecStat.regression('logarithmic',  sc_data);

myRegression.points.sort(function(a, b) {
    return a[0] - b[0];
});

option = {
    // legend: {
    //     data: ['1990', '2015'],
    //     bottom: 20
    // },
    // title: {
    //     text: '1990 and 2015 per capita life expectancy and GDP',
    //     subtext: 'By ecStat.regression',
    //     sublink: 'https://github.com/ecomfe/echarts-stat',
    //     left: 'center'
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        top: 80,
        bottom: 90
    },
    xAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
    },
    series: [{
        name: '1990',
        type: 'scatter',
        symbolSize: function(data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            },
        data:  sc_data0
    }, {
        name: 'line',
        type: 'line',
        lineStyle: {
            normal: {
                color: '#2f4554'
            }
        },
        smooth: true,
        showSymbol: false,
        data: myRegression.points,
        markPoint: {
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    formatter: myRegression.expression,
                    textStyle: {
                        color: '#333',
                        fontSize: 14
                    }
                }
            },
            data: [{
                coord: myRegression.points[myRegression.points.length - 1]
            }]
        }
    }]
};