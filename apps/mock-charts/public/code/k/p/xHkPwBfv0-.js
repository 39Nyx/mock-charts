var data = [{
    value: [550, 4000],
    noise: [30, 63],
    name: 'Airpal AP550B'
}, {
    value: [480, 3000],
    noise: [36, 56],
    name: 'Airpal AP280'
}, {
    value: [250, 2800],
    noise: [23, 48],
    name: 'Blueair 270E Slim'
}, {
    value: [600, 6000],
    noise: [34, 67],
    name: 'Blueair 550E'
}, {
    value: [612, 3500],
    noise: [30, 70],
    name: 'Telamon KJ600F-S89'
}, {
    value: [659, 2700],
    noise: [30, 70],
    name: 'Telamon KJ600F-S76'
}, {
    value: [310, 600],
    noise: [31, 66],
    name: '小米空气净化器2'
}, {
    value: [500, 1500],
    noise: [31, 66],
    name: '小米 Pro'
}, {
    value: [305, 1789],
    noise: [23, 65],
    name: 'Honeywell KJ300F-TAC2101S'
}, {
    value: [375, 2800],
    noise: [30, 65],
    name: 'Airpal AP380B'
}, {
    value: [450, 3600],
    noise: [30, 63],
    name: 'Airpal AP450A'
}, {
    value: [400, 2900],
    noise: [33, 64],
    name: '飞利浦 AC3252'
}, {
    value: [910, 10000],
    noise: [33, 64],
    name: '飞利浦 AC8612'
}, {
    value: [710, 5300],
    noise: [34, 65],
    name: '飞利浦 AC6608'
}, {
    value: [400, 4728],
    noise: [40, 65],
    name: 'A.O. Smith KJ400F-B11'
}, {
    value: [350, 3518],
    noise: [40, 58],
    name: 'A.O. Smith KJ350F-M01C1'
}, {
    value: [470, 3000],
    noise: [55, 70],
    name: '夏普 FP-CH70-N'
}];

var sdata = [];
var tdata = [];
for (var i = 0; i < data.length; ++i) {
    sdata.push({
        name: data[i].name,
        value: [
            data[i].value[0], 
            data[i].value[1], 
            data[i].noise[0]
        ]
    });
    
    tdata.push({
        name: data[i].name,
        value: [
            data[i].value[0], 
            data[i].value[1], 
            data[i].noise[1]
        ]
    });
}

option = {
    backgroundColor: '#FFF',
    xAxis: {
        name: 'CADR',
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#AAA'
            }
        },
        axisLabel: {
            color: '#AAA'
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#EEE'
            }
        }
    },
    yAxis: {
        name: '价格',
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#AAA'
            }
        },
        axisLabel: {
            color: '#AAA'
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#EEE'
            }
        }
    },
    color: ['#79D743'],
    series: [{
        name: '',
        type: 'scatter',
        data: sdata,
        symbolSize: function (v) {
            return v[2] / 2;
        },
        label: {
            normal: {
                show: true,
                formatter: '{b}',
                position: 'bottom',
                color: '#5F3611'
            }
        },
        itemStyle: {
            normal: {
                opacity: 0.5
            }
        }
    }, {
        name: '',
        type: 'scatter',
        data: tdata,
        symbolSize: function (v) {
            return v[2] / 2;
        },
        itemStyle: {
            normal: {
                color: 'transparent',
                opacity: 0.5,
                borderWidth: 1,
                borderColor: '#79D743'
            }
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (v) {
                    return 'CADR: ' + v.value[0] + '；价格：' + v.value[1];
                },
                color: 'red',
                backgroundColor: 'white'
            }
        }
    }],
    dataZoom: [{
        type: 'inside',
        xAxisIndex: 0
    }, {
        type: 'inside',
        yAxisIndex: 0
    }],
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                show: true
            }
        }
    }
}