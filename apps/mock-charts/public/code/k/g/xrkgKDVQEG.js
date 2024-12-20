option = {
    tooltip: {
        trigger: 'axis'
    },
    color: ["#6ec9f0", "#cab0e0", "#35bdf1"],
    grid: {
        containLabel: true
    },
    legend: {
        data: ['当期值', '对比值', '对比增量']
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#34b9de'
            }
        },
        data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
    }, {
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#34b9de'
            }
        },
        position: "bottom",
        offset: 20,
        data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
    }],
    yAxis: [{
        type: 'value',
        name: '增量',
        min: 0,
        max: 100,
        position: 'right',
        axisLabel: {
            formatter: '{value} %'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#34b9de'
            }
        },
        splitArea: {
            show: true,
            interval: 1,
            areaStyle: {
                color: 'rgba(233,233,222,0.4)',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                color: '#f7f6f5'
            }
        }
    }, {
        type: 'value',
        name: '数值',
        min: 0,
        max: 3000,
        position: 'left',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#34b9de'
            }
        },
        splitArea: {
            show: true,
            interval: 1,
            areaStyle: {
                color: 'rgba(233,233,222,0.4)',
            }
        },
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: '#f7f6f5'
            }
        }
    }],
    series: [{
        name: '当期值',
        type: 'line',
        smooth: true,
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        areaStyle: {
            normal: {
                color: '#6ec9f0',
            }
        },
        lineStyle: {
            normal: {
                width: 1,
                color: "#45dddb"
            }
        },
        data: [1, 13, 37, 35, 15, 13, 25, 21, 6, 45, 32, 2, 4, 13, 6, 4, 11]
    }, {
        name: '对比值',
        type: 'line',
        smooth: true,
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        lineStyle: {
            normal: {
                width: 1,
                color: "#cab0e0"
            }
        },
        data: [109, 136, 395, 489, 407, 176, 922, 379, 638, 1564, 1706, 1251, 1431, 2198, 1349, 2160, 1735]
    }, {
        name: '对比增量',
        type: 'line',
        smooth: true,
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        lineStyle: {
            normal: {
                width: 1,
                color: "#35bdf1"
            }
        },
        data: [209, 236, 325, 439, 507, 576, 722, 879, 938, 1364, 1806, 1851, 1931, 2198, 2349, 2460, 2735]
    }]
};