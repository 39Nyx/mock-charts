option = {
    title: {
        text: '登录次数：9'
    },
    color: ['#71d8ff', '#609ee9'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: null // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: 'rgba(255,255,255,1)',
        padding: [5, 10],
        textStyle: {
            color: '#7588E4',
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)',
    },
    legend: {
        data: ['平均在线时长', '平均游戏时长'],
        orient: 'vertical',
        top: 80,
        right: '4%'
    },
    grid: {
        left: '4%',
        right: '4%',
        top: '20%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: ['']
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        name: '平均在线时长',
        type: 'bar',
        barGap: 0,
        barWidth: 40,
        data: [130],
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: function(a) {
                    var c = a.data
                    var h = Math.floor(c / 60)
                    var m = c % 60
                    return h + 'h' + m + 'min'
                }
            }
        }

    }, {
        name: '平均游戏时长',
        type: 'bar',
        barWidth: 40,
        data: [200],
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: function(b) {
                    var c = b.data
                    var h = Math.floor(c / 60)
                    var m = c % 60
                    return h + 'h' + m + 'min'
                }
            }
        }
    }]
}