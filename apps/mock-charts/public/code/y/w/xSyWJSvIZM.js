option = {
    title: {},
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        show: false,
        left: 0,
        right: 0,
        top: 0,
        bottom: '20%',
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        data: [
            '累计服务',
            '认领中',
            '已认领',
            '已圆梦'
        ],
        axisLine: {
            lineStyle: {
                color: '#5d94ca',
                width: 2
            }
        },
        axisLabel: {
            textStyle: {
                margin: 20,
                fontSize: 40,
                color: '#fff'
            }
        }
    }],
    yAxis: {
        type: 'value',

        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['#2a303e', '#262e3b']
            }
        },
        axisLine: {
            lineStyle: {
                color: '#5d94ca',
                width: 2
            }
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
        name: '人数',
        type: 'bar',
        data: [35, 5, 15, 11],
        itemStyle: {
            normal: {
                color: '#5d94ca'
            }
        },
        barWidth:120
    }]
};