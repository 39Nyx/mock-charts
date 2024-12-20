var color1 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: '#fff'
}, {
    offset: 0.4,
    color: '#d3beff'
}, {
    offset: 0.9,
    color: '#6862ff'
}]);
var color2 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: '#FFFFC2'
}, {
    offset: 1,
    color: '#F8F876'
}]);
option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['教师（人）', '占比(%)'],
        align: 'left',
        left: 'center',
        textStyle: {
            fontSize: 20,
            color: '#fff'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['高级', '一级', '二级', '三级', '未评'],
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 32,
                color: '#fff'
            }
        }
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                fontSize: 32,
                color: '#fff'
            }
        },
        splitLine: {
            show: true
        },
        splitArea: {
            show: false
        },
        max: 30000
    }, {
        type: 'category',
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                fontSize: 32,
                color: '#fff'
            }
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: false
        },
        data: ['0%', '10%', '20%', '30%', '40%', '50%', '60%']
    }],
    series: [{
        name: '教师（人）',
        type: 'bar',
        barWidth: '34',
        data: [28010, 19960, 10030, 28570, 25470],
        itemStyle: {
            normal: {
                barBorderRadius: 36,
                color: color1
            }
        }
    }, {
        name: '占比(%)',
        type: 'line',
        symbol: 'circle',
        symbolSize: 20,
        itemStyle: {
            normal: {
                color: '#fff'
            }

        },
        lineStyle: {
            normal: {
                color:'#ffff48',
                width: 6
            }
        },
         areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(241,244,75,0.5)'
                }, {
                    offset: 1,
                    color: 'rgba(199, 237, 250,0.2)'
                }], false)
            }
        },
        data: [16010, 12960, 5030, 2570, 15470]
    }]
};