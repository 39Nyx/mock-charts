function detectionData(str) {
    var color = '#5eb95e';
    if (str >= 30 && str <= 60) {
        color = '#F37B1D';
    } else if (str > 60) {
        color = '#dd514c';
    }
    return color;
}
option = {
    backgroundColor: '#00264d',
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [{
        type: 'gauge',
        name: '业务指标',
        radius: '100%',
        startAngle: '180',
        endAngle: '0',
        splitNumber: '3',
        pointer: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: [
                    [0.33333, '#00FF00'],
                    [0.66666, '#F6BB41'],
                    [1, '#D14352']
                ],
                width: 10,
                shadowBlur: 0,
                shadowColor: '',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: 1
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            length: 10,
            lineStyle: {
                color: '#00377a',
                width: 2,
            },
        },
        axisLabel: {
            show: false
        }
    }, {
        type: 'gauge',
        name: '业务指标',
        radius: '95%',
        startAngle: '180',
        endAngle: '0',
        splitNumber: '12',
        data: [{
            value: 28.8,
            name: '完成率'
        }],
        axisLine: {
            show: true,
            lineStyle: {
                color: [
                    [0.33333, '#00FF00'],
                    [0.66666, '#F6BB41'],
                    [1, '#D14352']
                ],
                width: 50
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            length: 50,
            lineStyle: {
                color: '#00377a',
            },
        },
        axisLabel: {
            show: false
        }
    }]
};
app.timeTicket = setInterval(function() {
    var value = (Math.random() * 100).toFixed(2) - 0;
    option.series[1].data[0].value = value;
    option.series[1].axisLine.lineStyle.color[0][0] = value / 100;
    option.series[1].axisLine.lineStyle.color[0][1] = detectionData(value);
    myChart.setOption(option, true);
}, 1000);