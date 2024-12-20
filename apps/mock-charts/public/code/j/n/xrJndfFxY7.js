var data = [
    [
        ["TOP1", 60, '张店', '受攻击'],
        ['TOP2', 23, '淄川', '受攻击'],
        ['TOP3', 25, '周村', '受攻击'],
    ],
    [
        ['TOP1', 53, '恒太', '受威胁'],
        ['TOP2', 45, '博山', '受威胁'],
        ['TOP3', 50, '临淄', '受威胁'],
    ],
];
option = {
    grid: {
        top: 20,
        bottom: 50,
        left: "0%",
        right: "3%",
        containLabel: true
    },
    legend: {
        bottom: 10,
        data: ['受攻击', '受威胁'],
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 30,
    },
    tooltip: {
        // show: true,
        formatter: "受攻击区域: {c}<br/>攻击数量: ",
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 10,
        extraCssText: 'border-radius:0;'
    },
    xAxis: {
        splitLine: {
            show: false,
            lineStyle: {
                show: false,
                type: 'solid'
            }
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                fontSize: 12,
                color: '#3e4956'
            },
        },
        splitArea: {
            show: true
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        type: 'category',
        data: ["TOP1", 'TOP2', 'TOP3']
    },
    
    yAxis: {
        splitLine: {
            lineStyle: {
                type: "solid"
            }
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#3e4956'
            },
        },
        minInterval: 25,
    },
    series: [{
        name: '受攻击',
        type: 'scatter',
        // xAxisIndex: 0,
        symbolSize: 25,
        symbolOffset:['-300%',0],
        data: data[0],
        label: {
            normal: {
                show: true,
                formatter: function(param) {
                    return param.data[2];
                },
                position: 'top',
                color: '#3e4956'
            },
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.data[2];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                color: '#3498db'
            }
        }
    }, {
        name: '受威胁',
        type: 'scatter',
        // xAxisIndex: 1,
        symbolSize: 25,
        symbolOffset:['300%',0],
        data: data[1],
        label: {
            normal: {
                show: true,
                formatter: function(param) {
                    return param.data[2];
                },
                position: 'top',
                color: '#3e4956'
            },
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.data[2];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                color: '#2ecc71'
            }
        }
    }]
};