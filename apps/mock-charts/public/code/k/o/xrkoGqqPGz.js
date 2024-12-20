option = {
    title: {
        text: "专题审批效能",
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        right: 60,
        width: 500,
        itemWidth: 40,
        textStyle: {
            color: "#999"
        },
        data: ['最大值', '最小值', '平均值']
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
        type: 'value',
        name: '办理天数',
        min: 0,
        max: 260,
        interval: 20,
        axisLabel: {
            formatter: '{value} 天'
        }
    }],
    grid: {
        top: 90,
        bottom: 60,
        left:60,
        right:60
    },
    dataZoom: [{
        show: false,
        start: 1,
        end: 100,

    }, {
        show: false,
        type: 'inside',
        start: 1,
        end: 100
    }],

    series: [{
        name: '最大值',
        type: 'bar',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0, [{
                        offset: 0,
                        color: '#2af598'
                    }, {
                        offset: 1,
                        color: '#009efd'
                    }]
                ),
                barBorderRadius: 4
            }
        },
        barWidth: 25,
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}'
            }
        },
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
    }, {
        name: '最小值',
        type: 'bar',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0, [{
                        offset: 0,
                        color: '#FD363B'
                    }, {
                        offset: 1,
                        color: '#CA3378'
                    }]
                ),
                barBorderRadius: 4
            }
        },
        barWidth: 25,
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}'
            }
        },
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
    }, {
        name: '平均值',
        type: 'line',
        symbolSize: 10,
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}天'
            }
        },
        smooth: true,
        showAllSymbol: true,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }]
};