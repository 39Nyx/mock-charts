app.title = '检测任务';

var dataBJ = [
    ['2017-01',56,0],
    ['2017-01',25,0],
    ['2017-02',32,0],
    ['2017-02',44,0],
    ['2017-03',23,0],
    ['2017-03',12,0],
    ['2017-03',23,0]
];

var itemStyle = {
    normal: {
        shadowBlur: 10,
        shadowColor: 'rgba(25, 100, 150, 0.5)',
        shadowOffsetY: 5,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
            offset: 0,
            color: 'rgb(129, 227, 238)'
        }, {
            offset: 1,
            color: 'rgb(25, 183, 207)'
        }])
    }
};

option = {
    color: ['#3398DB'],
    title: {
        text: '检测任务',
        x: 'center',
        top: '1%'
    },
    legend: {
        x: 'center',
        y: 'bottom',
        right: 5,
        bottom: 5,
        textStyle: {
            fontSize: 16
        },
        data: ['氨基酸']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataZoom: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    tooltip: {
        trigger: 'axis',
        showDelay: 0,
        axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
                type: 'dashed',
                width: 1
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['2017-01', '2017-02', '2017-03'],
        name: '日期',
        nameTextStyle: {
            fontSize: 14
        },
        splitLine: {
            show: false
        }

    }],
    yAxis: [{
        type: 'value',
        name: '检测值',
        splitNumber: 4,
        nameGap: 20,
        nameTextStyle: {
            fontSize: 16
        },
        splitLine: {
            show: true
        }
    }],
    series: [{
        name: '氨基酸',
        type: 'scatter',
        itemStyle: itemStyle,
        markPoint: {
            data: [{
                    type: 'max',
                    name: '最大值'
                },
                {
                    type: 'min',
                    name: '最小值'
                }
            ]
        },
        markLine: {
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: '#DC143C',
                        type: 'dashed'
                    }

                }
            },
            data: [{
                    yAxis: 35,
                    type: 'max'
                },
                {
                    yAxis: 25,
                    type: 'min'
                }
            ]
        },
        data: dataBJ
    }]
};