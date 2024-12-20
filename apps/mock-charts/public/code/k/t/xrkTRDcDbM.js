option = {
    tooltip: {
        trigger: 'axis',
        show: false
    },
    xAxis: [{
        type: 'category',
        data: ['一', '二', '三', '四', '五'],
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true
        },
        axisLabel: {
            show: true
        }
    }],
    series: [{
        type: 'pictorialBar',
        symbol: 'path://M2,10 Q5,0 8,10',
        barMaxWidth: 40,
        itemStyle: {
            normal: {
                opacity: 0.5
            }
        },
        label: {
            normal: {
                formatter: '{c}',
                show: true,
                position: 'top'
            }
        },
        data: [{
            value: 123,
            itemStyle: {
                normal: {
                    color: '#e54035'
                }
            }
        }, {
            value: 60,
            itemStyle: {
                normal: {
                    color: '#054005'
                }
            }
        }, {
            value: 25,
            itemStyle: {
                normal: {
                    color: '#ff4005'
                }
            }
        }, {
            value: 12,
            itemStyle: {
                normal: {
                    color: '#0540ff'
                }
            }
        }, {
            value: 6,
            itemStyle: {
                normal: {
                    color: '#f54ff5'
                }
            }
        }]
    }]
};