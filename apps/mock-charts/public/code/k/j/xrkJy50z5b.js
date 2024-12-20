option = {
    title: {
        text: '呼吸率',
        subtext: '',
        y: 'top',
        x: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#00000000',
            fontSize: 16
        },
        subtextStyle: {
            fontWeight: 'normal',
            color: '#ff0000',
            fontSize: 14,
        }
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        show: false,
        data: ['呼吸率'],
    },
    toolbox: {
        show: false,
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {},
        }
    },
    dataZoom: {
        show: false,
        start: 0,
        end: 100,
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: [],
        splitLine: {
            show: true,
        }
    }],
    yAxis: [{
        type: 'value',
        scale: true,
        name: '',
        max: '100',
        min: 0,
        boundaryGap: [0, '100%'],
        splitLine: {
            show: true,
        }
    }],
    visualMap: {
        show: true,
        pieces: [{
            gt: 0,
            lte: 45,
            color: '#20B200',
        }, {
            gt: 45,
            lte: 75,
            color: '#2000AA',
        }, {
            gt: 75,
            lte: 100,
            color: '#ffB2AA',
        }],
        outOfRange: {
            color: '#20B2AA',
        }
    },
    series: [{
        name: '呼吸率',
        type: 'line',
        data: [],
        markPoint: {
            data: [{
                type: 'max',
                name: '最大值',
            }, {
                type: 'min',
                name: '最小值',
            }]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值',
            }]
        }
    }]
};

setInterval(function() {
    var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');

    if (option.series[0].data.length <= 50) {
        option.series[0].data.push(Math.round(Math.random() * 100));
        option.xAxis[0].data.push(axisData);
    } else {
        option.series[0].data.shift();
        option.series[0].data.push(Math.round(Math.random() * 100));

        option.xAxis[0].data.shift();
        option.xAxis[0].data.push(axisData);
    }

    myChart.setOption(option);
}, 500);