var colors = ['#5793f3', '#d14a61', '#675bba'];


option = {
    tooltip: {
        trigger: 'axis'
    },

    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    legend: {
        data: ['水位', '蓄水量']
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2016-07-01', '2016-07-02', '2016-07-03', '2016-07-04', '2016-07-05', '2016-07-06', '2016-07-07'],
        splitLine: {
            show: false,
            interval: 'auto'
        }
    },
    yAxis: [{
        name: '水位',
        position: 'left',
        type: 'value',
        axisLabel: {
            formatter: '{value} m'
        },
        axisLine: {
            lineStyle: {
                color: colors[0]
            }
        },
        splitLine: {
            show: false
        },
        min: 'dataMin',
        axisLabel: {
            inside: true
        }
    }, {
        name: '蓄水量',
        position: 'right',
        type: 'value',
        axisLabel: {
            formatter: '{value} m³/s'
        },
        axisLine: {
            lineStyle: {
                color: colors[1]
            }
        },
        splitLine: {
            show: false
        },
        min: 'dataMin',
        axisLabel: {
            inside: true
        }
    }],
    series: [{
        name: '水位',
        yAxisIndex: 0,
        type: 'line',
        smooth: true,
        data: [967, 968, 965, 969, 971, 963, 967],
        animation: false

    }, {
        name: '蓄水量',
        yAxisIndex: 1,
        type: 'line',
        smooth: true,
        data: [25, 24, 23, 22, 20, 32, 30],
        animation: false

    }]
};